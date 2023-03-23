import {Composition} from 'remotion';
import { RemotionVideo } from './Video';
// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="RemotionVideo"
				component={RemotionVideo}
				durationInFrames={4500}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};
