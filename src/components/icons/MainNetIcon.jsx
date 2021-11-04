import React from 'react';

const MainNetIcon = ({ className }) => (
	<img
		src='/main-net-icon.png'
		className={className ? `network-icon ${className}` : 'network-icon'}
		alt='network'
	/>
)

export default MainNetIcon;
