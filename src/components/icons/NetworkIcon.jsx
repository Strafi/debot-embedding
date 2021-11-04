import React from 'react';
import { MAIN_NETWORK, DEV_NETWORK, FLD_NETWORK } from '/src/constants';
import { DevNetIcon, MainNetIcon, FldNetIcon } from '.';

const NetworkIcon = ({ className, network }) => {
	if (network === DEV_NETWORK)
		return <DevNetIcon className={className} />

	if (network === FLD_NETWORK)
		return <FldNetIcon className={className} />

	if (network === MAIN_NETWORK)
		return <MainNetIcon className={className} />
	
	return <></>;
}

export default NetworkIcon;
