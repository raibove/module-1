import {Sequence, AbsoluteFill} from 'remotion';
import { Typewriter } from './HelloWorld/Typewriter';
import {Welcome} from './Welcome';
import { Lottie } from "@remotion/lottie";
import danceData from "./leavesData.json"
import { Fade } from './Transitions/FadeOut';

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
        <Fade direction='out'>
				  <Typewriter titleText='In this course we will be exploring Remotion, a video creation tool that allows you to create videos programatically'  titleColor='#EA5E48'/>
        </Fade>
			</Sequence>
      <Sequence
				// You can take the "id" to render a video:
				// npx remotion render src/index.ts <id> out/video.mp4
        from={600}
				durationInFrames={450}
			>
        <Fade direction='out'>
  				<Typewriter titleText='With Remotion you can use your coding sills to create dnamic, interactive and visually stunning videos that engage your audience'  titleColor='#EA5E48'/>
          <Sequence
            from={340}
            durationInFrames={200}
          >
            <AbsoluteFill>
              <Lottie loop animationData={danceData} />
            </AbsoluteFill>
          </Sequence>
        </Fade>
			</Sequence>
      <Sequence
        from={1050}
				durationInFrames={350}
			>
  				<Typewriter titleText='Remotion is built using React components, which makes it easy for developers to create videos quickly and efficiently.'  titleColor='#EA5E48'/>
			</Sequence>
      <Sequence
        from={1400}
				durationInFrames={250}
			>
				<Typewriter titleText='Instead of using other video editing softwares which can be difficult to learn & use.'  titleColor='#EA5E48'/>
			</Sequence>
    </>
  )
}