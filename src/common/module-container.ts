import * as DI from 'tsyringe';
import constructor from 'tsyringe/dist/typings/types/constructor';

export class _ModuleContainer {
	injectable = DI.injectable;
	inject = <T>(token: DI.InjectionToken<T>) => DI.inject(token);
	singleton = DI.singleton;
	resolve = <T>(token: DI.InjectionToken<T>) => DI.container.resolve(token);
	autoRegister = <T>(token: DI.InjectionToken<T>) => {
		return function (target: constructor<T>) {
			DI.container.register(token, target);
		};
	};
	registerSingleton = <T>(token: DI.InjectionToken<T>, target: constructor<T>) =>
		DI.container.registerSingleton(token, target);
	register = <T>(token: DI.InjectionToken<T>, target: constructor<T>) =>
		DI.container.register(token, target);
	define = <T>(service: string): DI.InjectionToken<T> => {
		const token = service;
		return token;
	};
}

const ModuleContainer = new _ModuleContainer();
export default ModuleContainer;
