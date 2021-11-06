import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { DEngine } from '/src/debot';
import { useDebotAddress } from '/src/helpers';
import { clearStage, setIsDebotError } from '/src/store/actions/debot';
import { SigningBox, ApproveWindow } from '/src/components';
import Stage from './Stage';
import DebotControls from './Controls';
import './index.scss';

const DebotPage = () => {
	const dispatch = useDispatch();
	const debotAddress = useDebotAddress();
	const isSigningBoxVisible = useSelector(state => !!state.debot.signingBox);
	const isApproveWindowVisible = useSelector(state => !!state.debot.approveWindow);

	useEffect(() => {
		if (debotAddress) {
			DEngine.runDebot(debotAddress)
				.catch(err => {
					dispatch(setIsDebotError(true));
					console.error('Error while running debot: ', err);
				});
		}

		return () => {
			dispatch(clearStage());
		}
	}, [debotAddress, dispatch]);

	if (!debotAddress)
		return <Redirect to='/' />

	const isScrollDisabled = isSigningBoxVisible || isApproveWindowVisible;
	const pageClassName = `debot-page ${isScrollDisabled ? 'debot-page--scroll-disabled' : ''}`;

	return (
		<div className={pageClassName}>
			<DebotControls />
			<Stage />
			{isSigningBoxVisible && <SigningBox />}
			{isApproveWindowVisible && <ApproveWindow />}
		</div>
	)
}

export default DebotPage;
