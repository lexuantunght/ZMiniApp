import React from 'react';

const useIsUnmounted = () => {
	const unmoutedRef = React.useRef(true);
	React.useEffect(() => {
		unmoutedRef.current = false;
		return () => {
			unmoutedRef.current = true;
		};
	}, []);

	return unmoutedRef;
};

export default useIsUnmounted;
