import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ArrowIcon } from '/src/components/icons';
import './index.scss';

const DEFAULT_HEIGHT = 252;
const DEFAULT_WIDTH = 245;

const OptionsList = ({ children, selectedItem, height = DEFAULT_HEIGHT, width = DEFAULT_WIDTH, isDisabled }) => {
	const switcherBlockRef = useRef(null);
	const [isListOpen, setIsListOpen] = useState(false);

	const handleClickOutside = useCallback(event => {
		if (!switcherBlockRef?.current?.contains(event.target) && isListOpen)
			setIsListOpen(false);
	}, [isListOpen]);

	useEffect(() => {
		document.addEventListener('click', handleClickOutside);

		return () => {
			document.removeEventListener('click', handleClickOutside);
		}
	}, [handleClickOutside]);

	const listClassName = `options-list__list ${isListOpen
		? 'options-list__list--visible' : ''
	}`;

	const switcherBlockClassName = `options-list ${isListOpen
		? 'options-list--active' : ''
	} ${isDisabled ? 'options-list--disabled' : ''}`;

	return (
		<div
			ref={switcherBlockRef}
			onClick={() => !isDisabled && setIsListOpen(!isListOpen)}
			className={switcherBlockClassName}
			style={{ '--width': `${width}px` }}
		>
			{selectedItem}
			<ArrowIcon />
			<div
				className={listClassName}
				style={{ '--height': `${height}px` }}
			>
				{children}
			</div>
		</div>
	);
}

export default OptionsList;
