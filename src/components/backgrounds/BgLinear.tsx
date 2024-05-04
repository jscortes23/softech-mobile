import { LinearGradient } from 'expo-linear-gradient'

interface BgLinearProps {
  color: string[]
  start: { x: number; y: number }
  end: { x: number; y: number }
  children: React.ReactNode
}

export const BgLinear: React.FC<BgLinearProps> = (props) => {
  const { color, start, end, children } = props
  return (
    <LinearGradient colors={color} start={start} end={end}>
      {children}
    </LinearGradient>
  )
}
