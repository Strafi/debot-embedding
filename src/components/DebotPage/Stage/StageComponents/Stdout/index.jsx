import React, { useEffect } from 'react';
import { useDebotAddress } from '/src/helpers';
import { DEngine } from '/src/debot';

const Stdout = ({ params }) => {
	const debotAddress = useDebotAddress();
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
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className='stage-component__text'>
			{text}
		</div>
	)
};

export default Stdout;
