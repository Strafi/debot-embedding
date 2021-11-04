import React from 'react';
import './index.scss';

const Loader = ({ isFailed }) => {
	const imgSrc = isFailed ? '/load-failed.png' : '/loader.gif';
	const imgAlt = isFailed ? 'Nothing here :(' : 'Loading...';

	return (
		<div className='loader'>
			<img className='loader__cat' src={imgSrc} alt={imgAlt} />
		</div>
	);
}

export default Loader;
