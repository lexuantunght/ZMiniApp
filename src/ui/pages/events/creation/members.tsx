import React from 'react';
import { Avatar, Header, List, Page, useSnackbar } from 'zmp-ui';
import useLang from 'utils/hooks/use-lang';
import phoneIconSrc from 'static/icons/phone.svg';

const EventMembers = () => {
	const { t } = useLang();
	
	const id = window.location.pathname.slice(window.location.pathname.length - 1);

	const users: Array<{
		id: number;
		avatar: string;
		name: string;
		phone: string;
	}> = [
		{
			id: 1,
			avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkgSnMl1uAoj2UyPsJKRpWTHkJ6dHQU91yyw&usqp=CAU',
			name: 'Ropert Louis',
			phone: '+84 0905 250 314',
		},
		{
			id: 2,
			avatar: 'https://images.unsplash.com/photo-1474176857210-7287d38d27c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvcnRyYWl0JTIwc21pbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
			name: 'Rololerto',
			phone: '+84 0905 250 314',
		},
		{
			id: 3,
			avatar: 'https://images.unsplash.com/photo-1474176857210-7287d38d27c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvcnRyYWl0JTIwc21pbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
			name: 'Ronaldo Carlos',
			phone: '+84 0905 250 314',
		},
		{
			id: 4,
			avatar: 'https://images.unsplash.com/photo-1584043720379-b56cd9199c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHBvcnRyYWl0JTIwc21pbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
			name: 'Rololerto',
			phone: '+84 0905 250 314',
		},
		{
			id: 5,
			avatar: 'https://images.unsplash.com/photo-1611403119860-57c4937ef987?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHBvcnRyYWl0JTIwc21pbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
			name: 'Ronaldo Carlos',
			phone: '+84 0905 250 314',
		},
	];

	const { openSnackbar } = useSnackbar();

	const handleCall = () => {
		openSnackbar({
			text: 'Tính năng chưa được hỗ trợ',
		});
	};

	return (
		<Page className="zpage-container bg-white">
			<Header className="zpage-header" title={t('STR_EVENT_MEMBERS')} />
			<List
				dataSource={users}
				renderItem={({ id, name, phone, avatar }: any) => (
					<div
						key={id}
						className="flex pr-[12px] pl-[9px] pt-[12px] pb-[10px] items-center">
						<Avatar src={avatar} size={40} />
						<div className="flex flex-col ml-[10px]">
							<span className="font-[500]">{name}</span>
							<span className="text-[12px] text-[#9DA0AC]">{phone}</span>
						</div>
						<img src={phoneIconSrc} className="ml-auto" onClick={handleCall} />
					</div>
				)}></List>
		</Page>
	);
};

export default EventMembers;
