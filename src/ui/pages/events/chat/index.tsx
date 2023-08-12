import React from 'react';
import useLang from 'utils/hooks/use-lang';
import { Button, Header, Icon, Input, Page } from 'zmp-ui';
import EventsController from 'features/events/controller';
import BubbleMessage from './bubble-msg';
import UserController from 'features/user-controller';

const EventPageChat = () => {
	const { t } = useLang();
	const [content, setContent] = React.useState('');
	const [threadItems, setThreadItems] = React.useState<any[]>([]);

	const onSend = () => {
		const item = { content, userInfo: UserController.userInfo };
		EventsController.sendMessage(item);
		setThreadItems([...threadItems, item]);
		setContent('');
	};

	return (
		<Page className="zpage-container">
			<Header className="zpage-header" title={t('STR_CHAT')} />
			<div className="ep-chat-box">
				{threadItems.map((item, key) => (
					<BubbleMessage userInfo={item.userInfo} key={key} content={item.content} />
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
