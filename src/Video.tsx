import {Sequence, AbsoluteFill} from 'remotion';
import { Typewriter } from './HelloWorld/Typewriter';
import {Welcome} from './Welcome';
import { Lottie } from "@remotion/lottie";
import danceData from "./leavesData.json";
import { Fade } from './Transitions/FadeOut';
import { SlideIn } from './Transitions/SlideIn';
import { Heading } from './HelloWorld/Heading';
import { MediaHeading } from './HelloWorld/MediaHeading';

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
  				<Typewriter titleText='With Remotion you can use your coding skills to create dnamic, interactive and visually stunning videos that engage your audience'  titleColor='#EA5E48'/>
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
				durationInFrames={300}
			>
  				<Typewriter titleText='Remotion is built using React components, which makes it easy for developers to create videos quickly and efficiently.'  titleColor='#EA5E48'/>
			</Sequence>
      <Sequence
        from={1350}
				durationInFrames={250}
			>
				<Typewriter titleText='Instead of using other video editing softwares which can be difficult to learn & use.'  titleColor='#EA5E48'/>
			</Sequence>

			<Sequence 
				from={1600}
				durationInFrames={100}
			>
				<SlideIn>
					<Heading titleText='Why to use Remotion?' textColor='white' backgroundColor='#0b84f3' fontSize='150px'/>
				</SlideIn>
			</Sequence>
			<Sequence 
				from={1700}
				durationInFrames={300}
			>
				<Fade direction='out'>
					<SlideIn>
						<Heading titleText='Remotion allows developers to create videos with skills that they are already familiar with.' textColor='#0b84f3' backgroundColor='white' fontSize='110px'/>
					</SlideIn>
				</Fade>
			</Sequence>
			<Sequence 
				from={2000}
				durationInFrames={300}
			>
				<Fade direction='out'>
					<SlideIn>
						<Heading titleText='One of the best thing about remotion is its flexibility. With Remotion you have control over the video, animation, transition and even audio' textColor='#0b84f3' backgroundColor='white' fontSize='110px'/>
					</SlideIn>
				</Fade>
			</Sequence>
			<Sequence 
				from={2300}
				durationInFrames={300}
			>
				<Fade direction='out'>
					<SlideIn>
						<Heading titleText='Remotion enables easy customization of videos through dynamic parameterization. This results in adaptable videos that can be tailored to suit different audiences or purposes.' textColor='#0b84f3' backgroundColor='white' fontSize='110px'/>
					</SlideIn>
				</Fade>
			</Sequence>
			<Sequence 
				from={2600}
				durationInFrames={300}
			>
				<Fade direction='out'>
				<SlideIn>
					<Heading titleText='Remotion allows creating reusable components, which means the same component can be used across multiple projects without rewriting the code.' textColor='#0b84f3' backgroundColor='white' fontSize='110px'/>
				</SlideIn>
				</Fade>
			</Sequence>
			<Sequence 
				from={2900}
				durationInFrames={300}
			>
				<Fade direction='out'>
				<SlideIn>
					<Heading titleText='Remotion also offers templates that can help you to get started easily.' textColor='#0b84f3' backgroundColor='white' fontSize='110px'/>
				</SlideIn>
				</Fade>
			</Sequence>
			<Sequence 
				from={3200}
				durationInFrames={300}
			>
				<Fade direction='out'>
				<SlideIn>
					<Heading titleText='With Remotion you can easily integrate other animation libraries, and create complex animation without having to start from scratch.' textColor='#0b84f3' backgroundColor='white' fontSize='110px'/>
				</SlideIn>
				</Fade>
			</Sequence>
			<Sequence 
				from={3500}
				durationInFrames={150}
			>
				<Fade direction='out'>
				<SlideIn>
					<Heading titleText='How does Remotion work?' textColor='white' backgroundColor='#0b84f3' fontSize='110px'/>
				</SlideIn>
				</Fade>
			</Sequence>
			<Sequence
				from={3650}
				durationInFrames={300}
				>
					<MediaHeading />
			</Sequence>
    </>
  )
}