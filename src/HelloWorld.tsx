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
import {Subtitle} from './HelloWorld/Subtitle';
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

	const logoTranslationProgress1 = spring({
		frame: frame-60,
		fps,
		config: {
			damping: 100,
		},
	});

	// Move the logo up by 150 pixels once the transition starts
	const logoTranslation1 = interpolate(
		logoTranslationProgress1,
		[0, 1],
		[0, -height/4]
	);

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
				<AbsoluteFill style={{transform:`translateY(${logoTranslation1}px)`}}>
				<AbsoluteFill style={{transform:`translateY(${logoTranslation}px)`}}>
				<Lottie animationData={helloData} />
				</AbsoluteFill>
				</AbsoluteFill>
				{/* Sequences can shift the time for its children! */}
				<Sequence from={65}>
					<Title titleText={titleText} titleColor={titleColor} />
				</Sequence>
				{/* The subtitle will only enter on the 75th frame. */}
				<Sequence from={75}>
					<Subtitle />
				</Sequence>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
