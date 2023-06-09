import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {loadFont} from '@remotion/google-fonts/Mynerve';

const {fontFamily} = loadFont();

const title: React.CSSProperties = {
	fontFamily,
	lineHeight: 1.5,
	fontSize: '150px',
	textAlign:'center',
	padding:'0 10vw'
};

const word: React.CSSProperties = {
	marginLeft: 35,
	marginRight: 35,
	display: 'inline-block',
};

export const Title: React.FC<{
	titleText: string;
	titleColor: string;
}> = ({titleText, titleColor}) => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();

	const words = titleText.split(' ');

	return (
		<h1 style={title}>
			{words.map((t, i) => {
				const delay = i * 5;

				const scale = spring({
					fps: videoConfig.fps,
					frame: frame - delay,
					config: {
						damping: 200,
					},
				});

				return (
					<span
						key={t}
						style={{
							...word,
							color: titleColor,
							transform: `scale(${scale})`,
						}}
					>
						{t}
					</span>
				);
			})}
		</h1>
	);
};
