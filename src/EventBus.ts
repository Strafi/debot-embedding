export interface IRegistry {
	unregister: () => void;
}

export interface ICallable {
	[key: string]: Function;
}

export interface ISubscriber {
	[key: string]: ICallable;
}

export type TDispatchType = {
	interfaceId: string;
	debotAddress: string;
	functionId?: string;
	data?: any;
}

export interface IEventBus {
	dispatch(event: string, args?: TDispatchType): void;
	register(event: string, callback: Function): IRegistry;
}

class EventBus implements IEventBus {
	private subscribers: ISubscriber;
	private nextId = 0;
  
	constructor() {
		this.subscribers = {};
	}
  
	public dispatch(event: string, args?: TDispatchType): void {
		const subscriber = this.subscribers[event];

		if (subscriber === undefined) {
			return;
		}

		Object.keys(subscriber).forEach((key) => subscriber[key](args));
	}
  
	public register(event: string, callback: Function): IRegistry {
		const id = this.getNextId();

		if (!this.subscribers[event])
			this.subscribers[event] = {};

		this.subscribers[event][id] = callback;

		return {
			unregister: () => {
				delete this.subscribers[event][id];

				if (Object.keys(this.subscribers[event]).length === 0)
					delete this.subscribers[event];
			},
		};
	}
  
	private getNextId(): number {
		return this.nextId++;
	}
}

export default new EventBus();
