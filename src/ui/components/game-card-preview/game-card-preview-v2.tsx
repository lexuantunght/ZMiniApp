import React from 'react';
import { GiLevelEndFlag } from 'react-icons/gi';
import { CiLocationArrow1 } from 'react-icons/ci';
import { Avatar, Button } from 'zmp-ui';
import { GameLevels, GameTypes } from 'ui/common/constants';
import { BiTime } from 'react-icons/bi';
import { GoPerson } from 'react-icons/go';

export const GameCardPreviewV2 = (props) => {
	console.log('[mtd] props ', props);
	return (
		<div
			onClick={props.onClick}
			className="game-card-preview-v2"
			style={{ backgroundImage: `url(${GameTypes[props.item.sportId]?.bgSrc})` }}>
			<div className="game-card-preview-v2__participants">
				{props.item.players.map((p) => {
					return (
						<Avatar
							className={`game-card-preview-v2__participant ${
								p.isHost && `game-card-preview-v2__participant--host`
							}`}
							size={25}
							key={p.id}
							src={p.avatar}
						/>
					);
				})}

				<span className="game-card-preview-v2__picker"> </span>
			</div>
			<div className="game-card-preview-v2__body">
				<div className="game-card-preview-v2__game-type">{props.item.sport}</div>
				<div className="game-card-preview-v2__name">{props.item.name}</div>

				<div className="game-card-preview-v2__host-name-wrapper">
					<GoPerson />
					<div className="game-card-preview-v2__host-name">
						{props.item.players[0]?.name}
					</div>
				</div>

				<div className="game-card-preview-v2__game-levels-container">
					<GiLevelEndFlag className="game-card-preview-v2__icon" />{' '}
					<ul className="game-card-preview-v2__game-levels-list">
						<li
							className={`game-card-preview-v2__game-level ${
								props.item.level === GameLevels.BEGINNER
									? 'beginner'
									: props.item.level === GameLevels.INTER
									? 'inter'
									: 'ad'
							}`}>
							{props.item.level}
						</li>
					</ul>
				</div>
				<div className="container">
					<div>
						<div className="game-card-preview-v2__time-container">
							<BiTime />
							<div className="game-card-preview-v2__time">{props.item.startDttm}</div>
						</div>
						<div className="game-card-preview-v2__location">
							<CiLocationArrow1 className="game-card-preview-v2__icon" />{' '}
							<span className="game-card-preview-v2__location-text">
								{props.item.address}
							</span>
						</div>
					</div>
					<Button size="small" className="game-card-preview-v2__btn">
						Tham gia
					</Button>
				</div>
			</div>
		</div>
	);
};
