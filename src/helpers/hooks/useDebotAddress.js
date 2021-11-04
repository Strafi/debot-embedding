import useSearchParams from './useSearchParams';
import { DEBOT_ADDRESS_SEARCH_PARAM } from '/src/constants';

function useDebotAddress() {
	const searchParams = useSearchParams();
	return searchParams.get(DEBOT_ADDRESS_SEARCH_PARAM);
}

export default useDebotAddress;
