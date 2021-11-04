import React, { useEffect } from 'react';
import { useDebotAddress } from '/src/helpers';
import { DEngine } from '/src/debot';
import './index.scss';

const Text = ({ params }) => {
	const debotAddress = useDebotAddress();
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
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const textClassName = `stage-component__text ${isError ? 'stage-component__text--error' : ''}`;

	return (
		<div className={textClassName}>
			{text}
		</div>
	)
};

export default Text;
