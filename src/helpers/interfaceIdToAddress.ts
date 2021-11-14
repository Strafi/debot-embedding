import { INTERFACE_ADDRESS_PREFIX } from '/src/constants';

function interfaceIdToAddress(id: string): string {
	if (id.startsWith(INTERFACE_ADDRESS_PREFIX))
		return id

	return `${INTERFACE_ADDRESS_PREFIX}${id}`;
}

export default interfaceIdToAddress;
