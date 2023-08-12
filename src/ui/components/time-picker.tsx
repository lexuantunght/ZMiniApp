import moment from 'moment';
import React from 'react';
import { Picker } from 'zmp-ui';

export type TimePickerProps = {
	label?: string;
	helperText?: string;
	placeholder?: string;
	title?: string;
	selectText?: string;
	onChange?: (value: number) => void;
	defaultValue?: number;
};

const TimePicker = (props: TimePickerProps) => {
	const renderTwoDigits = (value: any) => {
		if (value >= 10) {
			return value + '';
		}
		return '0' + value;
	};
	const value = moment(props.defaultValue ?? Date.now());

	return (
		<Picker
			label={props.label}
			helperText={props.helperText}
			placeholder={props.placeholder}
			mask
			maskClosable
			value={{ hour: value.hours(), minus: value.minutes() }}
			title={props.title}
			defaultValue={{ hour: 0, minus: 0 }}
			onChange={(value) =>
				props.onChange?.(
					(Number(value.hour.value) * 60 * 60 + Number(value.minus.value) * 60) * 1000
				)
			}
			formatPickedValueDisplay={(value) =>
				`${renderTwoDigits(value.hour.value)}:${renderTwoDigits(value.minus.value)}`
			}
			data={[
				{
					options: Array(24)
						.fill(0)
						.map((_, id) => ({ value: id, displayName: renderTwoDigits(id) })),
					name: 'hour',
				},
				{
					options: Array(60)
						.fill(0)
						.map((_, id) => ({ value: id, displayName: renderTwoDigits(id) })),
					name: 'minus',
				},
			]}
		/>
	);
};

export default TimePicker;
