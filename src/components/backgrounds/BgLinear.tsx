import { LinearGradient } from 'expo-linear-gradient'

interface BgLinearProps {
  color: string[]
  start: { x: number; y: number }
  end: { x: number; y: number }
  children: React.ReactNode
  style?: object
}

export const BgLinear: React.FC<BgLinearProps> = (props) => {
  const { color, start, end, children, style } = props
  return (
    <LinearGradient style={style} colors={color} start={start} end={end}>
      {children}
    </LinearGradient>
  )
}
