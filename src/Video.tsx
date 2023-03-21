import {Sequence} from 'remotion';
import { Typewriter } from './HelloWorld/Typewriter';
import {Welcome} from './Welcome';

export const RemotionVideo: React.FC = () => {
  return(
    <>
      <Sequence
				// You can take the "id" to render a video:
				// npx remotion render src/index.ts <id> out/video.mp4
				durationInFrames={200}
			>
				<Welcome titleText='Welcome to this course on Remotion' titleColor='#EA5E48'/>
			</Sequence>
      <Sequence
				// You can take the "id" to render a video:
				// npx remotion render src/index.ts <id> out/video.mp4
        from={200}
				durationInFrames={450}
			>
				<Typewriter titleText='In this course we will be exploring Remotion, a video creation tool that allows you to create videos programatically'  titleColor='#EA5E48'/>
			</Sequence>
      <Sequence
				// You can take the "id" to render a video:
				// npx remotion render src/index.ts <id> out/video.mp4
        from={650}
				durationInFrames={250}
			>
				<Typewriter titleText='With Remotion you can use your coding sills to create dnamic, interactive and visually stunning videos that engage your audience'  titleColor='#EA5E48'/>
			</Sequence>
    </>
  )
}