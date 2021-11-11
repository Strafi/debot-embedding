import React, { useContext } from 'react';

import HeaderParamsContext from '/src/contexts/HeaderParamsContext';
import DebotOnlyContext from '/src/contexts/DebotOnlyContext';
import SearchBar from '../SearchBar';
import HeaderNetworkSelector from './NetworkSelector';
import HeaderAccount from './Account';
import HeaderBackButton from './BackButton';
import './index.scss';

const defaultParams = {
	hideBackButton: false,
	hideSearchBar: false,
	hideNetworkSelector: false,
	hideAccount: false,
};

const Header = () => {
	const isDebotOnly = useContext(DebotOnlyContext);
	const headerParams = useContext(HeaderParamsContext);
	const hideBackButton = headerParams?.hideBackButton || defaultParams.hideBackButton;
	const hideSearchBar = headerParams?.hideSearchBar || defaultParams.hideSearchBar;
	const hideNetworkSelector = headerParams?.hideNetworkSelector || defaultParams.hideNetworkSelector;
	const hideAccount = headerParams?.hideAccount || defaultParams.hideAccount;

	return (
		<header className='header-container'>
			{!hideBackButton && <HeaderBackButton /> }
			{!hideSearchBar && <SearchBar isDebotOnly={isDebotOnly} /> }
			<div className='header-container__settings-bar'>
				{!hideNetworkSelector && <HeaderNetworkSelector />}
				{!hideAccount && <HeaderAccount />}
			</div>
		</header>
	);
}

export default Header;
