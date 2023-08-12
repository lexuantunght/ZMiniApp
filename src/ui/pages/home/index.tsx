import React, { useState } from 'react';
import useLang from 'utils/hooks/use-lang';
import { Input, Page } from 'zmp-ui';
import { LiaVolleyballBallSolid } from 'react-icons/lia';
import { PiSoccerBall } from 'react-icons/pi';
import { MdOutlineSportsTennis, MdOutlineSportsCricket } from 'react-icons/md';
import { GameLevels, GameTypes, HomeTabs } from 'ui/common/constants';
import { GameCardPreviewList } from 'ui/components/game-card-preview-list';
import { GameCardPreview } from 'ui/components/game-card-preview';
// import { FaPersonSwimming } from 'react-icons/fa';

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

const gameList = [
	{
		id: '1',
		gameName: 'Chơi cùng chúng mình nhé!',
		time: '05:00, 10/08/2023',
		bgSrc: GameTypes.BADMINTON.bgSrc,
		gameType: GameTypes.BADMINTON.name,
		gameLevels: [GameLevels.BEGINNER, GameLevels.INTER, GameLevels.ADVANCED],
		location: 'VNG Campus, Tan Thuan, KCN trong KCX, quan 7, Ho Chi Minh',
		participants: [
			{
				id: '1',
				avatar: 'https://s120-ava-talk.zadn.vn/1/d/c/a/20/120/a227b4c5c98c95319111257af9a9610a.jpg',
				isHost: true,
			},
			{
				id: '2',
				avatar: 'https://s120-ava-talk.zadn.vn/1/d/c/a/20/120/a227b4c5c98c95319111257af9a9610a.jpg',
				isHost: false,
			},
			{
				id: '3',
				avatar: 'https://s120-ava-talk.zadn.vn/1/d/c/a/20/120/a227b4c5c98c95319111257af9a9610a.jpg',
				isHost: false,
			},
		],
	},
	{
		id: '2',
		gameName: 'Chơi cùng chúng mình nhé!',
		time: '05:00, 10/08/2023',
		bgSrc: GameTypes.SOCCER.bgSrc,
		gameType: GameTypes.SOCCER.name,
		gameLevels: [GameLevels.INTER, GameLevels.ADVANCED],
		location: 'VNG Campus, Tan Thuan, KCN trong KCX, quan 7, Ho Chi Minh',
		participants: [],
	},
	{
		id: '3',
		gameName: 'Chơi cùng chúng mình nhé!',
		time: '05:00, 10/08/2023',
		bgSrc: GameTypes.SOCCER.bgSrc,
		gameType: GameTypes.SOCCER.name,
		gameLevels: [GameLevels.INTER, GameLevels.ADVANCED],
		location: 'VNG Campus, Tan Thuan, KCN trong KCX, quan 7, Ho Chi Minh',
		participants: [],
	},
	{
		id: '4',
		gameName: 'Chơi cùng chúng mình nhé!',
		time: '05:00, 10/08/2023',
		bgSrc: GameTypes.SOCCER.bgSrc,
		gameType: GameTypes.SOCCER.name,
		gameLevels: [GameLevels.INTER, GameLevels.ADVANCED],
		location: 'VNG Campus, Tan Thuan, KCN trong KCX, quan 7, Ho Chi Minh',
		participants: [],
	},
	{
		id: '5',
		gameName: 'Chơi cùng chúng mình nhé!',
		time: '05:00, 10/08/2023',
		bgSrc: GameTypes.SOCCER.bgSrc,
		gameType: GameTypes.SOCCER.name,
		gameLevels: [GameLevels.INTER, GameLevels.ADVANCED],
		location: 'VNG Campus, Tan Thuan, KCN trong KCX, quan 7, Ho Chi Minh',
		participants: [],
	},
];

const HomePage = () => {
	const [isLoading, setLoading] = useState(false);
	const { t } = useLang();

	const [activeTab, setActiveTab] = useState(HomeTabs.DISCOVER);

	//TODO: filter by which...
	//We get from results -> and display...

	return (
		<Page>
			<div className="home-container">
				{/* <div className="home-header">
					<Input.Search
						className="search"
						placeholder={`${t('STR_SEARCH_PLACE_HOLDER')}...`}
						loading={isLoading}
						onSearch={(text) => console.log('[mtd] text: ', text)}
					/>
				</div> */}
				{/* <section className="discover-tags-container">
					<ul className="discover-tags-list">
						{tags.map((tag) => {
							return (
								<li key={tag.name} className="discover-tag-item">
									{tag.icon}
									<span className="discover-tag-item__text">{tag.name}</span>
								</li>
							);
						})}
					</ul>
				</section> */}
				<div className="home-tabs-container">
					<span
						className={`home-tab ${HomeTabs.DISCOVER === activeTab && 'active'}`}
						onClick={() => {
							setActiveTab(HomeTabs.DISCOVER);
						}}>
						Khám phá
					</span>
					<span
						className={`home-tab ${HomeTabs.JOINED === activeTab && 'active'}`}
						onClick={() => {
							setActiveTab(HomeTabs.JOINED);
						}}>
						Đã tham gia
					</span>
				</div>

				{activeTab === HomeTabs.DISCOVER && (
					<section className="discover-games-container">
						<GameCardPreviewList>
							{gameList.map((game) => {
								return <GameCardPreview key={game.id} item={game} type="discover-game" />;
							})}
						</GameCardPreviewList>
					</section>
				)}

				{activeTab === HomeTabs.JOINED && (
					<section className="joined-games-container">
						<GameCardPreviewList>
							{gameList.map((game) => {
								return <GameCardPreview key={game.id} item={game} type="joined-game" />;
							})}
						</GameCardPreviewList>
					</section>
				)}
			</div>
		</Page>
	);
};

export default HomePage;
