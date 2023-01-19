interface ISectionTitleProps {
  children?: React.ReactNode
  lineColor?: string
  textColer?: string
  className?: string
}

const IndexSectionTitle = ({
  children,
  lineColor = 'rgba(97,97,97, 0.25)',
  className = '',
  textColer = 'black',
}: ISectionTitleProps) => {
  return (
    <>
      <div
        className={`section-title flex gap-[40px] items-center justify-start ${className}`}
      >
        <div className="line border-t-[2px] max-w-[unset] md:max-w-[100px]"></div>
        <div className="title text-[24px] font-bold">{children}</div>
        <div className="line border-t-[2px]"></div>
      </div>

      <style jsx scoped>{`
        .section-title > div:not(:nth-child(2)) {
          flex-grow: 1;
        }

        .title {
          color: ${textColer};
        }

        .line {
          border-top-color: ${lineColor};
        }
      `}</style>
    </>
  )
}

export default IndexSectionTitle
