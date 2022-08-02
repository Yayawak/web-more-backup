import { CustomProps } from '@/types/component-props'
import { useEffect } from 'react'

interface IBaseModalProps {
  title?: string
  body?: React.ReactNode
  footer?: React.ReactNode
}

const BaseModal = ({ title, body, footer }: IBaseModalProps) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'unset'
    }
  })

  return (
    <>
      <div className="modal-overlay">
        <div className="modal">
          <div className="modal-title flex items-center">
            <div>{title}</div>
            <div className="ml-auto">
              <span className="mdi mdi-close"></span>
            </div>
          </div>

          <div className="modal-body">{body}</div>

          <div className="modal-footer flex justify-end">{footer}</div>
        </div>
      </div>

      <style jsx scoped lang="scss">{`
        .modal-overlay {
          position: fixed;
          display: flex;
          align-items: center;
          padding: 24px 0;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.8);
          z-index: 1000;
          overflow: auto;

          .modal {
            position: relative;
            margin: auto;
            width: 100%;
            max-width: 600px;
            background-color: white;
            border-radius: 8px;

            > div {
              padding: 8px 16px;
            }
          }
        }
      `}</style>
    </>
  )
}

export default BaseModal
