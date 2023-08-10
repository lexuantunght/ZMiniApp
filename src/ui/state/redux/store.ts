import { Store, legacy_createStore as createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer);

export function observeStore<T>(
	selector: Selector<RootState, T>,
	onChange: (state: T) => void,
	st: Store = store
) {
	let currentState: T;
	function handleChange() {
		const nextState = selector(st.getState());
		if (nextState !== currentState) {
			currentState = nextState;
			onChange(currentState);
		}
	}

	const unsubscribe = st.subscribe(handleChange);
	handleChange();
	return unsubscribe;
}

export type Selector<S, T> = (state: S) => T;

export type RootState = ReturnType<typeof store.getState>;

export type Dispatcher = typeof store.dispatch;

export const dispatch = store.dispatch;

export default store;
