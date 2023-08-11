export function deepEqual(obj, target) {
	if (typeof obj !== typeof target) {
		return false;
	}
	if (typeof obj === 'object') {
		if (Object.keys(obj).length !== Object.keys(target).length) {
			return false;
		}
		let isEqual = true;
		Object.keys(obj).forEach((key) => {
			if (!deepEqual(obj[key], target[key])) {
				isEqual = false;
				return;
			}
		});
		return isEqual;
	}
	return obj === target;
}
