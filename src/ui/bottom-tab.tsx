import React from 'react';
import { Route } from 'react-router-dom';
import useLang from 'utils/hooks/use-lang';
import { AnimationRoutes, BottomNavigation, Icon, Page } from 'zmp-ui';
import HomePage from 'ui/pages/home';
import ProfilePage from 'ui/pages/profile';
import EventsPage from 'ui/pages/events';
import { UpdateGameResult } from 'ui/pages/update-game-result/update-game-result';

const BottomTab = () => {
	const [activeTab, setActiveTab] = React.useState('home');
	const { t } = useLang();

	return (
		<Page>
			<AnimationRoutes>
				<Route path="/" element={<HomePage />} />
				<Route path="/my-events/*" element={<EventsPage />} />
				<Route path="/profile" element={<ProfilePage />} />
				<Route path="/update-game-result/:gameId" element={<UpdateGameResult/>}/>
			</AnimationRoutes>
			<BottomNavigation fixed activeKey={activeTab} onChange={setActiveTab}>
				<BottomNavigation.Item
					key="home"
					label={t('STR_HOME')}
					icon={<Icon icon="zi-home" />}
					linkTo="/"
				/>
				<BottomNavigation.Item
					key="events"
					label={t('STR_MY_EVENTS')}
					icon={<Icon icon="zi-calendar" />}
					linkTo="/my-events"
				/>
				<BottomNavigation.Item
					key="profile"
					label={t('STR_PROFILE')}
					icon={<Icon icon="zi-user" />}
					linkTo="/profile"
				/>
			</BottomNavigation>
		</Page>
	);
};

export default BottomTab;
