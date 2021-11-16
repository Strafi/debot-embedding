import React, { FC } from 'react';
import { Provider } from 'react-redux'
import PropTypes from 'prop-types';

import store from '/src/store';
import { App, Debot } from '/src/components';
import { MAIN_NETWORK } from '/src/constants';

interface IStandaloneDebotProps {
	debotaddress: string;
	network?: string;
}

const StandaloneDebotEvents: FC<IStandaloneDebotProps> = props => {
	const { debotaddress, network = MAIN_NETWORK } = props;

	return (
		<Provider store={store}>
			<App initialNetwork={network} isEventsOnly={true}>
				<Debot address={debotaddress} isEventsOnly={true} />
			</App>
		</Provider>
	);
}

StandaloneDebotEvents.propTypes = {
	debotaddress: PropTypes.string.isRequired,
	network: PropTypes.string,
}

export default StandaloneDebotEvents;
