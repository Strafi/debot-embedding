import axios, { AxiosResponse } from 'axios';
import store from '/src/store';
import EventBus from '/src/EventBus';
import { DEngine } from '/src/debot';
import { decodeString, interfaceIdToAddress, encodeString } from '/src/helpers';
import { pushItemToStage } from '/src/store/actions/debot';
import { NETWORK_ID } from '/src/constants/debot';
import { COMPONENTS_BINDINGS, EVENTS } from '/src/constants';
import { NETWORK_ABI } from '../ABIs';
import BaseInterface from './base';
import { TDebotStageItem } from '/src/types';
import { TExtendedDebotInterfaceParams,  } from '../types';

class Network extends BaseInterface {
	constructor() {
		super(NETWORK_ID, NETWORK_ABI);
	}

	async get(params: TExtendedDebotInterfaceParams) {
		const { value, debotAddress } = params;
		const { answerId, url, headers } = value;

		const interfaceAddress = interfaceIdToAddress(this.id);
		const decodedUrl = decodeString(url)!;
		const decodedHeaders = this.parseHeaders(headers);

		try {
			const res = await axios.get(decodedUrl, {
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

		const interfaceAddress = interfaceIdToAddress(this.id);
		const decodedUrl = decodeString(url)!;
		const decodedHeaders = this.parseHeaders(headers);
		const decodedBody = decodeString(body);

		try {
			const res = await axios.post(decodedUrl, {
				headers: decodedHeaders,
				responseType: 'text',
				body: decodedBody,
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
			interfaceId: this.id,
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
		const retHeaders: string[] = entries.map(([key, value]) => encodeString(`${key}: ${value}`)!);

		const input = {
			statusCode: res.status,
			retHeaders,
			content: encodeString(res.data),
		};

		return input;
	}

	private parseHeaders(source: string[]) {
		let headers: { [key: string]: string } = {};

		for (const item of source) {
			const str = decodeString(item)!;
			const split = str.split(': ');

			headers[split[0]] = split[1];
		}

		return headers;
	}
}

export default Network;
