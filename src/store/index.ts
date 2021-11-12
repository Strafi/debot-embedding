import { createStore, compose, Store } from 'redux';
import rootReducer from './reducers';
import { TPossibleStoreActions, TRootStoreState } from './types';

const initialState = {};
const enhancers = [];

//@ts-ignore
if (import.meta.env.NODE_ENV === 'development') {
	//@ts-ignore
	const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

	if (typeof devToolsExtension === 'function')
		enhancers.push(devToolsExtension());
}

const composedEnhancers = compose(
	...enhancers,
);

const store: Store<TRootStoreState, TPossibleStoreActions> = createStore(
	rootReducer,
	initialState,
	//@ts-ignore
	composedEnhancers,
);

export default store;
