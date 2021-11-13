import React, { FC } from 'react';

type TProps = {
	className?: string;
}

const MainNetIcon: FC<TProps> = ({ className }) => (
	<img
		src='/main-net-icon.png'
		className={className ? `network-icon ${className}` : 'network-icon'}
		alt='network'
	/>
)

export default MainNetIcon;
