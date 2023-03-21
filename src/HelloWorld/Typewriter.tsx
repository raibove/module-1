import { AbsoluteFill, useCurrentFrame } from "remotion";
import { loadFont } from "@remotion/google-fonts/Merienda";
import React from "react";
const { fontFamily } = loadFont();

export const Typewriter: React.FC<{titleText:string, titleColor: string}> = ({titleText, titleColor}) => {

	const frame = useCurrentFrame();
	const charShown = Math.floor(frame/2.5)

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