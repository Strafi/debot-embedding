import React, { FC } from 'react';
import TonClient from '/src/TonClient';
import { Link } from 'react-router-dom';
import { createDebotUrl } from '/src/helpers';
import { NetworkIcon } from '/src/components/icons';
import { TDebotsListItem } from '/src/types';

type TProps = {
	isGrey?: boolean;
	debot: TDebotsListItem;
}

const ListItem: FC<TProps> = ({ debot, isGrey }) => {
	const linkAddress = createDebotUrl(debot.address);
	const listItemClassName = `debots-list__item ${isGrey ? 'debots-list__item--grey' : ''}`;

	const handleNetworkSwitch = () => {
		if (debot.network)
			TonClient.setSelectedNetwork(debot.network);
	}

	return (
		<Link to={linkAddress} className={listItemClassName} onClick={handleNetworkSwitch}>
			<div className='debots-list__item-title'>
				{debot.title}
				{debot.network && <NetworkIcon network={debot.network} />}
			</div>
			<div className='debots-list__item-address'>
				{debot.address}
			</div>
		</Link>
	);
}

export default ListItem;
