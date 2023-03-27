const OrganizationChart = () => {
  return (
    <>
      <div className="container">
        <div className="flex justify-center">
          <h1 className="title">แผนผังองค์กร</h1>
        </div>
        <div className="level-1 box">
          <h1>คณะวิทยาศาสตร์ สจล.</h1>
        </div>
        <ol className="level-2-wrapper">
          <li>
            <h2 className="level-2 box">สำนักงานคณบดี</h2>
            <ol className="level-3-wrapper">
              <li>
                <ol className="level-4-wrapper">
                  <li>
                    <h4 className="level-4 box">
                      งานบริหารทรัพยากรกายภาพและ<br/>สิงแวดล้อม
                    </h4>
                  </li>
                  <li>
                    <h4 className="level-4 box">งานสารสนเทศและโสตทัศนูปกรณ์</h4>
                  </li>
                  <li>
                    <h4 className="level-4 box">งานการเงิน</h4>
                  </li>
                  <li>
                    <h4 className="level-4 box">งานพัสดุ</h4>
                  </li>
                  <li>
                    <h4 className="level-4 box">งานบริหารทรัพยากรบุคคล</h4>
                  </li>
                  <li>
                    <h4 className="level-4 box">งานบริหารงานทั่วไป</h4>
                  </li>
                  <li>
                    <h4 className="level-4 box">งานบริหารยุทธศาสตร์</h4>
                  </li>
                  <li>
                    <h4 className="level-4 box">งานประกันคุณภาพ</h4>
                  </li>
                  <li>
                    <h4 className="level-4 box">งานวิจัยและนวัตกรรม</h4>
                  </li>
                </ol>
              </li>
              <li>
                <ol className="level-4-wrapper">
                  <li>
                    <h4 className="level-4 box">งานกิจการต่างประเทศ</h4>
                  </li>
                  <li>
                    <h4 className="level-4 box">งานประชาสัมพันธ์</h4>
                  </li>
                  <li>
                    <h4 className="level-4 box">งานกิจการนักศึกษา</h4>
                  </li>
                  <li>
                    <h4 className="level-4 box">สารบรรณ</h4>
                  </li>
                  <li>
                    <h4 className="level-4 box">งานบริการวิชาการ</h4>
                  </li>
                  <li>
                    <h4 className="level-4 box">งานทะเบียนและหลักสูตร</h4>
                  </li>
                  <li>
                    <h4 className="level-4 box">
                      งานเอกสารการพิมพ์และ<br/>โครงการตำรา
                    </h4>
                  </li>
                </ol>
              </li>
            </ol>
          </li>
          <li>
            <ol className="level-5-wrapper">
              <h2 className="level-5 box">ภาควิชาฟิสิกส์</h2>
              <h2 className="level-5 box">ภาควิชาคณิตศาสตร์</h2>
              <h2 className="level-5 box">ภาควิชาวิทยาการคอมพิวเตอร์</h2>
              <h2 className="level-5 box">ภาควิชาสถิติ</h2>
              <h2 className="level-5 box">ภาควิชาชีววิทยา</h2>
              <h2 className="level-5 box">ภาควิชาเคมี</h2>
              <h2 className="level-5 box">ศูนย์เครื่องมือวิทยาศาสตร์</h2>
              <h2 className="level-5 box">
                ศูนย์วิเคราะห์ข้อมูลดิจิทัลอัจฉริยะ  พระจอมเกล้าลาดกระบัง
              </h2>
            </ol>
          </li>
        </ol>
      </div>

      <style jsx scoped>{`
        .container {
          max-width: 1400px;
          padding: 0 10px;
          margin: 30px auto 60px;
        }

        .title {
          margin: 10px auto;
          color: black;
          align-items: center;
        }

        .box {
          position: relative;
          box-sizing: border-box;
          justify-content: center;
          align-items: center;
          border: 5px solid #ffffff;
          border-radius: 30px;
          align-items: center;
          text-align: center;
        }

        h1,
        h2 {
          font-style: normal;
          font-weight: 700;
          line-height: 36px;
          color: #f2f2f2;
        }

        h4 {
          font-style: normal;
          font-weight: 700;
          line-height: 25px;
          color: #f2f2f2;
        }

        .level-1 {
          margin: 0 auto 40px;
          background: #f8560a;
          width: 260px;
        }

        .level-1::before {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 64px;
          background: #6a6a6a;
        }

        .level-2-wrapper {
          position: relative;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-column-gap: 100px;
        }

        .level-2-wrapper::before {
          content: '';
          position: absolute;
          top: 16px;
          left: 44.9%;
          width: 9.7%;
          height: 4px;
          background: #6a6a6a;
        }

        .level-2-wrapper::after {
          display: none;
          content: '';
          position: absolute;
          left: -20px;
          bottom: -20px;
          width: calc(100% + 20px);
          height: 4px;
          background: #6a6a6a;
        }

        .level-2-wrapper li {
          position: relative;
        }

        .level-2 {
          width: 560px;
          margin: 0 auto 40px;
          background: #facf06;
          top: 6%;
        }

        .level-2::before {
          content: '';
          position: absolute;
          top: 40%;
          left: 103%;
          transform: translateX(-50%);
          width: 20px;
          height: 4px;
          background: #6a6a6a;
        }
        .level-2::after {
          content: '';
          position: absolute;
          top: -60%;
          left: 104.5%;
          width: 3px;
          height: 40px;
          background: #6a6a6a;
        }

        .level-3-wrapper {
          position: relative;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          top: 4.5%;
          width: 580px;
          margin: 0 auto;
          left: -10px;
        }

        .level-4-wrapper {
          position: relative;
          width: 80%;
          margin-left: 60px;
        }

        .level-4-wrapper::before {
          content: '';
          position: absolute;
          top: -30px;
          left: -20px;
          width: 4px;
          height: calc(100% + 20px);
          background: #6a6a6a;
        }

        .level-4-wrapper li + li {
          margin-top: 20px;
        }

        .level-4 {
          font-weight: normal;
          font-color: #ffffff;
          background: #6a6a6a;
          max-width: 240px;
        }

        .level-4::before {
          content: '';
          position: absolute;
          top: 60%;
          left: -1%;
          transform: translate(-100%, -50%);
          width: 20px;
          height: 4px;
          background: #6a6a6a;
        }

        .level-5 {
          width: 560px;
          margin: 0 auto 30px;
          background: #facf06;
          top: 40px;
        }

        .level-5::before {
          content: '';
          position: absolute;
          top: 60%;
          left: -0.5%;
          transform: translate(-100%, -50%);
          width: 20px;
          height: 4px;
          background: #6a6a6a;
        }

        .level-5-wrapper {
          position: relative;
          width: 80%;
          margin-left: 30px;
        }

        .level-5-wrapper::before {
          content: '';
          position: absolute;
          top: 20px;
          left: -21px;
          width: 4px;
          height: calc(100% + 2px);
          background: #6a6a6a;
        }

        @media (max-width: 1420px) {
          .container {
            max-width: 800px;
          }

          .level-1 {
            width: 100%;
          }

          .level-1 {
            margin-bottom: 20px;
          }

          .level-1::before,
          .level-2::after {
            display: none;
          }

          .level-2::before {
            left: -3%;
          }

          .level-2 {
            margin: 0 0 30px;
          }

          .level-2-wrapper {
            display: block;
          }

          .level-2-wrapper {
            width: 90%;
            margin-left: 10%;
          }

          .level-2-wrapper::before {
            left: -21px;
            width: 4px;
            top: -20px;
            height: calc(100% + 43px);
          }

          .level-3-wrapper {
            margin: 0;
          }

          .level-5-wrapper {
            margin-left: 0px;
          }
        }
      `}</style>
    </>
  )
}
export default OrganizationChart
