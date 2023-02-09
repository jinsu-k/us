import {
  CircleProgressBarContainer,
  CircleProgressBarInFrame,
  CircleProgressFrame,
  CircleProgressValue,
} from './ProgressBarStyle';

type CircleProgressBarProps = {
  percent: number;
};

const RADIUS = 20;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function CircleProgressBar({ percent }: CircleProgressBarProps) {
  const progress = percent / 100;
  const dashOffSet = CIRCUMFERENCE * (1 - progress);

  return (
    <>
      <CircleProgressBarContainer width={80} height={80} viewBox="0 0 80 80">
        <CircleProgressFrame cx={30} cy={30} r={RADIUS} />
        <CircleProgressBarInFrame
          cx={30}
          cy={30}
          r={RADIUS}
          dashArray={CIRCUMFERENCE}
          dashOffSet={dashOffSet}
        />
      </CircleProgressBarContainer>
      <CircleProgressValue className="count_target">{percent}%</CircleProgressValue>
    </>
  );
}
