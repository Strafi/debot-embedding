import React from 'react';

const DevNetIcon = ({ className }) => (
	<img
		src='/dev-net-icon.png'
		className={className ? `network-icon ${className}` : 'network-icon'}
		alt='network'
	/>
)

export default DevNetIcon;
