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
        <p className="mt-[16px] mb-3 text-center text-xl font-bold">
          ข้อมูลเปิดเผยสาธารณะ
        </p>

        <div className="relative mb-5 h-[500px] text-center">
          <Image
            className="object-contain"
            src="https://www.science.kmitl.ac.th/apiUpload/newsPicture/SXDxlCMaqTFD1640675066479/OFOrBHwZSTkK1640675066499.png"
            alt="science kmitl"
            fill
            sizes="(min-width: 0) 100vw"
          />
        </div>

        <div>
          <b>1. การปฏิบัติหน้าที่</b>
          <br></br>&nbsp; &nbsp; 1.1 กฏหมายภายในสถาบัน
          <br></br>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -{' '}
          <a
            target="_blank"
            href="https://law.kmitl.ac.th/#"
            rel="noreferrer noopener"
          >
            สำนักงานนิติกร สำนักงานอธิการบดี&nbsp;
          </a>
          <br></br>&nbsp; &nbsp; 1.2 คู่มือมาตรฐานการปฏิบัติงาน
          <br></br>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -{' '}
          <a
            target="_blank"
            href="http://www.science.kmitl.ac.th/upload/news_img/1.2.1 คู่มือพนักงานสถาบัน-กับสิ่งที่พนักงานสถาบันควรรู้ในการปฏิบัติงาน.pdf"
            rel="noreferrer noopener"
          >
            คู่มือ มาตรฐานการปฏิบัติงาน
          </a>
          <br></br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -{' '}
          <a
            target="_blank"
            href="http://www.science.kmitl.ac.th/upload/news_img/1.2.2 ประกาศชื่อตำแหน่งและมาตรฐานกำหนดตำแหน่งของพนักงานสถาบัน-พ.ศ.2557.pdf"
            rel="noreferrer noopener"
          >
            ประกาศชื่อตำแหน่งและมาตรฐานกำหนดตำแหน่งของพนักงานสถาบัน พ..ศ.2557
          </a>
          <br></br>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -
          <a
            target="_blank"
            href="https://www.science.kmitl.ac.th/apiUpload/newsPicture/tLjEFGp7MxJ11641456573060/4cOF1UGj7fs41641456573080.pdf"
            rel="noreferrer noopener"
          >
            ขั้นตอนการปฏิบัติงาน (work flow) ของหน่วยงานภายใน คณะวิทยาศาสตร์
          </a>
          <br></br> &nbsp; &nbsp; 1.3 คู่มือมาตรฐานการให้บริการ
          <div>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -{' '}
            <a
              target="_blank"
              href="http://www.science.kmitl.ac.th/page#/docs_container"
              rel="noreferrer noopener"
            >
              เอกสารดาวน์โหลดสำหรับนักศึกษา
            </a>
          </div>
        </div>
        <br></br>

        <div>
          <b>2. การบริหารเงินงบประมาณปี</b>
          <br></br>&nbsp; &nbsp; 2.1 แผนยุทธศาสตร์หรือแผนพัฒนาหน่วยงาน
          <br></br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -{' '}
          <a
            target="_blank"
            href="http://www.science.kmitl.ac.th/upload/news_img/2.1.1 แผนปฏิบัติการสถาบัน 5 ปี (พ.ศ. 2560-2564)[1].pdf"
            rel="noreferrer noopener"
          >
            แผนปฏิบัติการสถาบัน 5 ปี (พ.ศ. 2560-2564)
          </a>
          <br></br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -{' '}
          <a
            target="_blank"
            href="http://www.science.kmitl.ac.th/upload/news_img/2.1.2 แผนกลยุทธ์สถาบัน 10 ปี (พ.ศ.2560-2570)[1].pdf"
            rel="noreferrer noopener"
          >
            แผนกลยุทธ์สถาบัน 10 ปี (พ.ศ.2560-2570)
          </a>
          <br></br>&nbsp; &nbsp; 2.2 แผนดำเนินงานประจำปี
          <br></br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -{' '}
          <a
            target="_blank"
            href="https://www.science.kmitl.ac.th/apiUpload/newsPicture/XoeryVzLQtpa1643607747815/keLwokBGFauq1643607747831.pdf"
            rel="noreferrer noopener"
          >
            เอกสารงบประมาณฉบับที่ 3 งบประมาณรายจ่าย ประจำปีงบประมาณ 2565 เล่มที่
            3(4)
          </a>
          <br></br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -{' '}
          <a
            target="_blank"
            href="https://www.science.kmitl.ac.th/apiUpload/newsPicture/sREYPXUHnVzM1640675583884/pbCIRDj4422c1640675583900.PDF"
            rel="noreferrer noopener"
          >
            พรบ.งบประมาณรายจ่าย ประจำปีงบประมาณ พ.ศ. 2565
          </a>
          <br></br>&nbsp; &nbsp; 2.3 การจัดซื้อจัดจ้าง
          <br></br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -{' '}
          <a
            target="_blank"
            href="http://www.science.kmitl.ac.th/page#/news_container/5b6c0262179eae3a4c17a1c5/5a8470b228d2e92a0c753010"
            rel="noreferrer noopener"
          >
            ข้อมูลการจัดซื้อจัดจ้าง
          </a>
        </div>
        <br></br>

        <div>
          <b>3. การบริหารและพัฒนาทรัพยากรบุคคล</b>
          <br></br>&nbsp; &nbsp; &nbsp;3.1 โครงสร้างการแบ่งส่วนราชการของหน่วยงาน
          <br></br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -{' '}
          <a
            target="_blank"
            href="http://www.science.kmitl.ac.th/page#/structure"
            rel="noreferrer noopener"
          >
            การแบ่งส่วนงานและการบริหารคณะวิทยาศาสตร์
          </a>
          <br></br>&nbsp; &nbsp; &nbsp;3.2 ข้อมูลผู้บริหาร
          <br></br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -{' '}
          <a
            target="_blank"
            href="http://www.science.kmitl.ac.th/page#/personel"
            rel="noreferrer noopener"
          >
            ข้อมูลผู้บริหารคณะ&nbsp;
          </a>
          <br></br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -{' '}
          <a
            target="_blank"
            href="http://kmitl.ac.th/th/manager-kmitl/1"
            rel="noreferrer noopener"
          >
            ข้อมูลผู้บริหารสถาบัน&nbsp;
          </a>
          <br></br>&nbsp; &nbsp; &nbsp;3.3 นโยบายการบริหาร
          <br></br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -{' '}
          <a
            target="_blank"
            href="http://www.science.kmitl.ac.th/page#/resolution"
            rel="noreferrer noopener"
          >
            นโยบายการบริหารคณะวิทยาศาสตร์
          </a>
          <br></br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -{' '}
          <a
            target="_blank"
            href="http://kmitl.ac.th/th/vision"
            rel="noreferrer noopener"
          >
            วิสัยทัศน์ พันธกิจ ระดับสถาบัน&nbsp;
          </a>
          <br></br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -{' '}
          <a
            target="_blank"
            href="http://hr.kmitl.ac.th/?page_id=120"
            rel="noreferrer noopener"
          >
            ข้อบังคับเกี่ยวกับการบริหารงานบุคคล&nbsp;
          </a>
        </div>
        <br></br>

        <div>
          <b>4. การใช้ทรัพย์สินของราชการ</b>
          <br></br>&nbsp; &nbsp; &nbsp; 4.1 การใช้ทรัพย์สินของราชการ
          <br></br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -{' '}
          <a
            target="_blank"
            href="https://law.kmitl.ac.th/?p=2665"
            rel="noreferrer noopener"
          >
            กฎระเบียบการบริหารการเงิน พัสดุ และทรัพย์สิน&nbsp;
          </a>
          <br></br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -{' '}
          <a
            target="_blank"
            href="https://www.pmo.kmitl.ac.th/#"
            rel="noreferrer noopener"
          >
            สำนักงานบริหารทรัพย์สิน&nbsp;
          </a>
          <br></br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -{' '}
          <a
            target="_blank"
            href="https://www.itrector.kmitl.ac.th/vehicle/"
            rel="noreferrer noopener"
          >
            ระบบการจองรถส่วนกลาง&nbsp;
          </a>
          <br></br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -{' '}
          <a
            target="_blank"
            href="http://www.science.kmitl.ac.th/page#/docs_container"
            rel="noreferrer noopener"
          >
            แบบฟอร์มการให้บริการงานเทคโนโลยีสารสนเทศ
          </a>
          <br></br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -{' '}
          <a
            target="_blank"
            href="https://csc.kmitl.ac.th/cscweb-1/"
            rel="noreferrer noopener"
          >
            สำนักบริการคอมพิวเตอร์&nbsp;
          </a>
          <br></br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -{' '}
          <a
            target="_blank"
            href="http://www.lib.kmitl.ac.th/"
            rel="noreferrer noopener"
          >
            สำนักหอสมุดกลาง&nbsp;
          </a>
          <br></br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -{' '}
          <a
            target="_blank"
            href="http://www.science.kmitl.ac.th/upload/news_img/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%A1%E0%B8%B2%E0%B8%95%E0%B8%A3%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9B%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B8%97%E0%B8%A3%E0%B8%B1%E0%B8%9E%E0%B8%A2%E0%B9%8C%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B8%82.pdf"
            rel="noreferrer noopener"
          >
            ประกาศคณะวิทยาศาสตร์
            เรื่องมาตรการป้องกันกรณีการใช้ทรัพย์สินของสถาบัน
          </a>
          <br></br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -{' '}
          <a
            target="_blank"
            href="http://www.science.kmitl.ac.th/upload/news_img/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B9%80%E0%B8%9C%E0%B8%A2%E0%B9%81%E0%B8%9E%E0%B8%A3%E0%B9%88%20%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%9A%E0%B8%B4%E0%B8%81%E0%B8%88%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B8%A7%E0%B8%B1%E0%B8%AA%E0%B8%94%E0%B8%B8-%E0%B8%84%E0%B8%A3%E0%B8%B8%E0%B8%A0%E0%B8%B1%E0%B8%93%E0%B8%91%E0%B9%8C%E0%B8%AF.pdf"
            rel="noreferrer noopener"
          >
            ประกาศคณะวิทยาศาสตร์ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง
            เรื่อง เผยแพร่ การเบิกจ่ายวัสดุ-ครุภัณฑ์ และการยืมคืนครุภัณฑ์
          </a>
        </div>
        <br></br>

        <div>
          <b>5. การส่งเสริมความโปร่งใสในหน่วยงาน</b>
          <br></br>&nbsp; &nbsp; &nbsp; 5.1 การแก้ไขปัญหาการทุจริต
          <br></br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -{' '}
          <a
            target="_blank"
            href="https://www.science.kmitl.ac.th/apiUpload/newsPicture/IztGwo9Q1Khf1640675443114/iOFLGCzbwBXi1640675443139.pdf"
            rel="noreferrer noopener"
          >
            คณะกรรมการขับเคลื่อนการประเมินคุณธรรมและความโปร่งใสในการดำเนินงานของหน่วยงานภาครัฐ
            (ITA) คณะวิทยาศาสตร์
          </a>
          <br></br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -{' '}
          <a
            target="_blank"
            href="https://www.science.kmitl.ac.th/apiUpload/newsPicture/nBxQnnlzCfUs1640675734365/PhVJn8oIcB861640675734467.pdf"
            rel="noreferrer noopener"
          >
            คู่มือการประเมินคุณธรรมและความโปร่งใสในการดำเนินงาน
            ของหน่วยงานภาครัฐ ประจำปีงบประมาณ พ.ศ.2565&nbsp;
          </a>
          <br></br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -{' '}
          <a
            target="_blank"
            href="http://www.science.kmitl.ac.th/upload/news_img/5.1.2เอกสารรายละเอียดการประเมิน ITA 2563.pdf"
            rel="noreferrer noopener"
          >
            แนวทางการยกระดับค่าคะแนนการประเมินคุณธรรมและความโปร่งใสในการดำเนินงานของหน่วยงานภาครัฐ
            (ITA)&nbsp;
          </a>
          <br></br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -{' '}
          <a
            target="_blank"
            href="https://law.kmitl.ac.th/?page_id=3425"
            rel="noreferrer noopener"
          >
            มาตรการส่งเสริมคุณธรรมและความโปร่งใสภายในหน่วยงาน
          </a>
        </div>
        <br></br>

        <div>
          <b>6. ข่าวประชาสัมพันธ์</b>
          <br></br>&nbsp; &nbsp; &nbsp; 6.1 ข่าวประชาสัมพันธ์
          <br></br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -{' '}
          <a
            target="_blank"
            href="http://www.science.kmitl.ac.th"
            rel="noreferrer noopener"
          >
            เว็บไซต์คณะวิทยาศาสตร์
          </a>
          <br></br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -{' '}
          <a
            target="_blank"
            href="https://www.facebook.com/SciKmitl"
            rel="noreferrer noopener"
          >
            Facebook คณะวิทยาศาสตร์&nbsp;
          </a>
          <br></br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -{' '}
          <a
            target="_blank"
            href="http://kmitl.ac.th/th"
            rel="noreferrer noopener"
          >
            เว็บไซต์สถาบัน
          </a>
        </div>
        <br></br>

        <div>
          <b>7. บริการ</b>
          <br></br>&nbsp; &nbsp; &nbsp; 7.1 ช่องทางการรับฟังความคิดเห็น
          <br></br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -{' '}
          <a
            target="_blank"
            href="'https://www.science.kmitl.ac.th/page#/contact'"
          >
            ข้อมูลการติดต่อ&nbsp;
          </a>
          <br></br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -{' '}
          <a
            target="_blank"
            href="http://www.science.kmitl.ac.th/page#/dean"
            rel="noreferrer noopener"
          >
            ติดต่อร้องเรียน ระดับคณะ
          </a>
          <br></br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -{' '}
          <a
            target="_blank"
            href="https://osda.science.kmitl.ac.th/"
            rel="noreferrer noopener"
          >
            บริการถามตอบปัญหา
          </a>
        </div>

        <div className="relative mt-5 mb-5 h-[500px] text-center">
          <Image
            css={{
              objectFit: 'contain',
            }}
            src="https://www.science.kmitl.ac.th/apiUpload/news_pic/LZfsPURWS8Sh1640676660401.png"
            alt="science kmitl"
            fill
            sizes="(min-width: 0) 100vw"
          />
        </div>
      </Container>

      <style jsx scoped>{`
        a {
          font-size: inherit !important;
          color: #fd600e !important;
        }

        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  )
}

export default ItaPage
