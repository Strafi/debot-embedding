import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { DEngine } from '/src/debot';
import { useDebotAddress, removeLocalDebot } from '/src/helpers';
import { clearStage } from '/src/store/actions/debot';
import { SigningBox, ApproveWindow, ControlWithPopup, AddDebot, Environment } from '/src/components';
import Stage from './Stage';
import './index.scss';

const DebotPage = () => {
	const dispatch = useDispatch();
	const debotAddress = useDebotAddress();
	const [isDebotError, setIsDebotError] = useState(false);
	const isSigningBoxVisible = useSelector(state => !!state.debot.signingBox);
	const isApproveWindowVisible = useSelector(state => !!state.debot.approveWindow);
	const isDebotSaved = useSelector(state => !!state.debot.localDebotsList.find(debot => debot.address === debotAddress));

	useEffect(() => {
		const asyncEffect = async () => {
			if (debotAddress) {
				try {
					await DEngine.runDebot(debotAddress);
				} catch (err) {
					setIsDebotError(true);
					console.error('Error while running debot: ', err);
				}
			}
		}
		
		asyncEffect();

		return () => {
			dispatch(clearStage());
		}
	}, [debotAddress, dispatch]);

	if (!debotAddress)
		return <Redirect to='/' />

	const restartDebot = async () => {
		try {
			await DEngine.reloadDebot(debotAddress);
		} catch (err) {
			setIsDebotError(true);
			console.error('Error while running debot: ', err);
		}
	}

	const isScrollDisabled = isSigningBoxVisible || isApproveWindowVisible;
	const pageClassName = `debot-page ${isScrollDisabled ? 'debot-page--scroll-disabled' : ''}`;

	return (
		<div className={pageClassName}>
			<div className='debot-page__controls'>
				<div
					className='debot-page__controls-item'
					onClick={restartDebot}
				>
					Restart DeBot
				</div>
				{isDebotSaved
					? <div
						className='debot-page__controls-item'
						onClick={() => removeLocalDebot(debotAddress)}
					>
						Remove from Saved
					</div>
					: <ControlWithPopup height={310} width={500} name='Save DeBot'>
						<AddDebot prefilledAddress={debotAddress} />
					</ControlWithPopup>
				}
				<ControlWithPopup height={472} width={650} name='Show Environment'>
					<Environment />
				</ControlWithPopup>
			</div>
			<Stage isDebotError={isDebotError} />
			{isSigningBoxVisible && <SigningBox />}
			{isApproveWindowVisible && <ApproveWindow />}
		</div>
	)
}

export default DebotPage;
