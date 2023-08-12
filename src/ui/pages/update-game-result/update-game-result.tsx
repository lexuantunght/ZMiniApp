import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Box, Input, Page, Button } from 'zmp-ui';

export const UpdateGameResult = (props) => {
	const { gameId } = useParams();
	const [gameInfo, setGameInfo] = useState({ name: 'Chơi bóng chuyền với chúng mình nhé!', src: 'https://daily.jstor.org/wp-content/uploads/2018/06/soccer_europe_1050x700.jpg' });
	const [team1Score, setTeam1Score] = useState('');
	const [team2Score, setTeam2Score] = useState('');

	useEffect(() => {
		if (gameId) {
			//TODO: fetch gameInfo at here.
		}
	}, [gameId]);

	console.log('gameId: ', gameId);

	const saveGameResult = () => {
		//TODO: gửi lên server, then -> bắn kết quả lên discuss.
		console.log(team1Score, team2Score);
	};

	return (
		<Page>
			<div className="update-game-result-container">
				<h3 className="game-name" style={{backgroundImage: `url(${gameInfo.src})`}}> Tên trận đấu: {gameInfo && gameInfo.name}</h3>
				<h4 className="game-time"> Thời gian: {gameInfo.time} </h4>
				<h4 className="game-mem-num">
					{' '}
					Số lượng thành viên: {gameInfo.participants?.length}{' '}
				</h4>

				<h4 className="title">Kết quả trận đấu</h4>
				<div className="game-board-result">
					<div className="game-board-item">
						<div className="team-name">Đội 1</div>
						<Input.TextArea
							value={team1Score}
							onChange={(e) => setTeam1Score(e.target.value)}
							className="team-score"
						/>
					</div>
					<span className="separator">:</span>
					<div className="game-board-item">
						<Input.TextArea
							value={team2Score}
							onChange={(e) => setTeam2Score(e.target.value)}
							className="team-score"
						/>
						<div className="team-name">Đội 2</div>
					</div>
				</div>

				<Button onClick={saveGameResult} className="w-full">
					Lưu lại
				</Button>
			</div>
		</Page>
	);
};
