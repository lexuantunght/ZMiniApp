import React, { useState, useEffect } from 'react';
import useLang from 'utils/hooks/use-lang';
import { Input, Page, useNavigate } from 'zmp-ui';
import { LiaVolleyballBallSolid } from 'react-icons/lia';
import { PiSoccerBall } from 'react-icons/pi';
import { MdOutlineSportsTennis, MdOutlineSportsCricket } from 'react-icons/md';
import { GameLevels, GameTypes, HomeTabs } from 'ui/common/constants';
import { GameCardPreviewList } from 'ui/components/game-card-preview-list';
import { GameCardPreview } from 'ui/components/game-card-preview';
import { GameCardPreviewV2 } from 'ui/components/game-card-preview/game-card-preview-v2';
// import { FaPersonSwimming } from 'react-icons/fa';
import { Fetch } from 'core/network';
import { getUserInfo } from 'zmp-sdk';

const tags = [
	{
		icon: <PiSoccerBall />,
		name: 'Bóng đá',
	},
	{
		icon: <PiSoccerBall />,
		name: 'Bơi',
	},
	{ icon: <MdOutlineSportsCricket />, name: 'Cầu lông' },
	{
		icon: <MdOutlineSportsTennis />,
		name: 'Quần vợt',
	},
	{
		icon: <LiaVolleyballBallSolid />,
		name: 'Bóng chuyền',
	},
];

export const gameList = [
	{
		id: '1',
		gameName: 'Chơi cùng chúng mình nhé!',
		time: '05:00, 10/08/2023',
		bgSrc: GameTypes[6].bgSrc,
		gameType: GameTypes[6].name,
		gameLevels: [GameLevels.BEGINNER, GameLevels.INTER, GameLevels.ADVANCED],
		location: 'VNG Campus, Tan Thuan, KCN trong KCX, quan 7, Ho Chi Minh',
		participants: [
			{
				id: '1',
				avatar: 'https://s120-ava-talk.zadn.vn/1/d/c/a/20/120/a227b4c5c98c95319111257af9a9610a.jpg',
				isHost: true,
				name: 'dongmt',
			},
			{
				id: '2',
				avatar: 'https://s120-ava-talk.zadn.vn/1/d/c/a/20/120/a227b4c5c98c95319111257af9a9610a.jpg',
				isHost: false,
				name: 'dongmt',

			},
			{
				id: '3',
				avatar: 'https://s120-ava-talk.zadn.vn/1/d/c/a/20/120/a227b4c5c98c95319111257af9a9610a.jpg',
				isHost: false,
				name: 'dongmt',

			},
		],
	},
	{
		id: '2',
		gameName: 'Chơi cùng chúng mình nhé!',
		time: '05:00, 10/08/2023',
		bgSrc: GameTypes[5].bgSrc,
		gameType: GameTypes[5].name,
		gameLevels: [GameLevels.INTER, GameLevels.ADVANCED],
		location: 'VNG Campus, Tan Thuan, KCN trong KCX, quan 7, Ho Chi Minh',
		participants: [],
	},
	{
		id: '3',
		gameName: 'Chơi cùng chúng mình nhé!',
		time: '05:00, 10/08/2023',
		bgSrc: GameTypes[5].bgSrc,
		gameType: GameTypes[5].name,
		gameLevels: [GameLevels.INTER, GameLevels.ADVANCED],
		location: 'VNG Campus, Tan Thuan, KCN trong KCX, quan 7, Ho Chi Minh',
		participants: [],
	},
	{
		id: '4',
		gameName: 'Chơi cùng chúng mình nhé!',
		time: '05:00, 10/08/2023',
		bgSrc: GameTypes[5].bgSrc,
		gameType: GameTypes[5].name,
		gameLevels: [GameLevels.INTER, GameLevels.ADVANCED],
		location: 'VNG Campus, Tan Thuan, KCN trong KCX, quan 7, Ho Chi Minh',
		participants: [],
	},
	{
		id: '5',
		gameName: 'Chơi cùng chúng mình nhé!',
		time: '05:00, 10/08/2023',
		bgSrc: GameTypes[5].bgSrc,
		gameType: GameTypes[5].name,
		gameLevels: [GameLevels.INTER, GameLevels.ADVANCED],
		location: 'VNG Campus, Tan Thuan, KCN trong KCX, quan 7, Ho Chi Minh',
		participants: [],
	},
];

