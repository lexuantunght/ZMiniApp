import React from 'react';
import useLang from 'utils/hooks/use-lang';
import { Button, DatePicker, Icon, Input, Page, Progress, Switch, useNavigate } from 'zmp-ui';
import TimePicker from 'ui/components/time-picker';
import { useFormik } from 'formik';
import FootballSvg from 'static/img/football.png';
import BadminSvg from 'static/img/badminton.png';
import ChessSvg from 'static/img/chesss.png';
import RunSvg from 'static/img/run.png';
import SwimSvg from 'static/img/swim.png';
import TenisSvg from 'static/img/tenis.png';
import SelectCardItem from './card-item';
import EventsController from 'features/events/controller';
import { setNavigationBarTitle } from 'zmp-sdk';

const sports = [
	{
		name: 'Football',
		Icon: FootballSvg,
	},
	{
		name: 'Badminton',
		Icon: BadminSvg,
	},
	{
		name: 'Chess',
		Icon: ChessSvg,
	},
	{
		name: 'Running',
		Icon: RunSvg,
	},
	{
		name: 'Swimming',
		Icon: SwimSvg,
	},
	{
		name: 'Tennis',
		Icon: TenisSvg,
	},
];

const levels = ['Beginner', 'Intermediate', 'Advanced'];

const EventCreate = () => {
	const { t } = useLang();
	const [step, setStep] = React.useState(0);
	const navigate = useNavigate();
	const [enableCost, setEnableCost] = React.useState(false);

	React.useEffect(() => {
		setNavigationBarTitle({ title: 'Create event' });
	}, []);

	const renderSteps = () => {
		const items: JSX.Element[] = [];
		items.push(
			<>
				<span className="mb-4 mx-3">{t('STR_SELECT_SPORT')}</span>
				<div className="event-page-select-list">
					{sports.map((item, key) => (
						<SelectCardItem
							selected={formik.values.sport === key}
							onClick={() => formik.setFieldValue('sport', key)}
							key={key}
							icon={item.Icon}
							name={item.name}
						/>
					))}
				</div>
				<span className="my-4 mx-3">{t('STR_SELECT_LEVEL')}</span>
				<div className="event-page-select-list mb-4">
					{levels.map((item, key) => (
						<SelectCardItem
							selected={formik.values.level === key}
							onClick={() => formik.setFieldValue('level', key)}
							isLv
							key={key}
							name={item}
						/>
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
				<Input
					groupClassName="mt-4"
					id="address"
					onChange={formik.handleChange}
					label={t('STR_LOCATION')}
				/>
			</div>
		);

		items.push(
			<div className="flex flex-col px-3">
				<Input id="name" onChange={formik.handleChange} label={t('STR_ACT_NAME')} />
				<div className="flex justify-between mt-4">
					<span>{t('STR_COST')}</span>
					<Switch
						onChange={(e) => setEnableCost(e.target.checked)}
						checked={enableCost}
					/>
				</div>
				<Input
					id="cost"
					onChange={formik.handleChange}
					disabled={!enableCost}
					value={formik.values.cost}
					type="number"
				/>
				<br />
				<Input.TextArea id="note" onChange={formik.handleChange} label={t('STR_NOTE')} />
			</div>
		);

		return items;
	};

	const handleSubmit = () => {
		if (step < 2) {
			setStep(step + 1);
		} else {
			EventsController.createEvent(formik.values);
			navigate('/my-events', { replace: true });
		}
	};

	const formik = useFormik({
		initialValues: {
			sport: 0,
			level: 0,
			numerPlayers: 2,
			date: Date.now(),
			startTime: new Date().getTime(),
			endTime: new Date().getTime() + 180000,
			address: '',
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
