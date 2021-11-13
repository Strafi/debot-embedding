import { AbiContract } from '@tonclient/core';
import tonClientController from '/src/TonClient';
import { IDebotInterfaceParams } from '../types';

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
			const decodedMessage = await tonClientController.client.abi.decode_message({
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
			} catch (err) {
				throw new Error(`Function does not exist on interface: ${this.constructor.name}`);
			}
		} catch (err) {
			console.error('Interface execution failed: ', err);
		}
	}
}

export default BaseInterface;
