import { CustomProps } from '@/@types/component-props'
import { useMemo } from 'react'

interface IContainerProps {
  fluid?: boolean
  noPadding?: boolean
}

type Props = CustomProps<IContainerProps>

const Container = ({
  fluid = false,
  children,
  className = '',
  style = {},
  noPadding = false,
}: Props) => {
  const getMaxWidth = useMemo(() => (fluid ? 'unset' : '1200px'), [fluid])
  return (
    <>
      <div className={`container relative mx-auto ${className}`} style={style}>
        {children}
      </div>

      <style jsx>{`
        .container {
          max-width: ${getMaxWidth};
          padding-left: ${noPadding ? 0 : 8}px;
          padding-right: ${noPadding ? 0 : 8}px;
        }
      `}</style>
    </>
  )
}

export default Container
