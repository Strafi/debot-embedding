import React, { FC } from 'react';
import { Provider } from 'react-redux'
import PropTypes from 'prop-types';

import store from '/src/store';
import { App, Debot } from '/src/components';
import HeaderParamsContext from '/src/contexts/HeaderParamsContext';
import DebotParamsContext from '/src/contexts/DebotParamsContext';

interface IStandaloneDebotProps {
	debotaddress: string;
	hideenv?: string;
	hiderestart?: string;
}

const StandaloneDebot: FC<IStandaloneDebotProps> = props => {
	const { hideenv, hiderestart, debotaddress } = props;
	const isHideEnv = hideenv === 'true';
	const isHideRestart = hiderestart === 'true';

	const headerParams = {
		hideBackButton: true,
		hideNetworkSelector: true,
		hideSearchBar: true,
	}

	const debotParams = {
		hideEnv: isHideEnv,
		hideRestart: isHideRestart,
		hideSave: true,
	}

	return (
		<Provider store={store}>
			<HeaderParamsContext.Provider value={headerParams}>
				<DebotParamsContext.Provider value={debotParams}>
					<App>
						<Debot address={debotaddress} />
					</App>
				</DebotParamsContext.Provider>
			</HeaderParamsContext.Provider>
		</Provider>
	);
}

StandaloneDebot.propTypes = {
	debotaddress: PropTypes.string.isRequired,
	hideenv: PropTypes.string,
	hiderestart: PropTypes.string,
}

export default StandaloneDebot;
