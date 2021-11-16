import { AbiContract } from '@tonclient/core';
import TonClient from '/src/TonClient';
import EventBus from '/src/EventBus';
import { EVENTS } from '/src/constants/events';
import { IDebotInterfaceParams, TExtendedDebotInterfaceParams } from '../types';

export interface IBaseInterface {
	id: string,
	call: (params: IDebotInterfaceParams) => Promise<void>
}

abstract class BaseInterface implements IBaseInterface {
	id: string;
	protected abi: AbiContract;

	constructor(id: string, abi: AbiContract) {
		this.id = id;
		this.abi = abi;
	}

	async call(params: IDebotInterfaceParams): Promise<void> {
		try {
			const decodedMessage = await TonClient.client.abi.decode_message({
				abi: {
					type: 'Contract',
					value: this.abi,
				},
				message: params.message,
			});

			const extendedParams = {
				...params,
				...decodedMessage,
			}

			try {
				//@ts-ignore name will always match one of child interfaces functions
				this[decodedMessage.name](extendedParams);

				this.sendEvent(extendedParams);
			} catch (err) {
				throw new Error(`Function does not exist on interface: ${this.constructor.name}`);
			}
		} catch (err) {
			console.error('Interface execution failed: ', err);

			EventBus.dispatch(EVENTS.DEBOT.FUNCTION_EXECUTION_FAILED, {
				interfaceId: this.id,
				debotAddress: params.debotAddress,
				data: { params, message: (err as Error).message },
			});
		}
	}

	protected sendEvent(params: TExtendedDebotInterfaceParams): void {
		const { value: { answerId }, debotAddress } = params;

		EventBus.dispatch(EVENTS.DEBOT.FUNCTION_CALLED, {
			interfaceId: this.id,
			debotAddress,
			functionId: answerId,
			data: params,
		});
	}
}

export default BaseInterface;
