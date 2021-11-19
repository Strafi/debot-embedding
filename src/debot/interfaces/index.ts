import Terminal from './terminal';
import Media from './media';
import Menu from './menu';
import AmountInput from './amount_input';
import ConfirmInput from './confirm_input';
import AddressInput from './address_input';
import NumberInput from './number_input';
import Echo from './echo';
import Stdout from './stdout';
import Userinfo from './userinfo';
import SigningBoxInput from './signing_box_input';
import Network from './network';
import QrCode from './qr_code';
import { IDebotInterfaceParams } from '../types';
import { IBaseInterface } from './base';

interface IInterfacesController {
	checkAreInterfacesSupported: (interfaces: string[]) => boolean;
	delegateToInterface: (interfaceId: string, params: IDebotInterfaceParams) => void;
}

class InterfacesController implements IInterfacesController {
	private state: Map<string, IBaseInterface>;

	constructor() {
		const terminal = new Terminal();
		const menu = new Menu();
		const amountInput = new AmountInput();
		const confirmInput = new ConfirmInput();
		const addressInput = new AddressInput();
		const numberInput = new NumberInput();
		const echo = new Echo();
		const stdout = new Stdout();
		const userinfo = new Userinfo();
		const media = new Media();
		const signingBoxInput = new SigningBoxInput();
		const network = new Network();
		const qrCode = new QrCode();

		this.state = new Map([
			[terminal.id, terminal as IBaseInterface],
			[media.id, media],
			[menu.id, menu],
			[amountInput.id, amountInput],
			[confirmInput.id, confirmInput],
			[addressInput.id, addressInput],
			[numberInput.id, numberInput],
			[echo.id, echo],
			[stdout.id, stdout],
			[userinfo.id, userinfo],
			[signingBoxInput.id, signingBoxInput],
			[network.id, network],
			[qrCode.id, qrCode],
		]);
	}

	checkAreInterfacesSupported(interfaces: string[]): boolean {
		for (const interfaceAddress of interfaces) {
			const interfaceId = interfaceAddress.slice(2);

			if (!this.state.has(interfaceId))
				return false;
		}

		return true;
	}

	delegateToInterface(interfaceId: string, params: IDebotInterfaceParams) {
		const _interface = this.state.get(interfaceId);

		console.log(`Calling ${_interface?.constructor?.name} by id: ${interfaceId}`);

		try {
			_interface!.call(params);
		} catch(_) {
			console.error(`Interface with id ${interfaceId} is not implemented`);
		}
	}
}

export default new InterfacesController();
