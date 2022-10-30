import { FC, useEffect, useCallback, useRef } from 'react'
import { motion } from 'framer-motion'
import { css } from '@emotion/react'

interface IBaseModalProps {
  title?: string
  body?: React.ReactNode
  footer?: React.ReactNode
  onClose?: () => void
}

const modalVariants = {
  initial: {
    opacity: 0,
    transform: 'translateY(-30px)',
  },
  animate: {
    opacity: 1,
    transform: 'translateY(0px)',
  },
  exit: {
    opacity: 0,
    transform: 'translateY(30px)',
  },
}

const BaseModal: FC<IBaseModalProps> = ({
  title,
  body,
  footer,
  onClose,
}: IBaseModalProps) => {
  const overlay = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'unset'
    }
  })

  const handleOverlayClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (overlay && e.target === overlay.current && onClose) {
        onClose()
      }
    },
    []
  )

  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
        css={css`
          padding: 24px 24px;
          background-color: rgba(0, 0, 0, 0.8);
        `}
        className="modal-overlay fixed top-0 left-0 z-[1000] flex h-full w-full items-center overflow-auto"
        ref={overlay}
        onClick={handleOverlayClick}
      >
        <motion.div
          css={css`
            > div {
              padding: 8px 16px;
            }
          `}
          variants={modalVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="modal relative m-auto w-full max-w-[800px] rounded-[20px] bg-white"
        >
          <div className="modal-title flex items-center">
            <div>{title}</div>

            <div className="ml-auto">
              <span
                className="close mdi mdi-close cursor-pointer"
                onClick={onClose}
              ></span>
            </div>
          </div>

          <div className="modal-body">{body}</div>

          <div className="modal-footer flex justify-end gap-[16px]">
            {footer}
          </div>
        </motion.div>
      </motion.div>
    </>
  )
}

export default BaseModal
