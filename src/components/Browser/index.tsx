import React, { useContext, FC } from 'react';
import { Switch, Route } from 'react-router-dom';

import { DebotOnlyContext } from '/src/contexts';
import { DebotsList, DebotPage } from '/src/components';

const Browser: FC = () => {
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
