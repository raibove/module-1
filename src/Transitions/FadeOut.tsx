import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

const TRANSITION_DURATION = 20

export const Fade: React.FC<{
  direction: 'in' | 'out';
  children: React.ReactNode;
}> = ({ direction, children }) => {
  const { durationInFrames } = useVideoConfig();
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{backgroundColor:'white'}}
    >
      <AbsoluteFill
        style={{
          opacity: interpolate(
            frame,
            direction === 'in'
              ? [0, TRANSITION_DURATION]
              : [durationInFrames - TRANSITION_DURATION, durationInFrames],
            direction === 'in' ? [0, 1] : [1, 0]
          ),
        }}
      >
        {children}
      </AbsoluteFill>
    </AbsoluteFill>
  );
};