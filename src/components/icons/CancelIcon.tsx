import React, { FC, MouseEvent } from 'react';

type TProps = {
	onClick: (e: MouseEvent) => unknown;
}

const CancelIcon: FC<TProps> = ({ onClick = () => false }) => (
	<svg
		className='cancel-icon'
		onClick={onClick}
		width='12'
		height='12'
		viewBox='0 0 12 12'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path d='M9.99902 2L1.99989 9.99914' stroke='#BABABA' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'/>
		<path d='M2.00098 2L10.0001 9.99914' stroke='#BABABA' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'/>
	</svg>
)

export default CancelIcon;
