import React, { FC } from 'react';
import { Redirect } from 'react-router-dom';

import { useDebotAddress } from '/src/helpers';
import { Debot } from '/src/components';

const DebotPage: FC = () => {
	const debotAddress = useDebotAddress();

	if (!debotAddress)
		return <Redirect to='/' />

	return <Debot address={debotAddress} />
}

export default DebotPage;
