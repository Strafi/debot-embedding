import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DEngine } from '/src/debot';
import { clearStage, setIsDebotError } from '/src/store/actions/debot';
import { SigningBox, ApproveWindow } from '/src/components';
import Stage from './Stage';
import DebotControls from './Controls';

import './index.scss';

const Debot = ({ address }) => {
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
