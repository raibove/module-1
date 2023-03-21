import {spring} from 'remotion';
import {
	AbsoluteFill,
	interpolate,
	Sequence,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import { Lottie } from "@remotion/lottie";
import helloData from './animationData.json';
import {Title} from './HelloWorld/Title';

export const HelloWorld: React.FC<{
	titleText: string;
	titleColor: string;
}> = ({titleText, titleColor}) => {
	const frame = useCurrentFrame();
	const {durationInFrames, fps, height} = useVideoConfig();

	
	// Animate from 0 to 1 after 25 frames
	const logoTranslationProgress = spring({
		frame,
		fps,
		config: {
			damping: 100,
		},
	});

	// Move the logo up by 150 pixels once the transition starts
	const logoTranslation = interpolate(
		logoTranslationProgress,
		[0, 1],
		[0, -height/3]
	);

	const logoTranslationProgressAfter = spring({
		frame: frame-60,
		fps,
		config: {
			damping: 100,
		},
	});

	// Move the logo up by 150 pixels once the transition starts
	const logoTranslationAfter = interpolate(
		logoTranslationProgressAfter,
		[0, 1],
		[0, -height/4]
	);

	const introTranslation = interpolate(
		spring({
			frame: frame - 90, 
			fps,
			config: {
				damping:200
			}}),
			[0,1],
			[0, height/2.5]
	)

	// Fade out the animation at the end
	const opacity = interpolate(
		frame,
		[durationInFrames - 25, durationInFrames - 15],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	// A <AbsoluteFill> is just a absolutely positioned <div>!
	return (
		<AbsoluteFill style={{backgroundColor: 'white'}}>
			<AbsoluteFill style={{opacity}}>
				<AbsoluteFill style={{transform:`translateY(${logoTranslationAfter}px)`}}>
					<AbsoluteFill style={{transform:`translateY(${logoTranslation}px)`}}>
						<Lottie animationData={helloData} />
					</AbsoluteFill>
				</AbsoluteFill>
				{/* Sequences can shift the time for its children! */}
				<Sequence from={90}>
					<AbsoluteFill style={{transform: `translateY(${introTranslation}px)`}}>
						<Title titleText={titleText} titleColor={titleColor} />
					</AbsoluteFill>
				</Sequence>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
