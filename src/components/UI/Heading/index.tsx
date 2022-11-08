import classNames from 'classnames'
import './heading.sass'

export interface HeadingProps {
  children: React.ReactNode
  className?: string
}

const Heading: React.FC<HeadingProps> = ({ children, className }) => {
  const headingClasses = classNames(
    'heading',
    'fs-900',
    'text-light',
    className
  )

  return <h1 className={headingClasses}>{children}</h1>
}

export default Heading
