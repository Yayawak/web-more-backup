interface ISectionLineProps {
  children?: React.ReactNode
  color?: string
  lineColor?: string
  className?: string
}

const IndexSectionLine = ({
  children,
  color = 'black',
  lineColor = 'rgba(106, 106, 106, 0.25)',
  className = '',
}: ISectionLineProps) => {
  return (
    <>
      <div className={`flex flex-col gap-[8px] ${className}`}>
        <div className="title self-center text-[24px] font-bold">
          {children}
        </div>
        <div className="line border-t-[2px]"></div>
      </div>

      <style jsx scoped>{`
        .title {
          color: ${color};
        }

        .line {
          border-top-color: ${lineColor};
        }
      `}</style>
    </>
  )
}

export default IndexSectionLine
