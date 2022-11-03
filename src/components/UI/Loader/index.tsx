import { LottieOptions, useLottie } from 'lottie-react'
import animationData from 'resources/lotties/loader.json'

const Loader: React.FC = () => {
  const options: LottieOptions = {
    animationData: animationData,
    loop: true,
  }

  const { View } = useLottie(options)

  return <>{View}</>
}

export default Loader
