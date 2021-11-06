import React, { useEffect } from 'react';
import { DEngine } from '/src/debot';
import './index.scss';

const Text = ({ params, debotAddress }) => {
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
