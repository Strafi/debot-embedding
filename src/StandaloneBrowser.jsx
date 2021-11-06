import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import store from '/src/store';
import { App, Browser } from '/src/components';

class StandaloneBrowser extends Component {
	render() {
		console.log(this.props);

		return (
			<Provider store={store}>
				<BrowserRouter>
					<App>
						<Browser />
					</App>
				</BrowserRouter>
			</Provider>
		);
	}
}

StandaloneBrowser.propTypes = {
	name: PropTypes.string.isRequired,
}

export default StandaloneBrowser;
