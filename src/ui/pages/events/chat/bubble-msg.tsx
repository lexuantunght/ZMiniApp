import React from 'react';
import { Avatar, Modal } from 'zmp-ui';
import { GetUserInfoReturns, openChat } from 'zmp-sdk';

export type BubbleMessageProps = {
	userInfo: GetUserInfoReturns['userInfo'];
	content?: string;
};

const BubbleMessage = (props: BubbleMessageProps) => {
	const [showConfirmChat, setShowConfirmChat] = React.useState(false);

	return (
		<>
			<Modal
				visible={showConfirmChat}
				title="Open Chat"
				onClose={() => {
					setShowConfirmChat(false);
				}}
				actions={[
					{
						text: 'No',
						close: true,
					},
					{
						text: 'Yes',
						highLight: true,
						close: true,
						onClick: () =>
							openChat({
								id: props.userInfo?.id,
								type: 'user',
							}),
					},
				]}
				description={`Are you want to open chat with ${props.userInfo?.name} Zalo?`}
			/>
			<div className="flex space-x-2 mt-4 last:mb-4">
				<Avatar
					onClick={() => setShowConfirmChat(true)}
					size={40}
					src={props.userInfo?.avatar}
				/>
				<div className="p-2 rounded-lg bg-slate-300 flex flex-col">
					<span className="text-sm font-semibold">{props.userInfo?.name}</span>
					<span>{props.content}</span>
				</div>
			</div>
		</>
	);
};

export default BubbleMessage;
