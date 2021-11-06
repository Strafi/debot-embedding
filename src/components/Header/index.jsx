import React from 'react';

import SearchBar from '../SearchBar';
import HeaderNetworkSelector from './NetworkSelector';
import HeaderAccount from './Account';
import HeaderBackButton from './BackButton';
import './index.scss';

const Header = () => {
	return (
		<header className='header-container'>
			<HeaderBackButton />
			<SearchBar />
			<div className='header-container__settings-bar'>
				<HeaderNetworkSelector />
				<HeaderAccount />
			</div>
		</header>
	);
}

export default Header;
