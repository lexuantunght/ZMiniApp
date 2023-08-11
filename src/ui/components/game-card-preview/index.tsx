import React from 'react';
import { GiLevelEndFlag } from 'react-icons/gi';
import { CiLocationArrow1 } from 'react-icons/ci';
import { Avatar } from 'zmp-ui';
import { GameLevels } from 'ui/common/constants';

export const GameCardPreview = (props) => {
	console.log(props);
	return (
		<div className="game-card-preview">
			<div
				className="game-card-preview__header"
				style={{ backgroundImage: `url(${props.item.bgSrc})` }}>
				<div className="game-card-preview__name">{props.item.gameName}</div>
				<div className="game-card-preview__time">{props.item.time}</div>
				<div className="game-card-preview__game-type">{props.item.gameType}</div>
			</div>
			<div className="game-card-preview__body">
				<div className="game-card-preview__participants">
					{props.item.participants.map((p) => {
						return (
							<Avatar
								className={`game-card-preview__participant ${
									p.isHost && `game-card-preview__participant--host`
								}`}
								size={25}
								key={p.id}
								src={p.avatar}
							/>
						);
					})}

					<span className="game-card-preview__picker"> </span>
				</div>
				<div className="game-card-preview__game-levels-container">
					<GiLevelEndFlag className="game-card-preview__icon" />{' '}
					<ul className="game-card-preview__game-levels-list">
						{props.item.gameLevels.map((gameLevel) => {
							return (
								<li
									className={`game-card-preview__game-level ${
										gameLevel === GameLevels.BEGINNER
											? 'beginner'
											: gameLevel === GameLevels.INTER
											? 'inter'
											: 'ad'
									}`}>
									{gameLevel}
								</li>
							);
						})}
					</ul>
				</div>
				<div className="game-card-preview__location">
					<CiLocationArrow1 className="game-card-preview__icon" />{' '}
					<span className="game-card-preview__location-text">{props.item.location}</span>
				</div>
			</div>
		</div>
	);
};
