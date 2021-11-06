import React, { useEffect } from 'react';
import { DEngine } from '/src/debot';

const Stdout = ({ params, debotAddress }) => {
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
