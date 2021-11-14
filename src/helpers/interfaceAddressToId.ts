import { INTERFACE_ADDRESS_PREFIX } from '/src/constants';

function interfaceAddressToId(address: string): string {
	if (!address.startsWith(INTERFACE_ADDRESS_PREFIX))
		return address

	return address.slice(INTERFACE_ADDRESS_PREFIX.length);
}

export default interfaceAddressToId;
