import React, { useEffect, FC, useContext } from 'react';

import { DEngine } from '/src/debot';
import { useDispatch } from '/src/store/hooks';
import WalletService from '/src/WalletService';
import EventBus from '/src/EventBus';
import { EVENTS } from '/src/constants/events';
import { clearStage, setIsDebotError } from '/src/store/actions/debot';
import { DebotParamsContext } from '/src/contexts';
import Stage from './Stage';
import DebotControls from './Controls';

import './index.scss';

type TProps = {
	address: string;
	isEventsOnly?: boolean;
}

const Debot: FC<TProps> = ({ address, isEventsOnly }) => {
	const dispatch = useDispatch();
	const debotParams = useContext(DebotParamsContext);

	useEffect(() => {
		if (address) {
			WalletService.setRunningDebotAddress(address);

			DEngine.runDebot(address)
				.catch(err => {
					dispatch(setIsDebotError(true));

					console.error('Error while running debot: ', err);

					EventBus.dispatch(EVENTS.DEBOT.RUN_FAILED, {
						data: err,
					});
				});
		}

		return () => {
			dispatch(clearStage());

			WalletService.setRunningDebotAddress(undefined);
		}
	}, [address, dispatch]);

	if (isEventsOnly)
		return null;

	return (
		<div className='debot'>
			{debotParams && !debotParams.showControlsInHeader && <DebotControls debotAddress={address} />}
			<Stage debotAddress={address} />
		</div>
	)
}

export default Debot;
