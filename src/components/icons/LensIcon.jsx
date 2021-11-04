import React from 'react';

const LensIcon = ({ onClick = () => false }) => (
	<svg
		className='lens-icon'
		width='22'
		height='22'
		viewBox='0 0 22 22'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		onClick={onClick}
	>
		<path
			d='M16.8881 8.72414C16.8881 13.2678 13.2179 16.9483 8.69405 16.9483C4.17023 16.9483 0.5 13.2678 0.5 8.72414C0.5 4.18044 4.17023 0.5 8.69405 0.5C13.2179 0.5 16.8881 4.18044 16.8881 8.72414Z'
			stroke='#6F6F6F'
		/>
		<line
			y1='-0.5'
			x2='9.63903'
			y2='-0.5'
			transform='matrix(0.705884 0.708327 -0.705884 0.708327 14.3643 15.1724)'
			stroke='#6F6F6F'
		/>
	</svg>
)

export default LensIcon;
