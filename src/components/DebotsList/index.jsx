import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Loader, ControlWithPopup, AddDebot, Environment } from '/src/components';
import { isCustomScrollBar } from '/src/helpers';
import DebotListItem from './ListItem';
import './index.scss';

const DebotsList = () => {
	const debotsList = useSelector(state => state.debot.debotsList);
	const localDebotsList = useSelector(state => state.debot.localDebotsList);
	const filterKey = useSelector(state => state.debot.filterKey);
	const filteredDebots = debotsList.filter(debot => debot.title.toLowerCase().startsWith(filterKey) || debot.address.startsWith(filterKey));
	const filteredLocalDebots = localDebotsList.filter(debot => debot.title.toLowerCase().startsWith(filterKey) || debot.address.startsWith(filterKey));

	const renderDebotListItems = () => filteredDebots.map((debot, index) => (
		<DebotListItem
			isGrey={index % 2 === 0 || index === 0}
			debot={debot}
			key={`${debot.address}-${index}`}
		/>
	));

	const renderLocalDebotListItems = () => filteredLocalDebots.map((debot, index) => (
		<DebotListItem
			isGrey={index % 2 === 0 || index === 0}
			debot={debot}
			key={`${debot.address}-${index}`}
		/>
	));
	const debotsListClassName = `debots-list__list ${isCustomScrollBar() ? 'with-custom-scrollbar' : ''}`;

	return (
		<div className='debots-list'>
			<div className='debots-list__controls'>
				<ControlWithPopup height={310} width={500} name='Add DeBot'>
					<AddDebot />
				</ControlWithPopup>
				<ControlWithPopup height={472} width={660} name='Show Environment'>
					<Environment />
				</ControlWithPopup>
			</div>
			<div className={debotsListClassName}>
				{!!filteredLocalDebots.length
					&& <Fragment>
						<div className='debots-list__section-title'>Your saved DeBots</div>
						{renderLocalDebotListItems()}
					</Fragment>
				}
				{!!filteredDebots.length
					&& <Fragment>
						<div className='debots-list__section-title'>Suggested DeBots</div>
						{renderDebotListItems()}
					</Fragment>
				}
				{(!filteredDebots.length && !filteredLocalDebots.length) && <Loader isFailed />}
			</div>
		</div>
	);
}

export default DebotsList;
