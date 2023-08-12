import React from 'react';
import { IoCheckmarkCircle } from 'react-icons/io5';

const SelectCardItem = (props: any) => {
	return (
		<div
			onClick={props.onClick}
			className={
				'flex flex-col ep-select-card ' +
				(props.selected ? 'selected' : '') +
				(props.isLv ? ' --lv' : '')
			}>
			{props.icon && <img className="w-8 h-8 object-contain" src={props.icon} />}
			{props.name}
			{props.selected && !props.isLv && (
				<div className="ep-select-card-check">
					<IoCheckmarkCircle />
				</div>
			)}
		</div>
	);
};

export default SelectCardItem;
