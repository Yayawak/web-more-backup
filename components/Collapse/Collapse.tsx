import { useState, useEffect, useCallback } from 'react'

interface ICollapseProps {
  title: string
  children?: React.ReactNode
}

const Collapse = ({ title, children }: ICollapseProps) => {
  const [expand, setExpand] = useState(false)

  const handleClick = () => {
    setExpand(!expand)
  }

  return (
    <>
      <div className="header" onClick={handleClick}>
        <div className="text-[20px] font-bold">{title}</div>
        {expand ? (
          <span className="mdi mdi-chevron-up"></span>
        ) : (
          <span className="mdi mdi-chevron-down"></span>
        )}
      </div>
      {expand && (
        <>
          <div className="content">{children}</div>
          {/* <div className="rainbow"></div> */}
        </>
      )}

      <style jsx scoped lang="scss">{`
        .header {
          background: #f2f2f2;
          display: flex;
          justify-content: space-between;
          border: 2px solid rgba(106, 106, 106, 0.25);
          border-radius: 8px;
          padding: 16px;
          margin: 8px 0 0 0;
        }

        .content {
          height: auto;
          border-radius: 0 0 8px 8px;
          padding: 16px 8px;

          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
        }

        @keyframes rainbow {
          0% {
            background-position: 0;
          }
          100% {
            background-position: 800% 0;
          }
        }

        // .rainbow {
        //   width: 100%;
        //   height: 4px;
        //   margin-bottom: 32px;
        //   border-radius: 8px;
        //   background-repeat: repeat-x;
        //   background: linear-gradient(
        //     to right,
        //     #eb5252,
        //     #ff6201,
        //     #f78f2f,
        //     #faa300,
        //     #f3b700,
        //     #f4c151,
        //     #eb5252
        //   );
        //   animation: rainbow 10s linear infinite;
        //   background-size: 200% 100% !important;
        // }
      `}</style>
    </>
  )
}

export default Collapse
