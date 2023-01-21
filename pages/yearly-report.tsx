import { NextPage } from 'next'
import Image from 'next/image'
import { Fragment, useCallback, useEffect, useState } from 'react'
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs'
import Container from '@/components/Layout/Container'
import InputText from '@/components/Input/Text'
import Pagination from '@/components/Pagination/Pagination'
import { Ireport, IyearlyReportTable } from '@/types/yearly-report'
import { data } from '@/constants/yearly-report'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table'
import * as fns from 'date-fns'
import pdfIcon from '../assets/icons/icon-pdf.svg'

const columnHelper = createColumnHelper<IyearlyReportTable>()

const columns = [
  columnHelper.accessor('report', {
    header: () => <div className="text-left">ชื่อเอกสาร</div>,
    cell: (info) => (
      <div className='flex cursor-pointer'>
        <Image src={pdfIcon} alt={'pdf Icon'} height={'32'} className="hidden md:block " />
        <p className="document-name md:ml-5">
          {info.getValue().name}
        </p>
      </div>
    ),
  }),
  columnHelper.accessor('type', {
    header: 'ประเภทเอกสาร',
    cell: (info) => <div className="text-center">{info.getValue()}</div>,
  }),
  columnHelper.accessor('date', {
    header: () => <div className="text-right">วันที่ออกเอกสาร</div>,
    cell: (info) => (
      <div className="text-right">
        {fns.format(info.getValue(), 'dd/MM/yyyy')}
      </div>
    ),
  }),
]

function instanceOfIreport(obj: any): obj is Ireport {
  return 'name' in obj && 'url' in obj
}

const YearlyReport: NextPage = () => {

  const [filter, setFilter] = useState<string>('')
  const [selectedFile, setSelectedFile] = useState<string>(data[0].report.url)

  const table = useReactTable({
    columns,
    data,
    state: {
      globalFilter: filter,
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  const [pageIndex, setPageIndex] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(3)

  const onPageChange = useCallback(
    (page: number) => {
      const maxPages = table.getPageCount()
      if (page < 1) page = 1
      if (page > maxPages) page = maxPages

      setPageIndex(page)
      table.setPageIndex(page - 1)
    },
    [table]
  )

  useEffect(() => {
    table.setPageIndex(0)
    table.setPageSize(pageSize)
  }, [])

  return (
    <>
      <Container className="my-4 md:my-8 lg:mt-16 lg:mb-28">
        <Breadcrumbs />
        <div className="h5 lg:h4 text-center my-4 md:mt-8 lg:mt-16 lg:mb-16">
          รายงานประจำปี
        </div>
        <div className="mx-1 md:mx-4 mb-4 py-4 px-4 md:px-8 flex flex-col bg-white rounded-[20px]">
          <div className="font-bold text-[20px] mb-[16px]">รายงานประจำปี</div>

          <div className="flex mb-[16px] items-center">
            <div className="ml-auto mr-[16px]">คำค้นหา</div>
            <InputText
              className="max-w-[200px] text-xs lg:text-base"
              value={filter}
              placeholder="กรุณากรอกคำค้นหา"
              onChange={(e) => setFilter(e.target.value)}
            />
          </div>

          <table>
            <thead className="border-y-[#F8560A66] border-y-2">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th key={header.id} className="py-[8px]">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>

            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <Fragment key={cell.id}>
                      {
                        (typeof cell.getValue() === 'object' && instanceOfIreport(cell.getValue())) ?
                          <td
                            className="py-[8px]"
                            onClick={() => setSelectedFile((cell.getValue() as Ireport).url)}>
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </td>
                          :
                          <td className="py-[8px]">
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </td>
                      }
                    </Fragment>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex flex-col md:flex-row mt-[40px] overflow-auto">
            <p>ทั้งหมด {table.getFilteredRowModel().rows.length} รายการ</p>
            <Pagination
              maxPages={table.getPageCount()}
              currentPage={pageIndex}
              onPageChanged={onPageChange}
              className="ml-auto"
            />
          </div>
        </div>
        <div className='mt-8 h-fit flex justify-center'>
          {
            selectedFile !== '' &&
            <iframe id='iframe' src={`${selectedFile}#view=fitH`} height="600px" width="90%"></iframe>
          }
        </div>
      </Container>
      <style jsx scoped lang="scss">{`
        :global(.document-name):hover {
          text-decoration: underline !important;
        }
      `}</style>
    </>
  )
}

export default YearlyReport