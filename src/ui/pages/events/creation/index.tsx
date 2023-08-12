import React from 'react';
import useLang from 'utils/hooks/use-lang';
import { Button, DatePicker, Icon, Input, Page, Progress, Switch, useNavigate } from 'zmp-ui';
import TimePicker from 'ui/components/time-picker';
import { useFormik } from 'formik';
import SelectCardItem from './card-item';

const sports = ['Badminton', 'Chess', 'Football', 'Swimming', 'Running'];

const levels = ['Beginner', 'Intermediate', 'Advanced'];

const EventCreate = () => {
	const { t } = useLang();
	const [step, setStep] = React.useState(0);
	const navigate = useNavigate();
	const [enableCost, setEnableCost] = React.useState(false);

	const renderSteps = () => {
		const items: JSX.Element[] = [];
		items.push(
			<>
				<span className="mb-4 mx-3">{t('STR_SELECT_SPORT')}</span>
				<div className="event-page-select-list">
					{sports.map((item, key) => (
						<SelectCardItem
							selected={formik.values.sport === item}
							key={key}
							name={item}
						/>
					))}
				</div>
				<span className="my-4 mx-3">{t('STR_SELECT_LEVEL')}</span>
				<div className="event-page-select-list mb-4">
					{levels.map((item, key) => (
						<SelectCardItem key={key} name={item} />
					))}
				</div>
				<Input
					id="numberPlayers"
					onChange={formik.handleChange}
					defaultValue={2}
					groupClassName="mx-3"
					type="number"
					label={t('STR_NUMBER_PLAYERS')}
				/>
			</>
		);

		items.push(
			<div className="flex flex-col mx-3">
				<span className="mb-1">Date start</span>
				<DatePicker
					onChange={(v) => formik.setFieldValue('date', v.getTime())}
					defaultValue={new Date()}
				/>
				<span className="mt-4 mb-1">Time start</span>
				<div className="flex items-center space-x-2">
					<TimePicker defaultValue={Date.now()} />
					<Icon icon="zi-arrow-right" />
					<TimePicker defaultValue={Date.now() + 1800000} />
				</div>
				<Input groupClassName="mt-4" label={t('STR_LOCATION')} />
			</div>
		);

		items.push(
			<div className="flex flex-col px-3">
				<Input label={t('STR_ACT_NAME')} />
				<div className="flex justify-between mt-4">
					<span>{t('STR_COST')}</span>
					<Switch
						onChange={(e) => setEnableCost(e.target.checked)}
						checked={enableCost}
					/>
				</div>
				<Input disabled={!enableCost} value={formik.values.cost} type="number" />
				<br />
				<Input.TextArea label={t('STR_NOTE')} />
			</div>
		);

		return items;
	};

	const handleSubmit = () => {
		if (step < 2) {
			setStep(step + 1);
		} else {
			navigate('/my-events', { replace: true });
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
			<form onSubmit={formik.handleSubmit} className="flex flex-col">
				<div style={{ marginTop: -12 }}>
					<Progress completed={30 * (step + 1)} maxCompleted={90} />
				</div>
				{renderSteps()[step]}
				<div className="p-3">
					<Button htmlType="button" onClick={handleSubmit} className="w-full">
						{t('STR_NEXT')}
					</Button>
				</div>
			</form>
		</Page>
	);
};

export default EventCreate;
