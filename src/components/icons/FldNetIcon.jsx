import React from 'react';

const FldNetIcon = ({ className }) => (
	<img
		src='/fld-net-icon.png'
		width={22}
		height={24}
		className={className ? `network-icon fld-network-icon ${className}` : 'network-icon fld-network-icon '}
		alt='network'
	/>
)

export default FldNetIcon;
