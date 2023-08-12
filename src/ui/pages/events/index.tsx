import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import useLang from 'utils/hooks/use-lang';
import { setNavigationBarLeftButton, setNavigationBarTitle } from 'zmp-sdk';
import { Page, Button, useNavigate, AnimationRoutes } from 'zmp-ui';
import EventCreate from './creation';
import EventCreateResult from './creation/result';
import EventPageChat from './chat';
import EventMembers from './creation/members';
import { GameCardPreview } from 'ui/components/game-card-preview';
import { GameCardPreviewV2 } from 'ui/components/game-card-preview/game-card-preview-v2';
import { Fetch } from 'core/network';
import userController from 'features/user-controller';

const EventsPage = () => {
	const { t } = useLang();
	const navigate = useNavigate();
	const [myEvents, setMyEvents] = useState([]);

	const onClickCreate = () => {
		navigate('/my-events/create');
	};

	useEffect(() => {
		Fetch.get(`/events/hosted?userId=${userController.userInfo.id}`).then((res) => {
			if (res?.data?.data.length) {
				setMyEvents(res.data.data);
			}
		});
	}, []);

	React.useEffect(() => {
		setNavigationBarLeftButton({ type: 'none' });
		setNavigationBarTitle({ title: 'My events' });
	}, []);
	const updateGameResult = () => {
		navigate('/update-game-result/123333');
	};

	return (
		<Page className="zpage-container">
			<div className="event-page-list">
				{myEvents?.length > 0 ? (
					myEvents.map((item, key) => (
						<GameCardPreviewV2
							onClick={() => navigate('/my-events/result/${item.id}')}
							key={key}
							item={item}
							type="joined"
						/>
					))
				) : (
					<div className="result-not-found">Bạn chưa có hoạt động nào...</div>
				)}
			</div>
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
			<Route path="/result/*" element={<EventCreateResult />} />
			<Route path="/chat/*" element={<EventPageChat />} />
			<Route path="/members/*" element={<EventMembers />} />
		</AnimationRoutes>
	);
};

export default EventsPageStack;
