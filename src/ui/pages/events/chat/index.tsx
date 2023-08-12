import React from 'react';
import useLang from 'utils/hooks/use-lang';
import { Button, Icon, Input, Page } from 'zmp-ui';
import EventsController from 'features/events/controller';
import BubbleMessage from './bubble-msg';
import UserController from 'features/user-controller';
import { setNavigationBarTitle } from 'zmp-sdk';

const EventPageChat = () => {
	const { t } = useLang();
	const [content, setContent] = React.useState('');
	const [threadItems, setThreadItems] = React.useState<any[]>([]);
	const id = window.location.pathname.slice(window.location.pathname.length - 1);

	const onSend = () => {
		const item = { message: content, userInfo: UserController.userInfo };
		EventsController.sendMessage(item);
		setThreadItems([...threadItems, item]);
		setContent('');
		EventsController.sendMessage({
			sendDttm: Date.now(),
			userId: UserController.userInfo.id,
			message: content,
			gameId: id,
		});
	};

	React.useEffect(() => {
		setNavigationBarTitle({ title: 'Discuss' });
		EventsController.getAllMessages(id).then((items) => {
			setThreadItems(items);
		});
	}, []);

	return (
		<Page className="zpage-container">
			<div className="ep-chat-box">
				{threadItems.map((item, key) => (
					<BubbleMessage
						userInfo={{ id: item.userId, name: item.name, avatar: item.avatar }}
						key={key}
						content={item.message}
					/>
				))}
			</div>
			<div className="ep-chat-input">
				<Input
					size="small"
					value={content}
					onChange={(e) => setContent(e.target.value)}
					placeholder={t('STR_TYPE_MSG')}
				/>
				<Button
					size="small"
					onClick={onSend}
					className="ep-chat-input-btn"
					icon={<Icon icon="zi-send-solid" />}></Button>
			</div>
		</Page>
	);
};

export default EventPageChat;
