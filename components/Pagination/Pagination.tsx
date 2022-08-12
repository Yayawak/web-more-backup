import { useEffect, useMemo, useState } from 'react'

interface IPaginationProps {
  currentPage?: number
  maxPages?: number
}

const Pagination = ({ currentPage = 1, maxPages = 10 }: IPaginationProps) => {
  const startPage = useMemo(() => {
    if (currentPage < 1) return 1
    if (currentPage >= maxPages - 2) return maxPages - 4
    if (currentPage > 3) return currentPage - 2
    else return 1
  }, [currentPage, maxPages])

  const endPage = useMemo(() => {
    if (currentPage + 2 >= maxPages) return maxPages
    if (currentPage <= 3) return 5
    else return currentPage + 2
  }, [currentPage, maxPages])

  const pagesArray = useMemo(() => {
    const pages: number[][] = []

    const first: number[] = []
    const last: number[] = []

    const newCurrentPage =
      currentPage < 1 ? 1 : currentPage > maxPages ? maxPages : currentPage

    if (maxPages <= 5) {
      for (let i = 1; i <= maxPages; i++) {
        first.push(i)
      }

      pages.push(first)
      return pages
    }

    for (let i = startPage; i < newCurrentPage; i++) {
      first.push(i)
    }

    for (let i = newCurrentPage + 1; i <= endPage; i++) {
      last.push(i)
    }

    pages.push(first, [newCurrentPage], last)
    return pages
  }, [maxPages, currentPage, startPage, endPage])

  return (
    <>
      <div className={`pagination flex items-center gap-[8px]`}>
        <button disabled={currentPage === 1}>
          <span className="mdi mdi-chevron-left"></span>
        </button>

        {pagesArray.flat().map((page) => (
          <button
            key={page}
            className={`navigator ${currentPage === page && 'active'}`}
          >
            {page}
          </button>
        ))}

        <button disabled={currentPage === maxPages}>
          <span className="mdi mdi-chevron-right"></span>
        </button>
      </div>

      <style jsx scoped lang="scss">{`
        .pagination {
          > button {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 30px;
            height: 30px;
          }

          > button[disabled] {
            color: grey;
          }

          .navigator {
            border-radius: 8px;
          }

          .navigator.active {
            border: 1px solid black;
          }
        }
      `}</style>
    </>
  )
}

export default Pagination
