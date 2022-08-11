import { useEffect } from 'react'

interface IBaseModalProps {
  title?: string
  body?: React.ReactNode
  footer?: React.ReactNode
  onClose?: () => void
}

const BaseModal = ({ title, body, footer, onClose }: IBaseModalProps) => {
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
              <span className="close mdi mdi-close" onClick={onClose}></span>
            </div>
          </div>

          <div className="modal-body">{body}</div>

          <div className="modal-footer flex justify-end gap-[16px]">
            {footer}
          </div>
        </div>
      </div>

      <style jsx scoped lang="scss">{`
        .modal-overlay {
          position: fixed;
          display: flex;
          align-items: center;
          padding: 24px 24px;
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
            max-width: 1000px;
            background-color: white;
            border-radius: 20px;

            > div {
              padding: 8px 16px;
            }

            .close {
              cursor: pointer;
            }
          }
        }
      `}</style>
    </>
  )
}

export default BaseModal
