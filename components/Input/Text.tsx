import { CustomProps } from '@/types/component-props'
import React, { FC } from 'react'

interface IInputTextProps {
  value?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

const InputText: FC<CustomProps<IInputTextProps>> = ({
  className,
  style,
  value,
  onChange,
}) => {
  return (
    <>
      <input
        value={value}
        onChange={onChange}
        className={`w-full border-[1px] border-black outline-none px-[8px] rounded-[8px] ${className}`}
        style={style}
      />
    </>
  )
}

export default InputText
