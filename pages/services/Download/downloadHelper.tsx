import * as fns from 'date-fns'
import Link from 'next/link'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { IDownloadTable } from './dummyData'
import { data } from './dummyData'

export const columnHelper = createColumnHelper<IDownloadTable>()

export const columns = [
  columnHelper.accessor('name', {
    header: () => <div className="text-left">ชื่อเอกสาร</div>,
    cell: (info) => (
      <Link href={'#'} className="document-name">
        {info.getValue()}
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

export const docTypesObj = data.reduce((obj, item) => {
  obj[item.type] = item.type
  return obj;
}, {})
// ? ละทำไมมึง const วะ ถ้าแก้ได้
docTypesObj['all'] = 'all'
