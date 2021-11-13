import React, { useEffect, FC } from 'react';
import { DEngine } from '/src/debot';
import { TDebotStageItem } from '/src/types';

type TProps = {
	params: TDebotStageItem;
	debotAddress: string;
}

const Stdout: FC<TProps> = ({ params, debotAddress }) => {
	const { text, interfaceAddress } = params;

	useEffect(() => {
		const runDebotFunction = async () => {
			try {
				await DEngine.callDebotFunction(debotAddress, interfaceAddress);
			} catch(err) {
				console.error(err);
			}
		};

		runDebotFunction();
	}, []);

	return (
		<div className='stage-component__text'>
			{text}
		</div>
	)
};

export default Stdout;
