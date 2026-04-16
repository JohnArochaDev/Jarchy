import { SIZE_MAP, SpinnerProps } from './Spinner.constants'

export const Spinner = ({ size = 'md', color = '#808080' }: SpinnerProps) => {
  const resolvedSize = typeof size === 'string' ? SIZE_MAP[size] : size
  const ticks = [0, 40, 80, 120, 160, 200, 240, 280, 320]

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      width={resolvedSize}
      height={resolvedSize}
    >
      <g>
        {ticks.map((deg, i) => (
          <g key={deg} transform={`rotate(${deg} 50 50)`}>
            <rect
              fill={color}
              height={10}
              width={6}
              ry={3}
              rx={3}
              y={18}
              x={47}
            >
              <animate
                repeatCount="indefinite"
                begin={`${-((ticks.length - 1 - i) / ticks.length)}s`}
                dur="1s"
                keyTimes="0;1"
                values="1;0"
                attributeName="opacity"
              />
            </rect>
          </g>
        ))}
      </g>
    </svg>
  )
}
