import {Composition} from 'remotion';
import {HelloWorld} from './HelloWorld';

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				// You can take the "id" to render a video:
				// npx remotion render src/index.ts <id> out/video.mp4
				id="HelloWorld"
				component={HelloWorld}
				durationInFrames={240}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					titleText: 'Welcome to this course on Remotion',
					titleColor: 'black',
				}}
			/>
		</>
	);
};
