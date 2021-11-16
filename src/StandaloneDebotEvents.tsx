import React, { FC } from 'react';
import { Provider } from 'react-redux'
import PropTypes from 'prop-types';

import store from '/src/store';
import { App, Debot } from '/src/components';

interface IStandaloneDebotProps {
	debotaddress: string;
}

const StandaloneDebotEvents: FC<IStandaloneDebotProps> = props => {
	const { debotaddress } = props;

	return (
		<Provider store={store}>
			<App isEventsOnly={true}>
				<Debot address={debotaddress} isEventsOnly={true} />
			</App>
		</Provider>
	);
}

StandaloneDebotEvents.propTypes = {
	debotaddress: PropTypes.string.isRequired,
}

export default StandaloneDebotEvents;
