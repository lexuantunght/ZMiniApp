export interface EventMap {
	[name: string]: any;
}

type Falsy = null | false | undefined | '' | 0;

export type EventHandler<T> = (params: T) => void;
type Listeners<T> = {
	[key in keyof T]: EventHandler<T[key]>[];
};

export class EventEmitter<T extends EventMap> {
	private readonly _listeners = {} as Listeners<T>;

	on<K extends keyof T>(eventName: K, handler: EventHandler<T[K]> | Falsy) {
		if (!handler) {
			return this;
		}

		this._listeners[eventName] = this._listeners[eventName] ?? [];
		this._listeners[eventName].push(handler);

		return this;
	}

	off<K extends keyof T>(eventName: K, handler: EventHandler<T[K]> | Falsy) {
		if (!handler) {
			return this;
		}

		this._listeners[eventName] = this._listeners[eventName] ?? [];

		const index = this._listeners[eventName].indexOf(handler);
		if (index === -1) {
			return this;
		}

		this._listeners[eventName].splice(index, 1);

		return this;
	}

	emit<K extends keyof T>(eventName: K, data: T[K]) {
		let listeners = this._listeners[eventName] ?? [];
		listeners = [...listeners];
		listeners.forEach((listener) => Promise.resolve().then(() => listener(data)));

		return this;
	}
}
