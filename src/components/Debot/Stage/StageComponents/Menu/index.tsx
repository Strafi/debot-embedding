import React, { useState, useLayoutEffect, useCallback, FC, ReactElement } from 'react';
import { DEngine } from '/src/debot';
import { TDebotStageItem } from '/src/types';
import './index.scss';

const MAX_ITEMS = 8;

type TProps = {
	params: TDebotStageItem;
	debotAddress: string;
}

const Menu: FC<TProps> = ({ params, debotAddress }) => {
	const [errorText, setErrorText] = useState('');
	const [menuItemsToRender, setMenuItemsToRender] = useState<ReactElement[]>();
	const [isShowAllMenuItems, setIsShowAllMenuItems] = useState(false);
	const { text, title, interfaceAddress, menuItems } = params;

	const handleSelectItem = useCallback(async (selectedItem, index) => {
		try {
			await DEngine.callDebotFunction(debotAddress, interfaceAddress, selectedItem.functionId, { index });
		} catch(err) {
			setErrorText((err as Error).message);
		}
	}, [debotAddress, interfaceAddress]);

	useLayoutEffect(() => {
		let itemsToRender = menuItems!.map((item, index) => {
			let menuName = item.title;
	
			if (item.description)
				menuName += ` (${item.description})`;
	
			return (
				<div
					onClick={() => handleSelectItem(item, index)}
					key={`${item.functionId}-${index}`}
					className='stage-component__menu-item'
				>
					{menuName}
				</div>
			);
		});

		if (itemsToRender.length > MAX_ITEMS) {
			if (isShowAllMenuItems) {
				itemsToRender.push(
					<div
						onClick={() => setIsShowAllMenuItems(false)}
						key='hide-btn'
						className='stage-component__menu-item'
					>
						{'Hide'}
					</div>
				)
			} else {
				itemsToRender = itemsToRender.slice(0, MAX_ITEMS);

				itemsToRender.push(
					<div
						onClick={() => setIsShowAllMenuItems(true)}
						key='show-more-btn'
						className='stage-component__menu-item'
					>
						{'Show more'}
					</div>
				)
			}
		}

		setMenuItemsToRender(itemsToRender);
	}, [menuItems, handleSelectItem, isShowAllMenuItems]);

	return (
		<div className='stage-component__menu-container'>
			<div className='stage-component__menu-title'>{title}</div>
			<div className='stage-component__menu-description'>{text}</div>
			<div className='stage-component__menu-list'>
				{menuItemsToRender}
			</div>
			{errorText && <span className='stage-component__menu-error'>{errorText}</span>}
		</div>
	)
};

export default Menu;
