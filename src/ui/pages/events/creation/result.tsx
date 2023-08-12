import React from 'react';
import useLang from 'utils/hooks/use-lang';
import { Button, Header, Page, useNavigate } from 'zmp-ui';
import { openProfilePicker } from 'zmp-sdk';

const EventCreateResult = () => {
	const { t } = useLang();
	const navigate = useNavigate();
	const id = window.location.pathname.slice(window.location.pathname.length - 1);

	const handleInvite = () => {
		openProfilePicker({ maxProfile: 10 });
	};

	return (
		<Page className="zpage-container">
			<Header className="zpage-header" title={t('STR_EVENT_DETAIL')} />
			<Button onClick={() => navigate('/my-events/chat/' + id)}>{t('STR_CHAT')}</Button>
			<Button onClick={handleInvite} variant="secondary" type="neutral">
				{t('STR_INVITE')}
			</Button>
		</Page>
	);
};

export default EventCreateResult;
