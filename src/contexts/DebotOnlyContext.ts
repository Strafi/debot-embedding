import React from 'react';

export type TDebotOnlyContext = boolean;

const DebotOnlyContext = React.createContext<TDebotOnlyContext | null>(null);

export default DebotOnlyContext;
