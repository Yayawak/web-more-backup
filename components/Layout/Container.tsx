import { useMemo } from 'react'

interface IContainerProps {
  fluid?: boolean
  children?: React.ReactNode
}

const Container = ({ fluid = false, children }: IContainerProps) => {
  const getMaxWidth = useMemo(() => (fluid ? 'unset' : '1200px'), [fluid])
  return (
    <>
      <div className="container">{children}</div>

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
