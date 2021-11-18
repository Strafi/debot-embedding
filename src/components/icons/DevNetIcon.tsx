import React, { FC } from 'react';

import devNetIconString from '/src/assets/dev-net-icon.png';

type TProps = {
	className?: string;
}

const DevNetIcon: FC<TProps> = ({ className }) => (
	<img
		src={devNetIconString}
		className={className ? `network-icon ${className}` : 'network-icon'}
		alt='network'
	/>
)

export default DevNetIcon;
