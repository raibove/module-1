import { Gif } from "@remotion/gif";
import { useVideoConfig, AbsoluteFill } from "remotion";
import flipbook from "../flipbook.gif";

export const MediaHeading: React.FC = ()=>{
  
  const { width, height } = useVideoConfig();
  const mediaHeight = height/2;

  return(
    <AbsoluteFill
      style={{backgroundColor: 'white'}}
    >
      <AbsoluteFill
        style={{
          fontWeight: 450,
          fontSize:'70px',
          textAlign: 'center'
        }}
      >
        <p>A video is simply a collection of frame that are presented sequentially over time.</p>
      </AbsoluteFill>
      <AbsoluteFill
        style={{
          justifyContent: 'center',
          padding: width/4
        }}
      >
        <Gif
          src={flipbook}
          height={mediaHeight}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  )
}