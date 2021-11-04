import React, { useEffect } from 'react';
import { useDebotAddress } from '/src/helpers';
import { MEDIA_STATUS } from '/src/constants';
import { DEngine } from '/src/debot';
import './index.scss';

const Media = ({ params }) => {
	const debotAddress = useDebotAddress();
	const { text, data, functionId, interfaceAddress } = params;

	useEffect(() => {
		const runDebotFunction = async () => {
			try {
				await DEngine.callDebotFunction(debotAddress, interfaceAddress, functionId, { result: MEDIA_STATUS.Success });
			} catch(err) {
				console.error(err);
			}
		};

		runDebotFunction();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className='stage-component__media'>
			<img src={data} alt='debot source' />
			<div className='stage-component__media-description'>
				{text}
			</div>
		</div>
	)
};

export default Media;
