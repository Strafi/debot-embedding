import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DEngine } from '/src/debot';
import { removeLocalDebot } from '/src/helpers';
import { setIsDebotError } from '/src/store/actions/debot';
import { ControlWithPopup, AddDebot, Environment } from '/src/components';
import './index.scss';

const DebotPageControls = ({ debotAddress }) => {
	const dispatch = useDispatch();
	const isDebotSaved = useSelector(state => !!state.debot.localDebotsList.find(debot => debot.address === debotAddress));

	const restartDebot = async () => {
		try {
			await DEngine.reloadDebot(debotAddress);
		} catch (err) {
			dispatch(setIsDebotError(true));
			console.error('Error while running debot: ', err);
		}
	}

	return (
		<div className='debot__controls'>
			<div
				className='debot__controls-item'
				onClick={restartDebot}
			>
				Restart DeBot
			</div>
			{isDebotSaved
				? <div
					className='debot__controls-item'
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
	)
}

export default DebotPageControls;
