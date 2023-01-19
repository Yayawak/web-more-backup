import React from 'react'

interface ICopyButtonProps {
  text: string
}
const CopyButton = ({ text }: ICopyButtonProps) => {
  const handleClick = () => {
    navigator.clipboard.writeText(text)
    window.alert(`Copied ${text} to Clipboard`)
  }

  return (
    <>
      <div className="copy-button" onClick={handleClick}>
        <span className="mdi mdi-content-copy"></span>
      </div>

      <style jsx scoped>{`
        .copy-button {
          color: grey;
          margin: 4px;
          font-size: 16px;
          cursor: pointer;
        }
      `}</style>
    </>
  )
}

export default CopyButton
