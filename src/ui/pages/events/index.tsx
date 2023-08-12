import React from 'react';
import { Route } from 'react-router-dom';
import useLang from 'utils/hooks/use-lang';
import { Page, Button, useNavigate, AnimationRoutes, Header } from 'zmp-ui';
import EventCreate from './creation';
import EventCreateResult from './creation/result';
import EventPageChat from './chat';
import EventMembers from './creation/members';
import { GameCardPreview } from 'ui/components/game-card-preview';
import { gameList } from '../home';

const EventsPage = () => {
	const { t } = useLang();
	const navigate = useNavigate();

	const onClickCreate = () => {
		navigate('/my-events/create');
	};

	const updateGameResult = () => {
		navigate('/update-game-result/123333');
	}

	return (
		<Page className="zpage-container">
			<Header className="zpage-header" showBackIcon={false} title={t('STR_MY_EVENTS')} />
			<div className="event-page-list">
				{gameList.map((item, key) => (
					<GameCardPreview
						onClick={() => navigate('/my-events/result/${item.id}')}
						key={key}
						item={item}
						type="discover-game"
					/>
				))}
			</div>
			<div className="event-page-create bg-white">
				{/* <Button onClick={onClickCreate} className="w-full"> */}
				<Button onClick={updateGameResult} className="w-full">
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
			<Route path="/result/*" element={<EventCreateResult />} />
			<Route path="/chat" element={<EventPageChat />} />
			<Route path="/members/*" element={<EventMembers />} />
		</AnimationRoutes>
	);
};

export default EventsPageStack;
