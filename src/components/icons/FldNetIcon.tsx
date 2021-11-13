import React, { FC } from 'react';

type TProps = {
	className?: string;
}

const FldNetIcon: FC<TProps> = ({ className }) => (
	<img
		src='/fld-net-icon.png'
		width={22}
		height={24}
		className={className ? `network-icon fld-network-icon ${className}` : 'network-icon fld-network-icon '}
		alt='network'
	/>
)

export default FldNetIcon;
