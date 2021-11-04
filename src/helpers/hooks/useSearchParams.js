import { useLocation } from 'react-router-dom';

function useSearchParams() {
	return new URLSearchParams(useLocation().search);
}

export default useSearchParams;
