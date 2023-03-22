import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

const TRANSITION_DURATION = 50;

export const SlideIn: React.FC<{
  direction?: 'left' | 'right';
  children: React.ReactNode;
}> = ({ direction, children }) => {
  const { fps, width } = useVideoConfig();
  const frame = useCurrentFrame();

  const spr = spring({
    fps,
    frame,
    config: { damping: 200 },
    durationInFrames: TRANSITION_DURATION,
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: 'white'
      }}
    >
    <AbsoluteFill
      style={{
        transform: `translateX(${interpolate(
          spr,
          [0, 1],
          [direction === 'right' ? -width : width, 0]
        )}px)`,
      }}
    >
      {children}
    </AbsoluteFill>
  </AbsoluteFill>
)}