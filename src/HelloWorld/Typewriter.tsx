import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { loadFont } from "@remotion/google-fonts/Merienda";
import React from "react";
const { fontFamily } = loadFont();

export const Typewriter: React.FC<{titleText:string, titleColor: string}> = ({titleText, titleColor}) => {

	const frame = useCurrentFrame();
	const {durationInFrames} = useVideoConfig()
	const charShown = Math.floor(frame/2.5)
  const delay = (durationInFrames - 55) / titleText.length;

  // Calculate the index of the current character to display
  // const index = Math.min(Math.floor(frame / delay), titleText.length);
  const index = Math.floor(frame/charShown)
	const titleTextShown = titleText.slice(0, charShown);

	return <AbsoluteFill
	style={{
		backgroundColor: 'white',
    textAlign:'center',
    justifyContent: 'center',
		padding: '65px'
	}}>
		<div
		style={{
			fontFamily,
			fontSize: '100px',
      color: titleColor
		}}>
			{titleTextShown}
		</div>
	</AbsoluteFill>;
};