import { NextPage } from 'next'

type Props = {}

const Download: NextPage = ({ }: Props) => {
    return (
        <div className='bg-[#F2F2F2]'>
            <div className='2xl:container 2xl:mx-auto min-h-screen pt-9 flex flex-col gap-16 items-center'>
                <h1 className='h6 sm:h1 text-center'>เลือกรายละเอียดเอกสารที่ต้องการ</h1>
                <div className='w-[50%]'>
                    <div className='sm:pb-8 h3 font-normal'>
                        <p className='sm:pb-5'>ประเภทบุคลากร</p>
                        <div className="mb-3 mx-4 sm:mx-0">
                            <select className="block w-full bg-white border-2 border-[#212121] hover:border-[#F8560A] px-4 py-2 pr-8 rounded shadow focus:outline-none focus:shadow-outline"
                                defaultValue={'DEFAULT'}
                            >
                                <option value="DEFAULT" disabled>กรุณาเลือกประเภทบุคลากร</option>
                                <option>บุคลากร</option>
                                <option>นักศึกษา</option>
                            </select>
                        </div>
                    </div>
                    <div className='h3 font-normal'>
                        <p className='sm:pb-5'>ประเภทเอกสาร</p>
                        <div className="mb-3 mx-4 sm:mx-0">
                            <select className="block w-full bg-white border-2 border-[#212121] hover:border-[#F8560A] px-4 py-2 pr-8 rounded shadow focus:outline-none focus:shadow-outline"
                                defaultValue={'DEFAULT'}
                            >
                                <option value="DEFAULT" disabled>กรุณาเลือกประเภทเอกสาร</option>
                                <option>.doc</option>
                                <option>.pdf</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <button className='bg-[#F8560A] text-white text-[30px] leading-[28px] font-bold py-4 px-24 rounded-xl'>ค้นหา</button>
                </div>
                <div className='bg-white rounded-xl w-[80%] h-[600px] mb-[474px]'>

                </div>
            </div>
        </div>
    );
}

export default Download