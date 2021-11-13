import React from 'react';

export type TControlWithPopupContext = {
	closePopup: Function;
}

const ControlWithPopupContext = React.createContext<TControlWithPopupContext | null>(null);

export default ControlWithPopupContext;
