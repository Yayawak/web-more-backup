import React from 'react'

export interface IComponentProps {
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

export type CustomProps<T> = IComponentProps & T
