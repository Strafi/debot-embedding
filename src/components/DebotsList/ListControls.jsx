import React from 'react';
import { ControlWithPopup, AddDebot, Environment } from '/src/components';

const ListControls = () => {
	return (
		<div className='debots-list__controls'>
			<ControlWithPopup height={310} width={500} name='Add DeBot'>
				<AddDebot />
			</ControlWithPopup>
			<ControlWithPopup height={472} width={660} name='Show Environment'>
				<Environment />
			</ControlWithPopup>
		</div>
	);
}

export default ListControls;
