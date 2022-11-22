interface ISectionTitleProps {
  children?: React.ReactNode
  color?: string
  className?: string
}

const IndexSectionTitle = ({
  children,
  color = 'black',
  className = '',
}: ISectionTitleProps) => {
  return (
    <>
      <div
        className={`section-title flex gap-[8px] items-center justify-start ${className}`}
      >
        <div className="line border-t-[2px] max-w-[unset] md:max-w-[100px]"></div>
        <div className="title text-[32px] font-bold">{children}</div>
        <div className="line border-t-[2px]"></div>
      </div>

      <style jsx scoped>{`
        .section-title > div:not(:nth-child(2)) {
          flex-grow: 1;
        }

        .title {
          color: ${color};
        }

        .line {
          border-top-color: ${color};
        }
      `}</style>
    </>
  )
}

export default IndexSectionTitle
