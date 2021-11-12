import { useLocation } from 'react-router-dom';

function useSearchParams(): URLSearchParams {
	return new URLSearchParams(useLocation().search);
}

export default useSearchParams;
