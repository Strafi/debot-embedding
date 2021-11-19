import React, { FC, useState } from 'react';
import QrReader from 'react-qr-reader'
import { encodeString } from '/src/helpers';
import { DEngine } from '/src/debot';
import { TDebotStageItem } from '/src/types';
import './index.scss';

type TProps = {
	params: TDebotStageItem;
	debotAddress: string;
}

const QrCodeScan: FC<TProps> = ({ params, debotAddress }) => {
	const [isPermissionGranted, setIsPermissionGranted] = useState(true);
	const { functionId, interfaceAddress } = params;

	const sendQrContent = async (content: string) => {
		if (content) {
			try {
				await DEngine.callDebotFunction(debotAddress, interfaceAddress, functionId, { value: encodeString(content) });
			} catch(err) {
				console.error(err);
			}
		}
	}

	const handleScan = (content: string | null) => {
		if (content) {
			sendQrContent(content);
		}
	}

	const handleScanError = (err: Error) => {
		if (err.message === 'Permission denied') {
			setIsPermissionGranted(false);
		} else {
			console.error(err);
		}
	}

	const handleOnLoad = () => setIsPermissionGranted(true);

	return (
		<div className='stage-component__qr-code-send'>
			<QrReader
				delay={300}
				onError={handleScanError}
				onScan={handleScan}
				onLoad={handleOnLoad}
				className="scanner"
			/>
			{!isPermissionGranted
				&& <div className='stage-component__qr-code-send-banner'>
					Please allow the DeBot to access the camera
				</div>
			}
		</div>
	)
};

export default QrCodeScan;
