import React, { FC } from 'react';
import { DEngine } from '/src/debot';
import { TDebotStageItem } from '/src/types';
import './index.scss';

type TProps = {
	params?: TDebotStageItem;
	debotAddress?: string;
	approveCallback?: (value: boolean) => unknown;
}

const ConfirmInput: FC<TProps> = ({ params = {}, approveCallback, debotAddress }) => {
	const { functionId, interfaceAddress, text } = params;

	const handleConfirm = async (value: boolean): Promise<void | unknown> => {
		try {
			if (approveCallback)
				return approveCallback(value);

			if (debotAddress && interfaceAddress && functionId)
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
