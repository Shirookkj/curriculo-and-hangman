import Svg, { Circle, Line } from "react-native-svg";

const BODY_PARTS = [
  <Circle key="head" cx="210" cy="90" r="20" />,
  <Line key="body" x1="210" y1="110" x2="210" y2="170" />,
  <Line key="arm1" x1="210" y1="130" x2="180" y2="160" />,
  <Line key="arm2" x1="210" y1="130" x2="240" y2="160" />,
  <Line key="leg1" x1="210" y1="170" x2="180" y2="200" />,
  <Line key="leg2" x1="210" y1="170" x2="240" y2="200" />,
];

export default function HangmanFigure({ numberOfMistakes }) {
  return (
    <Svg
      height="250"
      width="250"
      stroke="#34495e"
      strokeWidth="4"
      fill="none"
      strokeLinecap="round"
    >
      <Line x1="60" y1="230" x2="140" y2="230" />
      <Line x1="100" y1="230" x2="100" y2="50" />
      <Line x1="100" y1="50" x2="210" y2="50" />
      <Line x1="210" y1="50" x2="210" y2="70" />
      {BODY_PARTS.slice(0, numberOfMistakes)}
    </Svg>
  );
}
