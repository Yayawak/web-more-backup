import { NextPage } from 'next'
import React from 'react'

const ManualReport: NextPage = () => {
    return (
        <div className='min-h-screen text-center'>
            <div className='mt-16 text-left ml-[100px]'>breadcrumb</div>
            <h1 className='h1 mt-14 mb-20'>
                รายงานประจำปี
            </h1>
            <div className='h-80 w-80 bg-slate-400 mb-8 mx-auto'>table</div>
            <div className='h-80 w-80 bg-slate-500 mx-auto mb-[300px]'>iframe</div>
        </div>
    )
}

export default ManualReport