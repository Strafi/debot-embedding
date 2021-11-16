import React, { FC } from 'react';
import { Provider } from 'react-redux'
import PropTypes from 'prop-types';

import store from '/src/store';
import { App, Debot } from '/src/components';
import { MAIN_NETWORK } from '/src/constants';
import { HeaderParamsContext, DebotParamsContext } from '/src/contexts';

interface IStandaloneDebotProps {
	debotaddress: string;
	hiderestart?: string;
	network?: string;
}

const StandaloneDebot: FC<IStandaloneDebotProps> = props => {
	const { hiderestart, debotaddress, network = MAIN_NETWORK } = props;
	const isHideRestart = hiderestart === 'true';

	const headerParams = {
		hideBackButton: true,
		hideNetworkSelector: true,
		hideSearchBar: true,
	}

	const debotParams = {
		hideEnv: true,
		hideRestart: isHideRestart,
		hideSave: true,
		showControlsInHeader: true,
		debotAddress: debotaddress,
	}

	return (
		<Provider store={store}>
			<HeaderParamsContext.Provider value={headerParams}>
				<DebotParamsContext.Provider value={debotParams}>
					<App initialNetwork={network}>
						<Debot address={debotaddress} />
					</App>
				</DebotParamsContext.Provider>
			</HeaderParamsContext.Provider>
		</Provider>
	);
}

StandaloneDebot.propTypes = {
	debotaddress: PropTypes.string.isRequired,
	hiderestart: PropTypes.string,
	network: PropTypes.string,
}

export default StandaloneDebot;
