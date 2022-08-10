import CustomSelect from '@/components/Download/CustomSelect';
import { NextPage } from 'next'
import { useState } from 'react';

type Props = {}

const Download: NextPage = ({ }: Props) => {
    const [roleSelected, setRoleSelected] = useState(-1);
    const [docTypeSelected, setDocTypeSelected] = useState(-1);
    const roleList = [
        "บุคลากร",
        "นักศึกษา",
    ];
    const docTypeList = [
        ".doc",
        ".pdf",
    ];
    const rolePlaceholder = "กรุณาเลือกประเภทบุคลากร";
    const docTypePlaceholder = "กรุณาเลือกประเภทเอกสาร";
    return (
        <div className='bg-[#F2F2F2]'>
            <div className='2xl:container 2xl:mx-auto min-h-screen pt-9 flex flex-col gap-6 items-center sm:gap-16'>
                <h1 className='h6 sm:h1 text-center'>เลือกรายละเอียดเอกสารที่ต้องการ</h1>
                <div className='w-[90%] sm:w-[50%]'>
                    <div className='pb-3 sm:pb-8 subtitle1 sm:h3 font-normal'>
                        <p className='pb-2 sm:pb-5'>ประเภทบุคลากร</p>
                        <div className="">
                            <CustomSelect optionsList={roleList} placeHolder={rolePlaceholder} selectedOption={roleSelected} setSelectedOption={setRoleSelected} />
                        </div>
                    </div>
                    <div className='subtitle1 sm:h3 font-normal'>
                        <p className='pb-2 sm:pb-5'>ประเภทเอกสาร</p>
                        <div className="">
                            <CustomSelect optionsList={docTypeList} placeHolder={docTypePlaceholder} selectedOption={docTypeSelected} setSelectedOption={setDocTypeSelected} />
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <button className='bg-[#F8560A] text-white text-[24px] sm:text-[30px] leading-[28px] font-bold py-2 px-12 sm:py-4 sm:px-24 rounded-xl'>ค้นหา</button>
                </div>
                <div className='bg-white rounded-xl w-[80%] h-[600px] mb-[474px]'>
                </div>
            </div>
        </div>
    );
}

export default Download