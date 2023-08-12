import React, { useState, useEffect } from 'react';
import { getUserInfo } from 'zmp-sdk';
import { Avatar, Page, Tabs } from 'zmp-ui';
import { BsPeople } from 'react-icons/bs';
import { CiLocationArrow1 } from 'react-icons/ci';
import { CgChevronRight } from 'react-icons/cg';

import policeBadge from 'static/images/badges/police-badge.png';
import redBadge from 'static/images/badges/red-badge.png';
import reward from 'static/images/badges/reward.png';
import saveEarth from 'static/images/badges/save-earth.png';
import sheriffBadge from 'static/images/badges/sheriff-badge.png';
import wreath from 'static/images/badges/wreath.png';
import { GameLevels } from 'ui/common/constants';

const games = [
	{
		id: '1',
		name: 'Cầu lông',
		level: GameLevels.BEGINNER,
		url: 'https://t3.ftcdn.net/jpg/02/54/18/88/360_F_254188895_yJrVHWRCPhbq8TFTS2buATp9YTenwFYl.jpg',
	},
	{
		id: '2',
		name: 'Tennis',
		level: GameLevels.INTER,
		url: 'https://t4.ftcdn.net/jpg/02/24/19/91/360_F_224199110_RJm0enRFM9WfBQG5jPi7yfLwxUud4xZL.jpg',
	},
	{
		id: '3',
		name: 'Bóng bàn',
		level: GameLevels.ADVANCED,
		url: 'https://img.freepik.com/free-vector/realistic-design-table-tennis-background_52683-46121.jpg',
	},
	{
		id: '4',
		name: 'Bơi lội',
		level: GameLevels.ADVANCED,
		url: 'https://img.freepik.com/free-vector/hand-drawn-swimming-pool-background_23-2149440763.jpg',
	},
	{
		id: '5',
		name: 'Chạy bộ',
		level: GameLevels.BEGINNER,
		url: 'https://cdn.wallpapersafari.com/6/50/K508N2.jpg',
	},
	{
		id: '6',
		name: 'Cờ vua',
		level: GameLevels.INTER,
		url: 'https://wallpaperaccess.com/full/2203449.jpg',
	},
];

const ProfilePage = () => {
	const [userInfo, setUserInfo] = useState<any>(null);

	useEffect(() => {
		const _getUserInfo = async () => {
			const result = await getUserInfo();
			setUserInfo(result.userInfo);
		};

		_getUserInfo();
	}, []);

	return (
		<Page>
			<div className="profile-container">
				<div className="my-profile-preview">
					<Avatar src={userInfo?.avatar} className="avatar" />
					<div className="my-profile-desc">
						<h3 className="my-profile-name">{userInfo?.name}</h3>
						<div className='zaui-box-flex'>
							Tuổi: <span className="my-profile-age">23</span>{` - `}
							Giới tính: <span className="my-profile-gender">Nam</span>
						</div>
						<div className="my-profile-following">
							<span>
								<BsPeople /> <span className="num">11</span> người theo dõi{' '}
								<span>·</span> <span className="num">56</span> đang theo dõi
							</span>
						</div>
					</div>
				</div>
				<Tabs id="contact-list">
					<Tabs.Tab key="tab1" label="Thông tin">
						<div className="location">
							<CiLocationArrow1 className="icon" />{' '}
							<span className="location-text">
								{' Z06 Số 13, Tân Thuận Đông, Quận 7, Thành phố Hồ Chí Minh'}
							</span>
						</div>

						<div className="separator"></div>

						<div>
							<h4 className="badges-list-title">Thành tích</h4>
							<div className="badges-list">
								<div className="badge-item">
									<img className="photo" src={policeBadge}></img>
									<span className="count">x3</span>
								</div>
								<div className="badge-item">
									<img className="photo" src={redBadge}></img>
								</div>
								<div className="badge-item">
									<img className="photo" src={reward}></img>
									<span className="count">x2</span>
								</div>
								<div className="badge-item">
									<img className="photo" src={saveEarth}></img>
								</div>
								<div className="badge-item">
									<img className="photo" src={sheriffBadge}></img>
								</div>
								<div className="badge-item">
									<img className="photo" src={wreath}></img>
								</div>
							</div>
						</div>
					</Tabs.Tab>
					<Tabs.Tab key="tab2" label="Thể thao">
						<div className="games-list-container">
							{games.map((game) => {
								return (
									<div className="game-item-container">
										<div
											className="game-item-background"
											style={{ backgroundImage: `url(${game.url})` }}
										/>
										<div className="game-item">
											<span className="game-name">{game.name}</span>
											<span className="game-level">{game.level}</span>
											<CgChevronRight className="more" />
										</div>
									</div>
								);
							})}
						</div>
					</Tabs.Tab>
					<Tabs.Tab key="tab3" label="Reviews">
						Đánh giá
					</Tabs.Tab>
				</Tabs>
			</div>
		</Page>
	);
};

export default ProfilePage;
