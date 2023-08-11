export function deepClone(obj) {
	if (typeof obj !== 'object') {
		return obj;
	}
	if (Array.isArray(obj)) {
		const clonedObj = [];
		obj.forEach((item) => {
			clonedObj.push(deepClone(item));
		});
		return clonedObj;
	}
	let clonedObj = {};
	Object.keys(obj).forEach((key) => {
		if (typeof obj[key] !== 'object') {
			clonedObj[key] = obj[key];
		} else {
			clonedObj[key] = deepClone(obj[key]);
		}
	});
	return clonedObj;
}
