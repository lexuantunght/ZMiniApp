import React from 'react';
import { Route } from 'react-router-dom';
import useLang from 'utils/hooks/use-lang';
import { Page, Button, useNavigate, AnimationRoutes, Header } from 'zmp-ui';
import EventCreate from './creation';
import EventCreateResult from './creation/result';
import EventPageChat from './chat';

const EventsPage = () => {
	const { t } = useLang();
	const navigate = useNavigate();

	const onClickCreate = () => {
		navigate('/my-events/create');
	};

	return (
		<Page className="zpage-container">
			<Header className="zpage-header" showBackIcon={false} title={t('STR_MY_EVENTS')} />
			<div className="event-page-list"></div>
			<div className="event-page-create bg-white">
				<Button onClick={onClickCreate} className="w-full">
					{t('STR_CREATE_EVENT')}
				</Button>
			</div>
		</Page>
	);
};

const EventsPageStack = () => {
	return (
		<AnimationRoutes>
			<Route path="/" element={<EventsPage />} />
			<Route path="/create" element={<EventCreate />} />
			<Route path="/result" element={<EventCreateResult />} />
			<Route path="/chat" element={<EventPageChat />} />
		</AnimationRoutes>
	);
};

export default EventsPageStack;
