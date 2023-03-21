import {Sequence, AbsoluteFill} from 'remotion';
import { Typewriter } from './HelloWorld/Typewriter';
import {Welcome} from './Welcome';
import { Lottie } from "@remotion/lottie";
import danceData from "./leavesData.json"

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
				durationInFrames={400}
			>
				<Typewriter titleText='In this course we will be exploring Remotion, a video creation tool that allows you to create videos programatically'  titleColor='#EA5E48'/>
			</Sequence>
      <Sequence
				// You can take the "id" to render a video:
				// npx remotion render src/index.ts <id> out/video.mp4
        from={600}
				durationInFrames={480}
			>
				<Typewriter titleText='With Remotion you can use your coding sills to create dnamic, interactive and visually stunning videos that engage your audience'  titleColor='#EA5E48'/>
        <Sequence
          from={350}
          durationInFrames={200}
        >
          <AbsoluteFill>
						<Lottie loop animationData={danceData} />
          </AbsoluteFill>
        </Sequence>
			</Sequence>
      <Sequence
        from={1080}
				durationInFrames={550}
			>
				<Typewriter titleText='Remotion is built using React components, which makes it easy for developers to create videos quickly and efficiently. Instead of using other video editing softwares which can be difficult to learn & use.'  titleColor='#EA5E48'/>
			</Sequence>
    </>
  )
}