import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';

import DebotOnlyContext from '/src/contexts/DebotOnlyContext';
import { DebotsList, DebotPage } from '/src/components';

const Browser = () => {
	const isDebotOnly = useContext(DebotOnlyContext);

	return (
		<Switch>
			{isDebotOnly
				? <Route exact path='/' component={DebotPage} />
				: <>
					<Route exact path='/' component={DebotsList} />
					<Route path='/debot' component={DebotPage} />
				</>
			}
		</Switch>
	);
}

export default Browser;
