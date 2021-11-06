import React from 'react';
import ReactDOM from 'react-dom';
import reactToWebComponent from 'react-to-webcomponent';

import StandaloneBrowser from '/src/StandaloneBrowser';
import StandaloneDebot from '/src/StandaloneDebot';

import '/src/styles/index.scss';

const WebComponent = Component => reactToWebComponent(Component, React, ReactDOM);

const headInjection = () => {
	const head = document.getElementsByTagName('head')[0];

	if (!head)
		return;

	const gstaticLink = document.createElement('link');
	gstaticLink.rel = 'preconnect';
	gstaticLink.href = 'https://fonts.gstatic.com';

	const fontLink = document.createElement('link');
	fontLink.rel = 'stylesheet';
	fontLink.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap';

	head.appendChild(gstaticLink);
	head.appendChild(fontLink);
}

headInjection();

window.customElements.define("standalone-browser", WebComponent(StandaloneBrowser));
window.customElements.define("standalone-debot", WebComponent(StandaloneDebot));

export { StandaloneBrowser, StandaloneDebot };
