import React from 'react'

declare interface IComponentProps {
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

declare type CustomProps<T> = IComponentProps & T
