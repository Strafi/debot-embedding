import React, { FC, useContext } from 'react';
import { DebotParamsContext } from '/src/contexts';
import { ControlWithPopup, AddDebot, Environment } from '/src/components';

const ListControls: FC = () => {
	const debotParams = useContext(DebotParamsContext);

	const isNoControlls = debotParams && debotParams.hideSave && debotParams.hideEnv;

	if (isNoControlls)
		return null;

	return (
		<div className='debots-list__controls'>
			{!debotParams?.hideSave
				&& <ControlWithPopup height={310} width={500} name='Add DeBot'>
					<AddDebot />
				</ControlWithPopup>
			}
			{!debotParams?.hideEnv
				&& <ControlWithPopup height={472} width={660} name='Show Environment'>
					<Environment />
				</ControlWithPopup>
			}
		</div>
	);
}

export default ListControls;
