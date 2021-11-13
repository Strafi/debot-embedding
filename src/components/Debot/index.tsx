import React, { useEffect, FC } from 'react';

import { DEngine } from '/src/debot';
import { useDispatch, useSelector } from '/src/store/hooks';
import { clearStage, setIsDebotError } from '/src/store/actions/debot';
import { SigningBox, ApproveWindow } from '/src/components';
import Stage from './Stage';
import DebotControls from './Controls';

import './index.scss';

type TProps = {
	address: string;
}

const Debot: FC<TProps> = ({ address }) => {
	const dispatch = useDispatch();
	const isSigningBoxVisible = useSelector(state => !!state.debot.signingBox);
	const isApproveWindowVisible = useSelector(state => !!state.debot.approveWindow);

	useEffect(() => {
		if (address) {
			DEngine.runDebot(address)
				.catch(err => {
					dispatch(setIsDebotError(true));
					console.error('Error while running debot: ', err);
				});
		}

		return () => {
			dispatch(clearStage());
		}
	}, [address, dispatch]);

	const isScrollDisabled = isSigningBoxVisible || isApproveWindowVisible;
	const pageClassName = `debot ${isScrollDisabled ? 'debot--scroll-disabled' : ''}`;

	return (
		<div className={pageClassName}>
			<DebotControls debotAddress={address} />
			<Stage debotAddress={address} />
			{isSigningBoxVisible && <SigningBox />}
			{isApproveWindowVisible && <ApproveWindow />}
		</div>
	)
}

export default Debot;
