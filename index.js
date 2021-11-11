import React from 'react';
import ReactDOM from 'react-dom';
import reactToWebComponent from 'react-to-webcomponent';

import StandaloneBrowser from '/src/StandaloneBrowser';
import StandaloneDebot from '/src/StandaloneDebot';

import './src/styles/index.scss';

const WebComponent = Component => reactToWebComponent(Component, React, ReactDOM);

window.customElements.define("standalone-browser", WebComponent(StandaloneBrowser));
window.customElements.define("standalone-debot", WebComponent(StandaloneDebot));

export { StandaloneBrowser, StandaloneDebot };
