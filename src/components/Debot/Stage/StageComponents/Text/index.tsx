import React, { useEffect, FC } from 'react';
import { DEngine } from '/src/debot';
import { TDebotStageItem } from '/src/types';
import './index.scss';

type TProps = {
	params: TDebotStageItem;
	debotAddress: string;
}

const Text: FC<TProps> = ({ params, debotAddress }) => {
	const { text, functionId, interfaceAddress, isError } = params;

	useEffect(() => {
		const runDebotFunction = async () => {
			try {
				await DEngine.callDebotFunction(debotAddress, interfaceAddress, functionId);
			} catch(err) {
				console.error(err);
			}
		};

		runDebotFunction();
	}, []);

	const textClassName = `stage-component__text ${isError ? 'stage-component__text--error' : ''}`;

	return (
		<div className={textClassName}>
			{text}
		</div>
	)
};

export default Text;
