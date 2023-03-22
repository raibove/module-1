import { AbsoluteFill } from "remotion"

export const Heading: React.FC<{titleText: string, textColor: string, backgroundColor: string, fontSize: string}> = ({titleText, textColor, backgroundColor, fontSize})=>{
  return(
    <>
      <AbsoluteFill
        style={{
          backgroundColor,
          justifyContent: 'center',
          textAlign: 'center',
          fontSize,
          padding:'60px',
          color: textColor
        }}
      >
        <p>{titleText}</p>
      </AbsoluteFill>
    </>
  )
}