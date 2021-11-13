import React from 'react';

export type THeaderParamsContext = {
	hideBackButton?: boolean,
	hideSearchBar?: boolean,
	hideNetworkSelector?: boolean,
	hideAccount?: boolean,
}

const HeaderParamsContext = React.createContext<THeaderParamsContext | null>(null);

export default HeaderParamsContext;
