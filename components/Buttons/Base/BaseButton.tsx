import { Rounded } from '@/types/rounded'
import { useCallback } from 'react'

interface IBaseButtonProps {
  roundedType: Rounded
  rounded: number
  elevation: boolean
  children: React.ReactNode
  backgroundColor: string
  textColor: string
}

const BaseButton = ({
  roundedType = Rounded.NONE,
  rounded = 0,
  elevation = true,
  backgroundColor = '#0A17A7',
  textColor = 'white',
  children,
}: IBaseButtonProps) => {
  const getRound = useCallback(() => {
    if (roundedType === Rounded.NONE) {
      return 0
    } else if (roundedType === Rounded.FULL) {
      return 9999
    } else {
      return rounded
    }
  }, [roundedType, rounded])

  return (
    <>
      <button
        className={`base-button flex justify-center items-center ${
          elevation && 'drop-shadow-lg'
        } py-[8px] px-[16px]`}
      >
        {children}
      </button>

      <style jsx>{`
        .base-button {
          color: ${textColor};
          text-transform: uppercase;
          background-color: ${backgroundColor};
          border-radius: ${getRound()}px;
        }
      `}</style>
    </>
  )
}

export default BaseButton
