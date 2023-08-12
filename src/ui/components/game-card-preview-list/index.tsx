import React from 'react';
import { GameCardPreview } from '../game-card-preview';

export const GameCardPreviewList = (props) => {
	return (
		<div className="game-card-preview-list">
			{props.children}
		</div>
	);
};
