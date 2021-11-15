import React, { RefObject } from 'react';

export type TAppComponentRefContext = RefObject<HTMLDivElement | null> | null

const AppComponentRefContext = React.createContext<TAppComponentRefContext>(null);

export default AppComponentRefContext;
