import React, { FC } from 'react';

import mainNetIconString from '/src/assets/main-net-icon.png';

type TProps = {
	className?: string;
}

const MainNetIcon: FC<TProps> = ({ className }) => (
	<img
		src={mainNetIconString}
		className={className ? `network-icon ${className}` : 'network-icon'}
		alt='network'
	/>
)

export default MainNetIcon;
