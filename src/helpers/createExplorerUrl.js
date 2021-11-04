import { EXPLORER_BASE_URL } from '/src/constants';

function createExplorerUrl(addr) {
	return `${EXPLORER_BASE_URL}${addr}`;
}

export default createExplorerUrl;