const HomePage = () => {
	const [isLoading, setLoading] = useState(false);
	const { t } = useLang();
	const navigate = useNavigate();

	const [activeTab, setActiveTab] = useState(HomeTabs.DISCOVER);
	const [filteredGameList, setFilteredGameList] = useState([]);
	const [gameCates, setGameCates] = useState([]);
	const [userInfo, setUserInfo] = useState<any>(null);
	const [activeTagName, setActiveTagName] =useState<string>('');

	useEffect(() => {
		const _getUserInfo = async () => {
			if (!userInfo) {
				const res = await getUserInfo();
				setUserInfo(res.userInfo);
			}
		}

		_getUserInfo();
	}, []);

	useEffect(() => {
		async function getGameCates() {
			const res = await Fetch.get('/sports');

			if (res.data?.data?.length) {
				setGameCates(res.data.data);
			}
		}

		getGameCates();

	}, []);

	useEffect(() => {
		async function getAllSports() {
			let _userInfo = userInfo;
			if (!_userInfo) {
				_userInfo = (await getUserInfo()).userInfo;
				setUserInfo(_userInfo);
			}

			const res = await Fetch.get('/events');
			console.log('[mtd] res ', res.data.data);
			if (res.data?.data?.length) {
				let list = res.data.data;

				if (activeTab === HomeTabs.DISCOVER) {
					list = list;
				} else {
					list = list.filter(i  => i.players.includes(_userInfo.id));
				}

				//TODO: filter out...
				if (activeTagName) {
					list = list.filter(i => i.sport === activeTagName);
				} 

				setFilteredGameList(list);
			}
		}

		getAllSports();
	}, [activeTab, activeTagName]);

	//TODO: filter by which...
	//We get from results -> and display...

	return (
		<Page className="zpage-container no-header">
			<div className="home-container">
				<div className="home-tabs-container">
					<span
						className={`home-tab ${HomeTabs.DISCOVER === activeTab && 'active'}`}
						onClick={() => {
							setActiveTab(HomeTabs.DISCOVER);
						}}>
						Tất cả
					</span>
					<span
						className={`home-tab ${HomeTabs.JOINED === activeTab && 'active'}`}
						onClick={() => {
							setActiveTab(HomeTabs.JOINED);
						}}>
						Đã tham gia
					</span>
				</div>

				<section className="discover-tags-container">
					<ul className="discover-tags-list">
						{gameCates.map((gameCate) => {
							return (
								<li onClick={() => {
									if (activeTagName === gameCate.name) {
										setActiveTagName('');
									} else {
										setActiveTagName(gameCate.name);
									}
								}} key={gameCate.id} className={`discover-tag-item ${activeTagName === gameCate.name && "active"}`}>
									<span className="discover-tag-item__text">{gameCate.name}</span>
								</li>
							);
						})}
					</ul>
				</section>

				{activeTab === HomeTabs.DISCOVER && (
					<section className="discover-games-container">
						<GameCardPreviewList>
							{filteredGameList.map((game) => {
								return (
									<GameCardPreviewV2
										key={game.id}
										onClick={() => navigate('/my-events/result')}
										item={game}
										type="discover-game"
									/>
								);
							})}
						</GameCardPreviewList>
					</section>
				)}

				{activeTab === HomeTabs.JOINED && (
					<section className="joined-games-container">
						<GameCardPreviewList>
							{filteredGameList.map((game) => {
								return (
									<GameCardPreviewV2 key={game.id} item={game} type="joined-game" />
								);
							})}
						</GameCardPreviewList>
					</section>
				)}
			</div>
		</Page>
	);
};

export default HomePage;
