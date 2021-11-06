import React from 'react';
import { DEngine } from '/src/debot';
import './index.scss';

const ConfirmInput = ({ params = {}, approveCallback, debotAddress }) => {
	const { functionId, interfaceAddress, text } = params;

	const handleConfirm = async value => {
		try {
			if (approveCallback)
				return approveCallback(value);

			await DEngine.callDebotFunction(debotAddress, interfaceAddress, functionId, { value });
		} catch(err) {
			console.error(err);
		}
	}

	return (
		<div className='stage-component__confirm-input-container'>
			{!!text && <div className='stage-component__confirm-input-label'>{text}</div>}
			<div
				onClick={() => handleConfirm(true)}
				className='stage-component__confirm-input-button'
			>
				Confirm
			</div>
			<div
				onClick={() => handleConfirm(false)}
				className='stage-component__confirm-input-button stage-component__confirm-input-button--decline'
			>
				Decline
			</div>
		</div>
	)
};

export default ConfirmInput;
