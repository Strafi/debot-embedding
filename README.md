# Everscale (ex. Free TON) DeBot Web Embedding
## Motivation
The usage of traditional web is still massive and we can only dream of the Web Free
concept becoming reality. We already have DeBots which provide users direct
connection with blockchain. Though, user experience is still pretty limited - both by
functionality and visualization. What if we combine the traditional web navigation with
built-in features of DeBots by injecting DeBot into web-pages. The interaction with
them can be organized through browser extensions or wallets that support the
technology.  
## The goal
This library provides the developers with an easy-to-use solution of injecting DeBots into traditional
web-sites.
## How To Install
### Using CDN
Append the following line in your index.html, better in the `<head>` tag
```
<script src="https://unpkg.com/debot-web-embedding"></script>

-------------------------- or as a module ----------------------------

<script type="module">
	import "https://unpkg.com/debot-web-embedding/lib/debot-web-embedding.es.js";

	// or with imports

 	import * as DebotWebEmbeddingExports from "https://unpkg.com/debot-web-embedding/lib/debot-web-embedding.es.js";
</script>
```
Append the following line in your `<head>` tag to include library styles  
```
<link rel="stylesheet" href="https://unpkg.com/debot-web-embedding/lib/style.css" />
```
This library uses Montserrat font by default. It is not mandatory, but you also can append these two lines to include original font.  
```
<link rel="preconnect" href="https://fonts.gstatic.com" />  
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap" />
```
### Using NPM
Soon.  
## Features
1. `<standalone-debot></standalone-debot>` web-component that provides single debot to use
2. `<standalone-browser></standalone-browser>` web-component that provides browser application to your web page (ref: https://browser.freeton-stats.org/)
3. `<standalone-debot-events></standalone-debot-events>` web-component that provides NO-UI single debot to use (you can build your own UI and show it depending on this component sent events)
4. `EventBus` to provide interaction between DeBot and web-site
5. Crystal Wallet integration to sign transactions
6. Customization: 
   * Edit color pallete via CSS Variables
   * On/Off switching of particular control elements
   * DeBot address binding
   * Custom fields and controls/buttons (you can bind your own controls using StandaloneDebotEvents NO-UI component)
7. TypeScript
## StandaloneDebot
Provides single debot to use
### Properties
* `debotaddress` (Required) - debot address to run.
* `hiderestart` (Optional) - if passed, will hide "Restart DeBot" button.
* `network` (Optional, default: main.ton.dev) - debot network.

Note: Environment and Save DeBot buttons are disabled for this component.  
Note 2: Search Bar is disabled for this component. If you need it, you should better use StandaloneBrowser with `debotonly` property.
## StandaloneBrowser
Provides complete browser application to your web page
### Properties
* `debotaddress` (Optional) - if passed, component will try to load DeBot with this address on mount.
* `debotonly` (Optional) - if passed, will behave similar to StandaloneDebot, but with a search bar and the ability for a user to enter another DeBot address.
* `hideenv` (Optional) - if passed, will hide "Environment" button.
* `hiderestart` (Optional) - if passed, will hide the "Restart DeBot" button.
* `hidesave` (Optional) - if passed, will hide the "Save DeBot" button.
* `network` (Optional, default: main.ton.dev) - DeBot network.

Note: see https://browser.freeton-stats.org/ for reference (the whole website is this single component)
## StandaloneDebotEvents
Provides NO-UI single DeBot to use (you can build your own UI and show it depending on this component sent events)
### Properties
* `debotaddress` (Required) - DeBot address to run.
* `network` (Optional, default: main.ton.dev) - DeBot network.

Note: This is a NO-UI component, which means that it will not render anything. The only way to communicate with it is EventBus events. See below.
## EventBus
Provides interaction between DeBot and a web-site  
### Example
```
<script>
	const { DEBOT, CLIENT } = window.DEBOT_EMBEDDING.EVENTS;

	const registry = window.DEBOT_EMBEDDING.EventBus.register(DEBOT.APPROVE_CALLED, () => {
		const isApproved = // any logic to handle approve transaction process

		window.DEBOT_EMBEDDING.EventBus.dispatch(CLIENT.EXECUTE_APPROVE, { data: { approved: isApproved } });

		registry.unregister(); // optional - unregister handle when finished
	});

	// will log every debot function call and its arguments
	window.DEBOT_EMBEDDING.EventBus.register(DEBOT.FUNCTION_CALLED, (args) => { console.log(args) });
</script>
```  
### Events
List of Events you can register for:  
* DeBot Module:  
  * EVENTS.DEBOT.RUN_FAILED - triggered when DeBot run failed.
  * EVENTS.DEBOT.FUNCTION_CALLED - triggered when DeBot function was called (subscribe to this event to show your custom UI in StandaloneDebotEvents).
  * EVENTS.DEBOT.FUNCTION_EXECUTED - triggered when DeBot function was executed successfully
  * EVENTS.DEBOT.FUNCTION_EXECUTION_FAILED - triggered when DeBot function was executed with error
  * EVENTS.DEBOT.SIGNING_BOX_REGISTRATION_CALLED - triggered when DeBot calls signing box registration. (subscribe to this event to show your custom UI in StandaloneDebotEvents) (Note: triggered only when the use of Crystal Wallet is impossible)
  * EVENTS.DEBOT.SIGNING_BOX_REGISTERED - triggered when DeBot signing box was registered with success (Note: triggered only when the use of Crystal Wallet is impossible)
  * EVENTS.DEBOT.SIGNING_BOX_REGISTRATION_FAILED - triggered when DeBot signing box registration failed (Note: triggered only when the use of Crystal Wallet is impossible)
  * EVENTS.DEBOT.SIGNING_BOX_CALLED - triggered when DeBot signing box called
  * EVENTS.DEBOT.APPROVE_CALLED - triggered when DeBot approve function called (subscribe to this event to show your custom UI in StandaloneDebotEvents)
* Wallet Module:
  * EVENTS.WALLET.CONNECTED - triggered when the wallet was connected with success
  * EVENTS.WALLET.CONNECTION_ERROR - triggered when the wallet connection failed
  * EVENTS.WALLET.PERMISSIONS_CHANGED - triggered when the wallet permissions were changed
  * EVENTS.WALLET.DISCONNECTED - triggered when the wallet was disconnected 

List of events you can dispatch from the client (Client Module):  
* EVENTS.CLIENT.EXECUTE_FUNCTION - dispatch this event to send a payload for the DeBot function execution.
* EVENTS.CLIENT.EXECUTE_APPROVE - dispatch this event to send a payload for the DeBot approve function execution.
* EVENTS.CLIENT.REGISTER_SIGNING_BOX - dispatch this event to send a payload for the signing box registration.  
## Crystal Wallet integration
To reach the needed security level when creating and signing the transactions, Crystal Wallet web-extension and mobile app were integrated.
- Web extension: the keys should be stored in the extension and not
transmitted to the browser. The extension is used for the UserInfo and SigningBoxInput interfaces, as well as for the creation of a signing box.
- Mobile: wallet integration works via TON Crystal Wallet mobile app built-in browser. As for other browsers - well, for now, the only way is to pass keys directly to the browser. But anyway, the DeBot browser enginge will not store anything.  
## Customization
### Edit color pallete via CSS Variables  
The color palette  looks this way:  
* --header-text-color: #000000;
* --text-color: #303030;
* --secondary-text-color: #6F6F6F;
* --background-color: #FFFFFF;
* --secondary-background-color: #F3F3F3;
* --primary-button-background-color: #719E64;
* --primary-button-text-color: #FFFFFF;
* --primary-button-background-hover-color: #68925b;
* --primary-button-text-hover-color: whitesmoke;
* --semi-button-color: #0F8CFF;
* --semi-button-hover-color: #50ABFF;
* --semi-button-active-color: #5287C3;
* --menu-accent-color: #5287C3;
* --menu-color: #FFFFFF;
* --confirm-accent-color: #719E64;
* --confirm-color: #FFFFFF;
* --decline-accent-color: #D20808;
* --decline-color: #FFFFFF;
* --searchbar-border-color: #9B9B9B;
* --searchbar-border-color-active: #5287C3;
* --back-button-color: #6F6F6F;
* --back-button-hover-color: #494949;
* --error-color: #D20808;
* --warning-color: #eeb200;
* --success-color: #0D9F1C;
* --cancel-color: #6F6F6F;
* --cancel-hover-color: #880505;
* --cancel-active-color: #D20808;
* --table-background-color: #FAFAFA;
* --table-border-color: #6F6F6F;
* --disabled-color: #6F6F6F;

If you want to change something, just re-defined CSS Variables in any css file or `<style>` tag this way:  
```
.debot-embedding {
	--background-color: red;
	--disabled-color: blue;
}
```
### Sizes
Minimum recommended (but not mandatory) width and height of embedding slot for Desktop: width: 640px; height: 480px;  
Maximum recommended width and height of embedding slot for Desktop: no limitations;
Minimum recommended width and height of embedding slot for Mobile: width: 100%; height: 480px;
### On/Off switching of particular control elements
StandaloneDebot and StandaloneBrowser web-components support `hideenv`, `hidesave`, and `hiderestart` properties for this purpose. Also, you can toggle on or of the Search Bar (use StandaloneBrowser with `debotonly` property to show a bar or just StandaloneDebot to hide);
### DeBot address binding
All of the provided web-components support `debotaddress` property for this purpose.
### Custom fields and controls/buttons
It is possible to bind your own controls using StandaloneDebotEvents NO-UI component and EventBus events.  
## Exports
Library export object looks this way:
```
export { EventBus, EVENTS, DEBOT_INTERFACE_ID, decodeString, encodeString }
```
where:
* EventBus - provides lib-client interaction.
* EVENTS - possible EventBus events.
* DEBOT_INTERFACE_ID - list of ids of debot interfaces (ex. `ADDRESS_INPUT: 'd7ed1bd8e6230871116f4522e58df0a93c5520c56f4ade23ef3d8919a984653b'`).
* decodeString - library function to convert from hex.
* encodeString - library function to convert to hex.

All of these exports are duplicated inside the `window` object:
```
window.DEBOT_EMBEDDING = {
	EventBus,
	EVENTS,
	DEBOT_INTERFACE_ID,
	encodeString,
	decodeString,
}
```
## How To Build
### Pre-requirements  
You need `node.js` and `yarn` or `npm` installed on your device.  
Clone the repository using git and navigate into it. Then, depending on which package manager you had installed, execute `yarn` or `npm install`.

### Build from source
Depending on which package manager you had installed, execute `yarn build` or `npm run build`. This command will create a new lib (it will appear in the 'lib' folder).  

## License
MIT License
