import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs'
import BaseButton from '@/components/Buttons/Base/BaseButton'
import InputSelect from '@/components/Input/Select'
import Container from '@/components/Layout/Container'
import { Rounded } from '@/types/rounded'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { NextPage } from 'next'
import * as fns from 'date-fns'
import Link from 'next/link'
import InputText from '@/components/Input/Text'
import React, { ChangeEvent, useCallback, useEffect, useState } from 'react'
import Pagination from '@/components/Pagination/Pagination'

interface IDownloadTable {
  name: string
  type: string
  date: Date
}
const columnHelper = createColumnHelper<IDownloadTable>()

const columns = [
  columnHelper.accessor('name', {
    header: () => <div className="text-left">ชื่อเอกสาร</div>,
    cell: (info) => (
      <Link href={'#'}>
        <a className="document-name">{info.getValue()}</a>
      </Link>
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

const data: IDownloadTable[] = [
  {
    name: 'แบบฟอร์มลาออก.pdf',
    type: 'งานวิจัย',
    date: new Date(),
  },
  {
    name: 'เอกสารลาออก.doc',
    type: 'งานวิจัย',
    date: new Date(),
  },
  {
    name: 'เอกสารงานวิจัย.doc',
    type: 'งานวิจัย',
    date: new Date(),
  },
  {
    name: 'เอกสารขอเงิน.doc',
    type: 'งานวิจัย',
    date: new Date(),
  },
]

const Download: NextPage = () => {
  const [filter, setFilter] = useState<string>('')

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
  const [pageSize, setPageSize] = useState<number>(10)

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
      <Container className="mt-[64px] mb-[200px]">
        <Breadcrumbs />

        <div className="mt-[64px] mb-[32px] text-center text-[32px] font-bold">
          เอกสาร
        </div>

        <div className="mb-[16px] text-center text-[24px]">
          เลือกรายละเอียดเอกสารที่ต้องการ
        </div>

        <div className="mx-auto max-w-[400px]">
          <div className="text-[16px] mb-[4px]">ประเภทบุคลากร</div>

          <InputSelect items={{ teacher: 'บุคคลากร', student: 'นักศึกษา' }} />

          <div className="text-[16px] mt-[8px] mb-[4px]">ประเภทเอกสาร</div>
          <InputSelect items={{ doc: '.doc', pdf: '.pdf' }} />

          <BaseButton
            backgroundColor="#F8560A"
            textColor="white"
            roundedType={Rounded.CUSTOM}
            rounded={6}
            elevation={false}
            className="mt-[32px] mb-[64px] mx-auto w-[176px]"
          >
            ค้นหา
          </BaseButton>
        </div>

        <div className="mx-auto mb-[16px] py-[16px] px-[32px] flex flex-col bg-white rounded-[10px]">
          <div className="font-bold text-[20px] mx-[16px] mb-[16px]">
            งานวิจัย
          </div>

          <div className="flex mb-[16px] items-center">
            <div className="ml-auto mr-[16px]">คำค้นหา</div>
            <InputText
              className="max-w-[200px]"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
          </div>

          <table>
            <thead className="border-y-[#F8560A66] border-y-2">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th key={header.id} className="px-[16px] py-[8px]">
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
                    <td key={cell.id} className=" px-[16px] py-[8px]">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex mt-[40px]">
            <Pagination
              maxPages={table.getPageCount()}
              currentPage={pageIndex}
              onPageChanged={onPageChange}
              className="ml-auto"
            />
          </div>
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

export default Download
