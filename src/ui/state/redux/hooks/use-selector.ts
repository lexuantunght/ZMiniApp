import React from 'react';
import store, { observeStore, RootState } from '../store';

export const useSelector = <S>(selector: (state: RootState) => S) => {
	const [state, setState] = React.useState<S>(selector(store.getState()));

	React.useEffect(() => {
		const unsubscribe = observeStore(selector, (state: S) => setState(state));
		return () => {
			unsubscribe();
		};
	}, []);

	return state;
};
