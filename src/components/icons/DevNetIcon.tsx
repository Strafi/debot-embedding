import React, { FC } from 'react';

type TProps = {
	className?: string;
}

const DevNetIcon: FC<TProps> = ({ className }) => (
	<img
		src='/dev-net-icon.png'
		className={className ? `network-icon ${className}` : 'network-icon'}
		alt='network'
	/>
)

export default DevNetIcon;
