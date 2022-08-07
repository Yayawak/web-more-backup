import React, { useCallback, useEffect, useState } from 'react'

const BackToTopButton = () => {
  const [isShow, setIsShow] = useState(false)

  const handleClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        if (!isShow) setIsShow(true)
      } else {
        setIsShow(false)
      }
    }

    if (window.scrollY > 0) {
      setIsShow(true)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <div className="back-to-top drop-shadow-lg" onClick={handleClick}>
        <span className="mdi mdi-arrow-up"></span>
      </div>

      <style jsx>{`
        .back-to-top {
          position: fixed;
          display: ${isShow ? 'flex' : 'none'};
          justify-content: center;
          align-items: center;
          right: 20px;
          bottom: 20px;
          height: 48px;
          width: 48px;
          color: white;
          font-size: 25px;
          background: #021e4a;
          border-radius: 100%;
          cursor: pointer;
          z-index: 3;
        }
      `}</style>
    </>
  )
}

export default BackToTopButton
