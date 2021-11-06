import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { DebotsList, DebotPage } from '/src/components';

const Browser = () => {
	return (
		<Switch>
			<Route exact path='/' component={DebotsList} />
			<Route path='/debot' component={DebotPage} />
		</Switch>
	);
}

export default Browser;
