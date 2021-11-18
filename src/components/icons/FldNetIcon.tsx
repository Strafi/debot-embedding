import React, { FC } from 'react';

import fldNetIconString from '/src/assets/fld-net-icon.png';

type TProps = {
	className?: string;
}

const FldNetIcon: FC<TProps> = ({ className }) => (
	<img
		src={fldNetIconString}
		width={22}
		height={24}
		className={className ? `network-icon fld-network-icon ${className}` : 'network-icon fld-network-icon '}
		alt='network'
	/>
)

export default FldNetIcon;
