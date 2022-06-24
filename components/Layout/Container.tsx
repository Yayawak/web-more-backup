import { useMemo } from 'react'

interface IContainerProps {
  fluid?: boolean
  children?: React.ReactNode
  className?: string
}

const Container = ({
  fluid = false,
  children,
  className = '',
}: IContainerProps) => {
  const getMaxWidth = useMemo(() => (fluid ? 'unset' : '1200px'), [fluid])
  return (
    <>
      <div className={`container ${className}`}>{children}</div>

      <style jsx>{`
        .container {
          margin: auto;
          max-width: ${getMaxWidth};
        }
      `}</style>
    </>
  )
}

export default Container
