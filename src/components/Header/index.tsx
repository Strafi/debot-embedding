import React, { useContext, FC, useLayoutEffect, useState } from 'react';
import { hasTonProvider } from 'ton-inpage-provider';
import { isMobile } from 'react-device-detect';

import { HeaderParamsContext, DebotOnlyContext, DebotParamsContext } from '/src/contexts';
import SearchBar from '../SearchBar';
import HeaderNetworkSelector from './NetworkSelector';
import HeaderAccount from './Account';
import HeaderBackButton from './BackButton';
import DebotControls from '../Debot/Controls';
import './index.scss';

const defaultParams = {
	hideBackButton: false,
	hideSearchBar: false,
	hideNetworkSelector: false,
	hideAccount: false,
};

const Header: FC = () => {
	const [hideAccountBecauseNoProvider, setHideAccountBecauseNoProvider] = useState(false);
	const isDebotOnly = useContext(DebotOnlyContext);
	const headerParams = useContext(HeaderParamsContext);
	const debotParams = useContext(DebotParamsContext);
	const hideBackButton = headerParams?.hideBackButton || defaultParams.hideBackButton;
	const hideSearchBar = headerParams?.hideSearchBar || defaultParams.hideSearchBar;
	const hideNetworkSelector = headerParams?.hideNetworkSelector || defaultParams.hideNetworkSelector;
	const hideAccount = headerParams?.hideAccount || defaultParams.hideAccount || hideAccountBecauseNoProvider;

	useLayoutEffect(() => {
		const asyncOnMount = async () => {
			setHideAccountBecauseNoProvider(isMobile && !await hasTonProvider());
		}

		asyncOnMount();
	}, []);

	const renderSearchBarComponents = () => (
		<>
			{!hideBackButton && <HeaderBackButton /> }
			{!hideSearchBar && <SearchBar isDebotOnly={isDebotOnly} /> }
		</>
	);

	return (
		<header className='header-container'>
			{debotParams?.showControlsInHeader && debotParams.debotAddress
				? <DebotControls debotAddress={debotParams.debotAddress} />
				: renderSearchBarComponents()
			}
			<div className='header-container__settings-bar'>
				{!hideNetworkSelector && <HeaderNetworkSelector />}
				{!hideAccount && <HeaderAccount />}
			</div>
		</header>
	);
}

export default Header;
