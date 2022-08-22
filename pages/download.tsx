import CustomSelect from '@/components/Download/CustomSelect';
import { NextPage } from 'next'
import { useState } from 'react';
import vectorDown from '@/assets/icons/icon-vectorDown.svg'
import vectorUp from '@/assets/icons/icon-vectorUp.svg'

type Props = {}

const Download: NextPage = ({ }: Props) => {
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

    const [roleSelected, setRoleSelected] = useState(rolePlaceholder);
    const [docTypeSelected, setDocTypeSelected] = useState(docTypePlaceholder);

    return (
        <div className='bg-[#F2F2F2]'>
            <div className='2xl:container 2xl:mx-auto min-h-screen pt-9 flex flex-col gap-6 items-center sm:gap-16'>
                <h1 className='h6 sm:h1 text-center'>เลือกรายละเอียดเอกสารที่ต้องการ</h1>
                <div className='w-[90%] sm:w-[50%]'>
                    <div className='pb-3 sm:pb-8 subtitle1 sm:h3 font-normal'>
                        <p className='pb-2 sm:pb-5'>ประเภทบุคลากร</p>
                        <div className="">
                            <select id="role" value={roleSelected} onChange={(e) => setRoleSelected(e.target.value)} className="bg-white border-2 border-[#212121] text-[#6A6A6A] rounded-[10px] focus:outline-none focus:ring-[#F8560A] focus:border-[#F8560A] block w-full px-5 py-2">
                                <option selected disabled>{rolePlaceholder}</option>
                                {roleList.map((role) => (
                                    <option key={role} value={role}>{role}</option>
                                ))}
                            </select>
                            {/* <CustomSelect optionsList={roleList} placeHolder={rolePlaceholder} selectedOption={roleSelected} setSelectedOption={setRoleSelected} /> */}
                        </div>
                    </div>
                    <div className='subtitle1 sm:h3 font-normal'>
                        <p className='pb-2 sm:pb-5'>ประเภทเอกสาร</p>
                        <div className="">
                            <select id="docType" value={docTypeSelected} onChange={(e) => setDocTypeSelected(e.target.value)} className="bg-white border-2 border-[#212121] text-[#6A6A6A] rounded-[10px] focus:outline-none focus:ring-[#F8560A] focus:border-[#F8560A] block w-full px-5 py-2">
                                <option selected disabled>{docTypePlaceholder}</option>
                                {docTypeList.map((type) => (
                                    <option key={type} value={type}>{type}</option>
                                ))}
                            </select>
                            {/* <CustomSelect optionsList={docTypeList} placeHolder={docTypePlaceholder} selectedOption={docTypeSelected} setSelectedOption={setDocTypeSelected} /> */}
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