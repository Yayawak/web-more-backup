import { CustomProps } from '@/types/component-props'
import { FC, useMemo } from 'react'

interface IPaginationProps {
  length?: number
  currentPage: number
  maxPages: number
  onPageChanged: (page: number) => void
}

const Pagination: FC<CustomProps<IPaginationProps>> = ({
  length = 5,
  currentPage,
  maxPages,
  onPageChanged,
  className,
}) => {
  const startPage = useMemo<number>(() => {
    if (length >= maxPages && currentPage >= maxPages) {
      return 1
    }

    if (length === 1) {
      if (currentPage < 0) return 1
      else if (currentPage > maxPages) return maxPages
      return currentPage
    }

    if (length === 2) {
      if (currentPage < 1) return 1
      else if (currentPage >= maxPages) return maxPages - 1
      return currentPage
    }

    if (length === 3) {
      if (currentPage <= 2) return 1
      else if (currentPage >= maxPages) return maxPages - 2
      return currentPage - 1
    }

    if (length === 4) {
      if (currentPage <= 2) return 1
      else if (currentPage + 2 >= maxPages) return maxPages - 3
      return currentPage - 1
    }

    if (currentPage <= Math.ceil(length / 2) || maxPages === length) {
      return 1
    }

    if (currentPage + (Math.ceil(length / 2) - 1) >= maxPages) {
      return maxPages - length + 1
    }

    return currentPage - Math.floor(length / 2) + (length % 2 === 0 ? 1 : 0)
  }, [currentPage, length, maxPages])

  return (
    <>
      <div className={`flex items-center ${className}`}>
        <div
          className="control control-first mdi mdi-chevron-double-left mr-[8px]"
          onClick={() => onPageChanged(1)}
        ></div>
        <div
          className="control control-prev mdi mdi-chevron-left"
          onClick={() => onPageChanged(currentPage - 1)}
        ></div>

        <div className="pages flex items-center gap-[8px] mx-[16px]">
          {[...Array(length)].map((_, i) => {
            if (startPage + i <= maxPages) {
              return (
                <div
                  key={i}
                  className={`page ${
                    startPage + i === currentPage && 'active'
                  }`}
                  onClick={() => onPageChanged(startPage + i)}
                >
                  {startPage + i}
                </div>
              )
            }
          })}
        </div>

        <div
          className="control control-next mdi mdi-chevron-right"
          onClick={() => onPageChanged(currentPage + 1)}
        ></div>
        <div
          className="control control-last mdi mdi-chevron-double-right ml-[8px]"
          onClick={() => onPageChanged(maxPages)}
        ></div>
      </div>

      <style jsx scoped lang="scss">{`
        .page {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 30px;
          height: 30px;
          color: black;
          border: 1px solid black;
          border-radius: 8px;
          cursor: pointer;

          &.active {
            color: white;
            background-color: black;
          }
        }

        .control {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 30px;
          height: 30px;
          cursor: pointer;
        }
      `}</style>
    </>
  )
}

export default Pagination
