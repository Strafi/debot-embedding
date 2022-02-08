import axios, { AxiosResponse } from 'axios';
import store from '/src/store';
import EventBus from '/src/EventBus';
import { DEngine } from '/src/debot';
import { interfaceIdToAddress } from '/src/helpers';
import { pushItemToStage } from '/src/store/actions/debot';
import { NETWORK_ID } from '/src/constants/debot';
import { COMPONENTS_BINDINGS, EVENTS } from '/src/constants';
import NETWORK_ABI from './abi';
import BaseInterface from '../../base';
import { TDebotStageItem } from '/src/types';
import { TExtendedDebotInterfaceParams,  } from '../../../types';

class Network extends BaseInterface {
	static id = NETWORK_ID;

	constructor() {
		super(NETWORK_ABI);
	}

	async get(params: TExtendedDebotInterfaceParams) {
		const { value, debotAddress } = params;
		const { answerId, url, headers } = value;

		const interfaceAddress = interfaceIdToAddress(Network.id);
		const decodedHeaders = this.parseHeaders(headers);

		try {
			const res = await axios.get(url, {
				headers: decodedHeaders,
				responseType: 'text',
				transformResponse: [(data: unknown) => data],
			});

			const input = this.prepareInput(res);

			await DEngine.callDebotFunction(debotAddress, interfaceAddress, answerId, input);
		} catch (err) {
			this.handleError(err as Error, debotAddress, answerId);
		}
	}

	async post(params: TExtendedDebotInterfaceParams) {
		const { value, debotAddress } = params;
		const { answerId, url, headers, body } = value;

		const interfaceAddress = interfaceIdToAddress(Network.id);
		const decodedHeaders = this.parseHeaders(headers);

		try {
			const res = await axios.post(url, {
				headers: decodedHeaders,
				responseType: 'text',
				body,
				transformResponse: [(data: unknown) => data],
			});

			const input = this.prepareInput(res);

			await DEngine.callDebotFunction(debotAddress, interfaceAddress, answerId, input);
		} catch (err) {
			this.handleError(err as Error, debotAddress, answerId);
		}
	}

	private handleError(err: Error, debotAddress: string, functionId: string) {
		EventBus.dispatch(EVENTS.DEBOT.FUNCTION_EXECUTION_FAILED, {
			interfaceId: Network.id,
			debotAddress,
			functionId,
			data: { message: err.message },
		});

		console.error(err);

		store.dispatch(pushItemToStage({
			text: err.message,
			component: COMPONENTS_BINDINGS.TEXT,
			isError: true,
		} as TDebotStageItem));
	}

	private prepareInput(res: AxiosResponse<any, any>) {
		const entries = Object.entries(res.headers);
		const retHeaders: string[] = entries.map(([key, value]) => `${key}: ${value}`);

		const input = {
			statusCode: res.status,
			retHeaders,
			content: res.data,
		};

		return input;
	}

	private parseHeaders(source: string[]) {
		let headers: { [key: string]: string } = {};

		for (const item of source) {
			const split = item.split(': ');

			headers[split[0]] = split[1];
		}

		return headers;
	}
}

export default Network;
