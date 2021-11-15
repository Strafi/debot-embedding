import React from 'react';

export type TDebotParamsContext = {
	hideEnv?: boolean;
	hideRestart?: boolean;
	hideSave?: boolean;
	showControlsInHeader?: boolean;
	debotAddress?: string;
}

const DebotParamsContext = React.createContext<TDebotParamsContext | null>(null);

export default DebotParamsContext;
