import { LottieOptions, useLottie } from 'lottie-react'
import animationData from 'resources/lotties/loader.json'
import './loader.sass'

export interface LoaderProps {
  size?: string | number
}

export interface LoaderContainerProps extends LoaderProps {
  isActive: boolean
}

const Loader: React.FC<LoaderProps> = ({ size }) => {
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

const LoaderContainer: React.FC<LoaderContainerProps> = ({
  isActive,
  size = 150,
}) => {
  return (
    <>
      {isActive && (
        <div className="loader flex">
          <Loader size={size} />
        </div>
      )}
    </>
  )
}

export default LoaderContainer
