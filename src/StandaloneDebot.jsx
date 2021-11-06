import React, { Component } from 'react';
import { Provider } from 'react-redux'
import PropTypes from 'prop-types';

import store from '/src/store';
import { App, Debot } from '/src/components';

class StandaloneDebot extends Component {
	render() {
		console.log(this.props);

		const headerParams = {
			hideBackButton: true,
			hideNetworkSelector: true,
			hideSearchBar: true,
		}

		return (
			<Provider store={store}>
				<App headerParams={headerParams}>
					<Debot address={this.props.debotaddress} />
				</App>
			</Provider>
		);
	}
}

StandaloneDebot.propTypes = {
	debotaddress: PropTypes.string.isRequired,
}

export default StandaloneDebot;
