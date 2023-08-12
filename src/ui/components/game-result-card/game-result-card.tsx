import React from 'react';

export const GameResultCard = (props) => {
	return (
		<div className="game-result-card">
			<h3 className="team-name">Đội 1</h3>
			<div className="team-score">{props.team1Score}</div> :
			<div className="team-score">{props.team2Score}</div>
			<h3 className="team-name">Đội 2</h3>
		</div>
	);
};
