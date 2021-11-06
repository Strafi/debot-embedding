import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import { BackIcon } from '/src/components/icons';
import './index.scss';

const HeaderBackButton = () => {
	const match = useRouteMatch('/debot');

	const backButtonClassName = `header-container__back-button ${!match ? 'header-container__back-button--disabled' : ''}`

	return (
		<Link to='/' className={backButtonClassName}>
			<BackIcon />
		</Link>
	);
}

export default HeaderBackButton;
