import { EXPLORER_BASE_URL } from '/src/constants';

function createExplorerUrl(addr: string): string {
	return `${EXPLORER_BASE_URL}${addr}`;
}

export default createExplorerUrl;
