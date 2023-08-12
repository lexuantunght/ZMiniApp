import React from 'react';
import { getUserInfo, setNavigationBarLeftButton } from 'zmp-sdk';
import { Avatar, Page, Tabs } from 'zmp-ui';
import ActivityPng from 'static/img/activity.png';
import { IoLocation } from 'react-icons/io5';
import { CiLocationArrow1 } from 'react-icons/ci';
import policeBadge from 'static/images/badges/police-badge.png';
import redBadge from 'static/images/badges/red-badge.png';
import reward from 'static/images/badges/reward.png';
import saveEarth from 'static/images/badges/save-earth.png';
import sheriffBadge from 'static/images/badges/sheriff-badge.png';
import wreath from 'static/images/badges/wreath.png';
import { games } from '.';
import { CgChevronRight } from 'react-icons/cg';

const ProfilePageV2 = () => {
	const [userInfo, setUserInfo] = React.useState<any>(null);
	const [foc, setFoc] = React.useState(0);

	React.useEffect(() => {
		setNavigationBarLeftButton({ type: 'none' });
		const _getUserInfo = async () => {
			const result = await getUserInfo();
			setUserInfo(result.userInfo);
		};

		_getUserInfo();
	}, []);

	return (
		<Page className="zpage-container bg-white px-3">
			<div className="mt-8 flex flex-col items-center justify-center">
				<Avatar size={70} src={userInfo?.avatar} className="avatar" />
				<div className="my-profile-name font-semibold mt-2 text-lg">{userInfo?.name}</div>
				<span style={{ color: '#76737F' }}>Bạn đã từng tham gia 8 hoạt động</span>
			</div>
			<div
				className="my-4"
				style={{ height: 1, width: '100%', backgroundColor: '#F0F0F0' }}
			/>
			<span className="font-semibold">Thông tin cá nhân</span>
			<div className="flex mt-2" style={{ color: '#76737F' }}>
				<IoLocation className="mr-2" size={18} /> 288 Nguyễn Văn Cừ, Phường 5, Quận 5, Hồ
				Chí Minh
			</div>
			<div
				className="my-4"
				style={{ height: 1, width: '100%', backgroundColor: '#F0F0F0' }}
			/>
			<span className="font-semibold">Cấp hộ hoạt động</span>
			<img className="w-full" src={ActivityPng} />
			<div
				className="my-4"
				style={{ height: 1, width: '100%', backgroundColor: '#F0F0F0' }}
			/>
			<span className="font-semibold">Lịch sử hoạt động</span>
			<div className="mt-4 flex items-center space-x-2">
				<div
					style={foc === 0 ? { backgroundColor: '#3056C6', color: '#fff' } : undefined}
					onClick={() => setFoc(0)}
					className={'bg-slate-300 px-2 py-1 rounded-full'}>
					Bóng đá
				</div>
				<div
					style={foc === 1 ? { backgroundColor: '#3056C6', color: '#fff' } : undefined}
					onClick={() => setFoc(1)}
					className="bg-slate-300 px-2 py-1 rounded-full">
					Bóng bàn
				</div>
				<div
					style={foc === 2 ? { backgroundColor: '#3056C6', color: '#fff' } : undefined}
					onClick={() => setFoc(2)}
					className="bg-slate-300 px-2 py-1 rounded-full">
					Cờ vua
				</div>
			</div>
			<div className="my-4" style={{ color: '#76737F' }}>
				Bạn chưa tham gia hoạt động nào trong 3 tháng vừa qua
			</div>
		</Page>
	);
};

export default ProfilePageV2;
