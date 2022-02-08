import * as interfaces_20 from './2.0_interfaces';
import * as interfaces_22 from './2.2_interfaces';
import { DEBOT_INTERFACE_ID } from '/src/constants/debot';
import { IDebotInterfaceParams } from '../types';

interface IInterfacesController {
	checkAreInterfacesSupported: (interfaces: string[]) => boolean;
	delegateToInterface: (interfaceId: string, params: IDebotInterfaceParams) => void;
}

const DEFAULT_ABI_VERSION = '2.0';

const InterfaceIdsBindings = {
	[DEBOT_INTERFACE_ID.ADDRESS_INPUT]: 'AddressInput',
	[DEBOT_INTERFACE_ID.AMOUNT_INPUT]: 'AmountInput',
	[DEBOT_INTERFACE_ID.CONFIRM_INPUT]: 'ConfirmInput',
	[DEBOT_INTERFACE_ID.MEDIA]: 'Media',
	[DEBOT_INTERFACE_ID.MENU]: 'Menu',
	[DEBOT_INTERFACE_ID.NETWORK]: 'Network',
	[DEBOT_INTERFACE_ID.NUMBER_INPUT]: 'NumberInput',
	[DEBOT_INTERFACE_ID.QR_CODE]: 'QrCode',
	[DEBOT_INTERFACE_ID.SIGNING_BOX_INPUT]: 'SigningBoxInput',
	[DEBOT_INTERFACE_ID.TERMINAL]: 'Terminal',
	[DEBOT_INTERFACE_ID.USERINFO]: 'Userinfo',
}

class InterfacesController implements IInterfacesController {
	checkAreInterfacesSupported(interfaces: string[]): boolean {
		for (const interfaceAddress of interfaces) {
			const interfaceId = interfaceAddress.slice(2);

			if (!InterfaceIdsBindings[interfaceId])
				return false;
		}

		return true;
	}

	delegateToInterface(interfaceId: string, params: IDebotInterfaceParams) {
		const abiVersion = params.abiVersion || DEFAULT_ABI_VERSION;
		const interfaces = abiVersion === DEFAULT_ABI_VERSION
			? interfaces_20
			: interfaces_22;

		//@ts-ignore
		const Interface = interfaces[InterfaceIdsBindings[interfaceId]];
		const _interface = new Interface();

		console.log(_interface);

		console.log(`Calling ${_interface?.constructor?.name} by id: ${interfaceId}`);

		try {
			_interface!.call(params);
		} catch(_) {
			console.error(`Interface with id ${interfaceId} is not implemented`);
		}
	}
}

export default new InterfacesController();
