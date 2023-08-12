import React from 'react';
import useLang from 'utils/hooks/use-lang';
import {
	Button,
	DatePicker,
	Header,
	Icon,
	Input,
	Page,
	Progress,
	Switch,
	useNavigate,
} from 'zmp-ui';
import TimePicker from 'ui/components/time-picker';
import { useFormik } from 'formik';
import SelectCardItem from './card-item';

const sports = ['Badminton', 'Chess', 'Football', 'Swimming', 'Running'];

const levels = ['Beginner', 'Intermediate', 'Advanced'];

const EventCreate = () => {
	const { t } = useLang();
	const [step, setStep] = React.useState(0);
	const navigate = useNavigate();

	const renderSteps = () => {
		const items: JSX.Element[] = [];
		items.push(
			<>
				<span>{t('STR_SELECT_SPORT')}</span>
				<div className="event-page-select-list">
					{sports.map((item, key) => (
						<SelectCardItem key={key} name={item} />
					))}
				</div>
				<span>{t('STR_SELECT_LEVEL')}</span>
				<div className="event-page-select-list">
					{levels.map((item, key) => (
						<SelectCardItem key={key} name={item} />
					))}
				</div>
				<Input
					id="numberPlayers"
					onChange={formik.handleChange}
					defaultValue={2}
					type="number"
					label={t('STR_NUMBER_PLAYERS')}
				/>
			</>
		);

		items.push(
			<>
				<span>{t('STR_DATE_TIME')}</span>
				<DatePicker
					onChange={(v) => formik.setFieldValue('date', v.getTime())}
					defaultValue={new Date()}
				/>
				<div className="flex items-center space-x-2">
					<TimePicker defaultValue={Date.now()} />
					<Icon icon="zi-arrow-right" />
					<TimePicker defaultValue={Date.now() + 1800000} />
				</div>
				<Input label={t('STR_LOCATION')} />
			</>
		);

		items.push(
			<>
				<Input label={t('STR_ACT_NAME')} />
				<div className="flex justify-between">
					<span>{t('STR_COST')}</span>
					<Switch />
				</div>
				<Input type="number" />
				<Input.TextArea label={t('STR_NOTE')} />
			</>
		);

		return items;
	};

	const handleSubmit = () => {
		if (step < 2) {
			setStep(step + 1);
		} else {
			navigate('/my-events/result', { replace: true });
		}
	};

	const formik = useFormik({
		initialValues: {
			sport: '',
			level: '',
			numerPlayers: 2,
			date: Date.now(),
			startTime: new Date().getTime(),
			endTime: new Date().getTime() + 180000,
			location: '',
			name: '',
			cost: 0,
			note: '',
		},
		onSubmit: handleSubmit,
	});

	return (
		<Page className="zpage-container">
			<Header className="zpage-header" title={t('STR_CREATE_EVENT')} />
			<form onSubmit={formik.handleSubmit} className="flex flex-col px-3">
				<Progress completed={30 * (step + 1)} maxCompleted={90} />
				{renderSteps()[step]}
				<Button htmlType="button" onClick={handleSubmit} className="w-full">
					{t('STR_NEXT')}
				</Button>
			</form>
		</Page>
	);
};

export default EventCreate;
