import React from 'react';

const SelectCardItem = (props: any) => {
	return (
		<div className={'ep-select-card ' + (props.selected ? 'selected' : '')}>{props.name}</div>
	);
};

export default SelectCardItem;
