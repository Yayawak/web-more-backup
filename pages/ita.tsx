import React from 'react'
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs'
import Container from '@/components/Layout/Container'
import Link from 'next/link'
import Image from 'next/image'

const ItaPage = () => {
  return (
    <>
      <Container className="my-[16px]">
        <Breadcrumbs />
        <p className="text-center font-bold mt-[16px] mb-3 text-xl">
          ข้อมูลเปิดเผยสาธารณะ
        </p>

        <div className="relative h-[500px] mb-5 text-center">
          <Image
            src="https://www.science.kmitl.ac.th/apiUpload/newsPicture/SXDxlCMaqTFD1640675066479/OFOrBHwZSTkK1640675066499.png"
            alt="science kmitl"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div>
          <b>1. การปฏิบัติหน้าที่</b>
          <br></br>&nbsp; &nbsp; 1.1 กฏหมายภายในสถาบัน
          <br></br>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -{' '}
          <Link href="https://law.kmitl.ac.th/#">
            <a target="_blank">สำนักงานนิติกร สำนักงานอธิการบดี&nbsp;</a>
          </Link>
          <br></br>&nbsp; &nbsp; 1.2 คู่มือมาตรฐานการปฏิบัติงาน
          <br></br>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -{' '}
          <Link href="http://www.science.kmitl.ac.th/upload/news_img/1.2.1 คู่มือพนักงานสถาบัน-กับสิ่งที่พนักงานสถาบันควรรู้ในการปฏิบัติงาน.pdf">
            <a target="_blank">คู่มือ มาตรฐานการปฏิบัติงาน</a>
          </Link>
          <br></br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -{' '}
          <Link href="http://www.science.kmitl.ac.th/upload/news_img/1.2.2 ประกาศชื่อตำแหน่งและมาตรฐานกำหนดตำแหน่งของพนักงานสถาบัน-พ.ศ.2557.pdf">
            <a target="_blank">
              ประกาศชื่อตำแหน่งและมาตรฐานกำหนดตำแหน่งของพนักงานสถาบัน พ..ศ.2557
            </a>
          </Link>
          <br></br>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -
          <Link href="https://www.science.kmitl.ac.th/apiUpload/newsPicture/tLjEFGp7MxJ11641456573060/4cOF1UGj7fs41641456573080.pdf">
            <a target="_blank">
              ขั้นตอนการปฏิบัติงาน (work flow) ของหน่วยงานภายใน คณะวิทยาศาสตร์
            </a>
          </Link>
          <br></br> &nbsp; &nbsp; 1.3 คู่มือมาตรฐานการให้บริการ
          <div>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -{' '}
            <Link href="http://www.science.kmitl.ac.th/page#/docs_container">
              <a target="_blank">เอกสารดาวน์โหลดสำหรับนักศึกษา </a>
            </Link>
          </div>
        </div>
        <br></br>

        <div>
          <b>2. การบริหารเงินงบประมาณปี</b>
          <br></br>&nbsp; &nbsp; 2.1 แผนยุทธศาสตร์หรือแผนพัฒนาหน่วยงาน
          <br></br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -{' '}
          <Link href="http://www.science.kmitl.ac.th/upload/news_img/2.1.1 แผนปฏิบัติการสถาบัน 5 ปี (พ.ศ. 2560-2564)[1].pdf">
            <a target="_blank">แผนปฏิบัติการสถาบัน 5 ปี (พ.ศ. 2560-2564)</a>
          </Link>
          <br></br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -{' '}
          <Link href="http://www.science.kmitl.ac.th/upload/news_img/2.1.2 แผนกลยุทธ์สถาบัน 10 ปี (พ.ศ.2560-2570)[1].pdf">
            <a target="_blank">แผนกลยุทธ์สถาบัน 10 ปี (พ.ศ.2560-2570)</a>
          </Link>
          <br></br>&nbsp; &nbsp; 2.2 แผนดำเนินงานประจำปี
          <br></br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -{' '}
          <Link href="https://www.science.kmitl.ac.th/apiUpload/newsPicture/XoeryVzLQtpa1643607747815/keLwokBGFauq1643607747831.pdf">
            <a target="_blank">
              เอกสารงบประมาณฉบับที่ 3 งบประมาณรายจ่าย ประจำปีงบประมาณ 2565
              เล่มที่ 3(4)
            </a>
          </Link>
          <br></br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -{' '}
          <Link href="https://www.science.kmitl.ac.th/apiUpload/newsPicture/sREYPXUHnVzM1640675583884/pbCIRDj4422c1640675583900.PDF">
            <a target="_blank">พรบ.งบประมาณรายจ่าย ประจำปีงบประมาณ พ.ศ. 2565</a>
          </Link>
          <br></br>&nbsp; &nbsp; 2.3 การจัดซื้อจัดจ้าง
          <br></br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -{' '}
          <Link href="http://www.science.kmitl.ac.th/page#/news_container/5b6c0262179eae3a4c17a1c5/5a8470b228d2e92a0c753010">
            <a target="_blank">ข้อมูลการจัดซื้อจัดจ้าง</a>
          </Link>
        </div>
        <br></br>

        <div>
          <b>3. การบริหารและพัฒนาทรัพยากรบุคคล</b>
          <br></br>&nbsp; &nbsp; &nbsp;3.1 โครงสร้างการแบ่งส่วนราชการของหน่วยงาน
          <br></br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -{' '}
          <Link href="http://www.science.kmitl.ac.th/page#/structure">
            <a target="_blank">การแบ่งส่วนงานและการบริหารคณะวิทยาศาสตร์</a>
          </Link>
          <br></br>&nbsp; &nbsp; &nbsp;3.2 ข้อมูลผู้บริหาร
          <br></br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -{' '}
          <Link href="http://www.science.kmitl.ac.th/page#/personel">
            <a target="_blank">ข้อมูลผู้บริหารคณะ&nbsp;</a>
          </Link>
          <br></br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -{' '}
          <Link href="http://kmitl.ac.th/th/manager-kmitl/1">
            <a target="_blank">ข้อมูลผู้บริหารสถาบัน&nbsp;</a>
          </Link>
          <br></br>&nbsp; &nbsp; &nbsp;3.3 นโยบายการบริหาร
          <br></br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -{' '}
          <Link href="http://www.science.kmitl.ac.th/page#/resolution">
            <a target="_blank">นโยบายการบริหารคณะวิทยาศาสตร์</a>
          </Link>
          <br></br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -{' '}
          <Link href="http://kmitl.ac.th/th/vision">
            <a target="_blank">วิสัยทัศน์ พันธกิจ ระดับสถาบัน&nbsp;</a>
          </Link>
          <br></br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -{' '}
          <Link href="http://hr.kmitl.ac.th/?page_id=120">
            <a target="_blank">ข้อบังคับเกี่ยวกับการบริหารงานบุคคล&nbsp;</a>
          </Link>
        </div>
        <br></br>

        <div>
          <b>4. การใช้ทรัพย์สินของราชการ</b>
          <br></br>&nbsp; &nbsp; &nbsp; 4.1 การใช้ทรัพย์สินของราชการ
          <br></br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -{' '}
          <Link href="https://law.kmitl.ac.th/?p=2665">
            <a target="_blank">
              กฎระเบียบการบริหารการเงิน พัสดุ และทรัพย์สิน&nbsp;
            </a>
          </Link>
          <br></br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -{' '}
          <Link href="https://www.pmo.kmitl.ac.th/#">
            <a target="_blank">สำนักงานบริหารทรัพย์สิน&nbsp;</a>
          </Link>
          <br></br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -{' '}
          <Link href="https://www.itrector.kmitl.ac.th/vehicle/">
            <a target="_blank">ระบบการจองรถส่วนกลาง&nbsp;</a>
          </Link>
          <br></br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -{' '}
          <Link href="http://www.science.kmitl.ac.th/page#/docs_container">
            <a target="_blank">แบบฟอร์มการให้บริการงานเทคโนโลยีสารสนเทศ</a>
          </Link>
          <br></br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -{' '}
          <Link href="https://csc.kmitl.ac.th/cscweb-1/">
            <a target="_blank">สำนักบริการคอมพิวเตอร์&nbsp;</a>
          </Link>
          <br></br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -{' '}
          <Link href="http://www.lib.kmitl.ac.th/">
            <a target="_blank">สำนักหอสมุดกลาง&nbsp;</a>
          </Link>
          <br></br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -{' '}
          <Link href="http://www.science.kmitl.ac.th/upload/news_img/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%A1%E0%B8%B2%E0%B8%95%E0%B8%A3%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9B%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B8%97%E0%B8%A3%E0%B8%B1%E0%B8%9E%E0%B8%A2%E0%B9%8C%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%82.pdf">
            <a target="_blank">
              ประกาศคณะวิทยาศาสตร์
              เรื่องมาตรการป้องกันกรณีการใช้ทรัพย์สินของสถาบัน
            </a>
          </Link>
          <br></br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -{' '}
          <Link href="http://www.science.kmitl.ac.th/upload/news_img/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B9%80%E0%B8%9C%E0%B8%A2%E0%B9%81%E0%B8%9E%E0%B8%A3%E0%B9%88%20%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%9A%E0%B8%B4%E0%B8%81%E0%B8%88%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B8%A7%E0%B8%B1%E0%B8%AA%E0%B8%94%E0%B8%B8-%E0%B8%84%E0%B8%A3%E0%B8%B8%E0%B8%A0%E0%B8%B1%E0%B8%93%E0%B8%91%E0%B9%8C%E0%B8%AF.pdf">
            <a target="_blank">
              ประกาศคณะวิทยาศาสตร์
              สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง เรื่อง เผยแพร่
              การเบิกจ่ายวัสดุ-ครุภัณฑ์ และการยืมคืนครุภัณฑ์
            </a>
          </Link>
        </div>
        <br></br>

        <div>
          <b>5. การส่งเสริมความโปร่งใสในหน่วยงาน</b>
          <br></br>&nbsp; &nbsp; &nbsp; 5.1 การแก้ไขปัญหาการทุจริต
          <br></br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -{' '}
          <Link href="https://www.science.kmitl.ac.th/apiUpload/newsPicture/IztGwo9Q1Khf1640675443114/iOFLGCzbwBXi1640675443139.pdf">
            <a target="_blank">
              คณะกรรมการขับเคลื่อนการประเมินคุณธรรมและความโปร่งใสในการดำเนินงานของหน่วยงานภาครัฐ
              (ITA) คณะวิทยาศาสตร์
            </a>
          </Link>
          <br></br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -{' '}
          <Link href="https://www.science.kmitl.ac.th/apiUpload/newsPicture/nBxQnnlzCfUs1640675734365/PhVJn8oIcB861640675734467.pdf">
            <a target="_blank">
              คู่มือการประเมินคุณธรรมและความโปร่งใสในการดำเนินงาน
              ของหน่วยงานภาครัฐ ประจำปีงบประมาณ พ.ศ.2565&nbsp;
            </a>
          </Link>
          <br></br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -{' '}
          <Link href="http://www.science.kmitl.ac.th/upload/news_img/5.1.2เอกสารรายละเอียดการประเมิน ITA 2563.pdf">
            <a target="_blank">
              แนวทางการยกระดับค่าคะแนนการประเมินคุณธรรมและความโปร่งใสในการดำเนินงานของหน่วยงานภาครัฐ
              (ITA)&nbsp;
            </a>
          </Link>
          <br></br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -{' '}
          <Link href="https://law.kmitl.ac.th/?page_id=3425">
            <a target="_blank">
              มาตรการส่งเสริมคุณธรรมและความโปร่งใสภายในหน่วยงาน
            </a>
          </Link>
        </div>
        <br></br>

        <div>
          <b>6. ข่าวประชาสัมพันธ์</b>
          <br></br>&nbsp; &nbsp; &nbsp; 6.1 ข่าวประชาสัมพันธ์
          <br></br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -{' '}
          <Link href="http://www.science.kmitl.ac.th">
            <a target="_blank">เว็บไซต์คณะวิทยาศาสตร์</a>
          </Link>
          <br></br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -{' '}
          <Link href="https://www.facebook.com/SciKmitl">
            <a target="_blank">Facebook คณะวิทยาศาสตร์&nbsp;</a>
          </Link>
          <br></br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -{' '}
          <Link href="http://kmitl.ac.th/th">
            <a target="_blank">เว็บไซต์สถาบัน</a>
          </Link>
        </div>
        <br></br>

        <div>
          <b>7. บริการ</b>
          <br></br>&nbsp; &nbsp; &nbsp; 7.1 ช่องทางการรับฟังความคิดเห็น
          <br></br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -{' '}
          <Link href="http://www.science.kmitl.ac.th/#/home">
            <a target="">ข้อมูลการติดต่อ&nbsp;</a>
          </Link>
          <br></br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -{' '}
          <Link href="http://www.science.kmitl.ac.th/page#/dean">
            <a target="_blank">ติดต่อร้องเรียน ระดับคณะ</a>
          </Link>
          <br></br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -{' '}
          <Link href="https://osda.science.kmitl.ac.th/">
            <a target="_blank">บริการถามตอบปัญหา</a>
          </Link>
        </div>

        <div className="relative h-[500px] mt-5 mb-5 text-center">
          <Image
            src="https://www.science.kmitl.ac.th/apiUpload/news_pic/LZfsPURWS8Sh1640676660401.png"
            alt="science kmitl"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </Container>

      <style jsx scoped>{`
        a {
          font-size: inherit !important;
          color: #fd600e;
        }

        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  )
}

export default ItaPage
