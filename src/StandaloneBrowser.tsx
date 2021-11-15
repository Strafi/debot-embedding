import React, { FC } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import store from '/src/store';
import { App, Browser } from '/src/components';
import { HeaderParamsContext, DebotOnlyContext, DebotParamsContext } from '/src/contexts';

interface IStandaloneBrowserProps {
	debotaddress?: string;
	debotonly?: string;
	hideenv?: string;
	hiderestart?: string;
	hidesave?: string;
}

const StandaloneBrowser: FC<IStandaloneBrowserProps> = props => {
	const { hideenv, hiderestart, hidesave, debotonly, debotaddress } = props;
	const isDebotOnly = debotonly === 'true' && !!debotaddress;
	const isHideEnv = hideenv === 'true';
	const isHideRestart = hiderestart === 'true';
	const isHideSave = hidesave === 'true';

	const headerParams = {
		hideBackButton: !!debotonly,
	}
	
	const debotParams = {
		hideEnv: isHideEnv,
		hideRestart: isHideRestart,
		hideSave: isHideSave,
	}

	return (
		<Provider store={store}>
			<BrowserRouter>
				<HeaderParamsContext.Provider value={headerParams}>
					<DebotOnlyContext.Provider value={isDebotOnly}>
						<DebotParamsContext.Provider value={debotParams}>
							<App initialDebotAddress={debotaddress}>
								<Browser />
							</App>
						</DebotParamsContext.Provider>
					</DebotOnlyContext.Provider>
				</HeaderParamsContext.Provider>
			</BrowserRouter>
		</Provider>
	);
}

StandaloneBrowser.propTypes = {
	debotaddress: PropTypes.string,
	debotonly: PropTypes.string,
	hideenv: PropTypes.string,
	hiderestart: PropTypes.string,
	hidesave: PropTypes.string,
}

export default StandaloneBrowser;
