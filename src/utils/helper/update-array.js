export function updateArray(originArr, newItems, keyName) {
	return originArr.map((item) => {
		const newItem = newItems.find((it) => it[keyName] === item[keyName]);
		if (newItem !== undefined) {
			return newItem;
		}
		return item;
	});
}

