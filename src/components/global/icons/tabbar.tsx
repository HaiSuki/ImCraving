import {Path, Svg, G, Defs, ClipPath, Rect} from 'react-native-svg';

export function HomeIcon({
  color,
  focused,
  size,
}: {
  color: string;
  focused: boolean;
  size: number;
}) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Defs>
        <ClipPath id="clip0_1384_727">
          <Rect width="20" height="20" fill="white" />
        </ClipPath>
      </Defs>
      <G clipPath="url(#clip0_1384_727)">
        <Path
          d="M1 9.30102V18C1 18.5523 1.44771 19 2 19H6.17143C6.72371 19 7.17143 18.5523 7.17143 18V12.1538C7.17143 11.6016 7.61914 11.1538 8.17143 11.1538H11.8286C12.3809 11.1538 12.8286 11.6016 12.8286 12.1538V18C12.8286 18.5523 13.2763 19 13.8286 19H18C18.5523 19 19 18.5523 19 18V9.30102C19 9.01202 18.875 8.73716 18.6571 8.54725L10.6571 1.57289C10.2806 1.24458 9.71945 1.24458 9.34287 1.57289L1.34286 8.54725C1.12503 8.73716 1 9.01202 1 9.30102Z"
          fill={color}
          stroke={color}
        />
      </G>
    </Svg>
  );
}
