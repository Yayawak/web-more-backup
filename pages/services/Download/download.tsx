import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs'
import BaseButton from '@/components/Buttons/Base/BaseButton'
import InputSelect from '@/components/Input/Select'
import Container from '@/components/Layout/Container'
import { Rounded } from '@/types/rounded'
import { NextPage } from 'next'
import InputText from '@/components/Input/Text'
import React, { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react'
import Pagination from '@/components/Pagination/Pagination'
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { data } from './dummyData'
import { columns, docTypesObj } from './downloadHelper'
import { isNumeric } from '@/helpers/validity'
// import { isNumberObject } from 'util/types'

  // todo 1 : ใส่ logo ของ เอกสารแต่ละแบบ -> enum แม่ง มีไม่กี่ประเภทรูปภาพ -> JK
  // todo 2 : ใส่ next-privious page 1 2 3 4 ตอนนี้มีสีดำแล้ว -> ใส่สีขาว -> เขียน custom component -> JK
  // todo 3 : ขยายคำค้นหา ให้กล่องใหญ่ขึ้น ตาม design -> Achi

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
  // const k = table.getSortedRowModel().rows.length;

  const [pageIndex, setPageIndex] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(10)
  const [rowSize, setRowSize] = useState<number>(5);

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
  }, [table, pageSize, pageIndex])

  const onRowSizeChange = (e: React.ChangeEvent<HTMLInputElement>) =>
  {
    if (isNumeric(e.target.value) && parseInt(e.target.value) > 0)
    {
      setRowSize(parseInt(e.target.value));
    }
    else {
      setRowSize(table.getRowModel().rows.length)
    }
  }

  const onFormTypeChange = (formType: string) => {
    if (formType === "all")
      setFilter("")
    else
      setFilter(formType)
  }

  return (
    <>
      <Container className="mt-[64px] mb-[200px]">
        <Breadcrumbs />
        {/* // todo 6 : ทั้งหมด 10 รายการ -> J */}

        <div className="mt-[64px] mb-[32px] text-center text-[32px] font-bold">
          เอกสาร
        </div>

        {/* <div className="mb-[16px] text-center text-[24px]">
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
        </div> */}

        {/* // todo 5 * : ประเภทเอกสาร -> J */}
        <div className={`
          flex items-center
          max-w-[400px]
          mb-[40px]
          `}
        >

          {/* <div className='ml-auto mr-[16px] whitespace-nowrap'> */}
          <div className='mr-[16px] whitespace-nowrap'>
            ประเภทเอกสาร
          </div>
          <InputSelect items={ docTypesObj }
            // setState={setFilter}
            setState={onFormTypeChange}
            // setState={() => {setFilter()}}
            state={filter}
            // className='bg-green-300'
            // className='max-w-[200px]'
          />
        </div>

        <div className="mx-auto mb-[16px] py-[16px] px-[32px] flex flex-col bg-white rounded-[10px]">
        {/* <div className=""> */}
          {/* // todo 4 : ส่่วนแสดงรายการ -> J */}
          {/* <div className='flex flex-col mb-[16px]'> */}
          <div className='inline-flex mb-[20px]'>
            <div className='flex justify-content'>
              <div className="ml-auto mr-[16px] whitespace-nowrap">แสดงรายการ</div>
              {/* // ? อย่าใช้ input select เลย มันมีเป็น string หนิ ใช้กับ int ไม่ได้ */}
              <InputText
                className='max-w-[200px]'
                // value={`${rowSize}`}
                // value={`${table.getSortedRowModel().rows.length}`}
                placeholder={`${table.getSortedRowModel().rows.length}`}
                // onChange={e => {table.setPageSize(e.target.value)}}
                // onChange={e => {table.setPageCount(parseInt(e.target.value))}}
                onChange={e => {onRowSizeChange(e) }}
                // onChange={e => {table.setExpanded}}
              />
              <div className="mr-auto ml-[16px] whitespace-nowrap" >แถว</div>
            </div>

            <div className="flex items-center ml-auto">
              <div className="ml-auto mr-[16px] whitespace-nowrap">คำค้นหา</div>
              <InputText
                className="max-w-[200px]"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                placeholder='กรุณากรอกคำค้นหา'
              />
            </div>
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
              {table.getRowModel().
              rows.slice(0, rowSize).
              map((row) => (
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
            <div>
              <div className='text-sm'>
                { `ทั้งหมด ${data.length} รายการ` }
              </div>
            </div>
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
