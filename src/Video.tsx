import {Sequence} from 'remotion';
import {Welcome} from './Welcome';

export const RemotionVideo: React.FC = () => {
  return(
    <>
      <Sequence
				// You can take the "id" to render a video:
				// npx remotion render src/index.ts <id> out/video.mp4
				durationInFrames={210}
			>
				<Welcome titleText='Welcome to this course on Remotion' titleColor='#EA5E48'/>
			</Sequence>
      <Sequence
				// You can take the "id" to render a video:
				// npx remotion render src/index.ts <id> out/video.mp4
        from={210}
				durationInFrames={450}
			>
				<Welcome titleText='Welcome to this course on Remotion' titleColor='#EA5E48'/>
			</Sequence>
    </>
  )
}