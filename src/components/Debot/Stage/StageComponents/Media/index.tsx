import React, { useEffect, FC } from 'react';
import { MEDIA_STATUS } from '/src/constants';
import { DEngine } from '/src/debot';
import { TDebotStageItem } from '/src/types';
import './index.scss';

type TProps = {
	params: TDebotStageItem;
	debotAddress: string;
}

const Media: FC<TProps> = ({ params, debotAddress }) => {
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
