import { useState } from '@storybook/addons'
import React, { useEffect } from 'react'

interface ICopyButtonProps {
  text: string
}
const CopyButton = ({ text }: ICopyButtonProps) => {
  //   const [open, setOpen] = useState(false)

  useEffect(() => {}, [text])

  const handleClick = (copyText) => {
    navigator.clipboard.writeText(copyText)
    window.alert(`Copied ${copyText} to Clipboard`)
  }

  return (
    <>
      <div className="copy-button" onClick={(e) => handleClick(text)}>
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
