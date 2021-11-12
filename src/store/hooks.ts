import {
	TypedUseSelectorHook,
	useSelector as useReduxSelector,
	useDispatch as useReduxDispatch,
} from 'react-redux';
import { Dispatch } from 'redux';

import { TPossibleStoreActions, TRootStoreState } from './types';

export const useDispatch = () => useReduxDispatch<Dispatch<TPossibleStoreActions>>();

export const useSelector: TypedUseSelectorHook<TRootStoreState> = useReduxSelector;
