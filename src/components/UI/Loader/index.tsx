import { LottieOptions, useLottie } from 'lottie-react'
import animationData from 'resources/lotties/loader.json'

export interface LoaderProps {
  size?: string | number
}

const Loader: React.FC<LoaderProps> = ({ size = 150 }) => {
  const options: LottieOptions = {
    animationData: animationData,
    loop: true,
  }

  const { View } = useLottie(options)

  return (
    <div
      style={{
        width: size,
      }}
    >
      {View}
    </div>
  )
}

export default Loader
