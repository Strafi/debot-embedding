import React, { useContext, FC } from 'react';

import { DEngine } from '/src/debot';
import { useDispatch, useSelector } from '/src/store/hooks';
import { removeLocalDebot } from '/src/helpers';
import { setIsDebotError } from '/src/store/actions/debot';
import { ControlWithPopup, AddDebot, Environment } from '/src/components';
import { DebotParamsContext } from '/src/contexts';
import './index.scss';

type TProps = {
	debotAddress: string;
}

const DebotPageControls: FC<TProps> = ({ debotAddress }) => {
	const dispatch = useDispatch();
	const debotParams = useContext(DebotParamsContext);
	const isDebotSaved = useSelector(state => !!state.debot.localDebotsList.find(debot => debot.address === debotAddress));

	const isNoControlls = debotParams && debotParams.hideRestart && debotParams.hideSave && debotParams.hideEnv;

	if (isNoControlls)
		return null;

	const restartDebot = async (): Promise<void> => {
		try {
			await DEngine.reloadDebot(debotAddress);
		} catch (err) {
			dispatch(setIsDebotError(true));
			console.error('Error while running debot: ', err);
		}
	}

	const renderSaveButtons = () => {
		if (isDebotSaved)
			return (
				<div
					className='debot__controls-item'
					onClick={() => removeLocalDebot(debotAddress)}
				>
					Remove from Saved
				</div>
			)

		return (
			<ControlWithPopup height={310} width={500} name='Save DeBot'>
				<AddDebot prefilledAddress={debotAddress} />
			</ControlWithPopup>
		)
	}

	return (
		<div className='debot__controls'>
			{!debotParams?.hideRestart
				&& <div
					className='debot__controls-item'
					onClick={restartDebot}
				>
					Restart DeBot
				</div>
			}
			{!debotParams?.hideSave
				&& renderSaveButtons()
			}
			{!debotParams?.hideEnv
				&& <ControlWithPopup height={472} width={650} name='Show Environment'>
					<Environment />
				</ControlWithPopup>
			}
		</div>
	)
}

export default DebotPageControls;
