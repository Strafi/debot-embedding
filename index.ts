import React from 'react';
import ReactDOM from 'react-dom';
import reactToWebComponent from 'react-to-webcomponent';

import StandaloneBrowser from '/src/StandaloneBrowser';
import StandaloneDebot from '/src/StandaloneDebot';

import './src/styles/index.scss';

window.customElements.define("standalone-browser", reactToWebComponent(StandaloneBrowser, React, ReactDOM) as any);
window.customElements.define("standalone-debot", reactToWebComponent(StandaloneDebot, React, ReactDOM) as any);

export { StandaloneBrowser, StandaloneDebot };
