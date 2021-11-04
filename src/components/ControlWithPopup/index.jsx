import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ControlWithPopupContext } from '/src/contexts';
import './index.scss';

const DEFAULT_WIDTH = 460;
const DEFAULT_HEIGHT = 252;

const ControlWithPopup = ({ children, name, height = DEFAULT_HEIGHT, width = DEFAULT_WIDTH }) => {
	const containerRef = useRef(null);
	const [isControlOpen, setIsControlOpen] = useState(false);

	const closePopup = () => setIsControlOpen(false);

	const handleClickOutside = useCallback(event => {
		const shouldHandleClick = isControlOpen
			&& containerRef?.current
			&& !containerRef.current.contains(event.target);

		if (shouldHandleClick)
			closePopup();
	}, [isControlOpen]);

	useEffect(() => {
		document.addEventListener('click', handleClickOutside);

		return () => {
			document.removeEventListener('click', handleClickOutside);
		}
	}, [handleClickOutside]);

	const containerClassName = `control-with-popup__container ${isControlOpen
		? 'control-with-popup__container--visible' : ''
	}`;

	const switcherBlockClassName = `control-with-popup ${isControlOpen
		? 'control-with-popup--active' : ''
	}`;

	const containerStyles = {
		'--height': `${height}px`,
		'--width': `${width}px`,
	};

	return (
		<div
			ref={containerRef}
			className={switcherBlockClassName}
		>
			<div
				onClick={() => setIsControlOpen(!isControlOpen)}
				className='control-with-popup__label'
			>
				{name}
			</div>
			<div
				className={containerClassName}
				style={containerStyles}
			>
				<ControlWithPopupContext.Provider value={{ closePopup }}>
					{isControlOpen && children}
				</ControlWithPopupContext.Provider>
			</div>
		</div>
	);
}

export default ControlWithPopup;
