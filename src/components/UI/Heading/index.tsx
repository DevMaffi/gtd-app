import RootClasses from 'utils/rootClasses'
import './heading.sass'

export interface HeadingProps {
  children: React.ReactNode
  className?: string
}

const Heading: React.FC<HeadingProps> = ({ children, className }) => {
  const rootClasses = new RootClasses('heading fs-900 text-light').add({
    condition: !!className,
    type: 'extra',
    className: className ?? '',
  })

  return <h1 className={rootClasses.toClassNameString()}>{children}</h1>
}

export default Heading
