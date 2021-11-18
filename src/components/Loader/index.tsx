import React, { FC } from 'react';

import loaderGif from '/src/assets/loader.gif';
import loadFailedImage from '/src/assets/load-failed.png';

import './index.scss';

type TProps = {
	isFailed?: boolean;
}

const Loader: FC<TProps> = ({ isFailed }) => {
	const imgSrc = isFailed ? loadFailedImage : loaderGif;
	const imgAlt = isFailed ? 'Nothing here :(' : 'Loading...';

	return (
		<div className='loader'>
			<img className='loader__content' src={imgSrc} alt={imgAlt} />
		</div>
	);
}

export default Loader;
