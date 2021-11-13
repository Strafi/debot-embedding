import React, { FC } from 'react';
import { MAIN_NETWORK, DEV_NETWORK, FLD_NETWORK } from '/src/constants';
import { DevNetIcon, MainNetIcon, FldNetIcon } from '.';

type TProps = {
	className?: string;
	network: string;
}

const NetworkIcon: FC<TProps> = ({ className, network }) => {
	if (network === DEV_NETWORK)
		return <DevNetIcon className={className} />

	if (network === FLD_NETWORK)
		return <FldNetIcon className={className} />

	if (network === MAIN_NETWORK)
		return <MainNetIcon className={className} />
	
	return <></>;
}

export default NetworkIcon;
