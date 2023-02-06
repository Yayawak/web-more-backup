import Container from '@/components/Layout/Container'
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs'

const HistoryPage = () => {
  return (
    <>
      <Container className="my-[16px]">
        <Breadcrumbs />
        <h1 className="mt-[16px] mb-3 text-center text-3xl font-bold">
          รู้จักคณะวิทยาศาสตร์
        </h1>
        <div className="container text-center">
          <h1 className="text-left text-2xl font-bold">ประวัติความเป็นมา</h1>
          <hr></hr>
          <ul className="timeline">
            <li>
              <div className="timeline-badge">
                <a>
                  <i className="fa fa-circle" id=""></i>
                </a>
              </div>
              <div className="timeline-panel timeline-panel-left">
                <div className="timeline-heading">
                  <h4>เริ่มก่อตั้ง</h4>
                </div>
                <div className="timeline-body">
                  <img
                    loading="lazy"
                    width="80%"
                    className="img-raised img-fluid rounded"
                    src="https://campus.campus-star.com/app/uploads/2016/11/KMITL-2.jpg"
                  />
                  <p className="timelineDescription">
                    คณะวิทยาศาสตร์เริ่มก่อตั้งขึ้นในปี พ.ศ. 2520
                    โดยเป็นส่วนหนึ่งของคณะครุศาสตร์อุตสาหกรรม และ วิทยาศาสตร์
                    ดำเนินการสอนวิชาพื้นฐานทางวิทยาศาสตร์ และ คณิตศาสตร์
                    ให้กับนักศึกษาระดับปริญญาตรีทุกหลักสูตรในสถาบันฯ
                  </p>
                </div>
                <div className="timeline-footer">
                  <p className="text-right">พ.ศ. 2520</p>
                </div>
              </div>
            </li>

            <li className="timeline-inverted">
              <div className="timeline-badge">
                <a>
                  <i className="fa fa-circle" id=""></i>
                </a>
              </div>
              <div className="timeline-panel timeline-panel-right">
                <div className="timeline-heading">
                  <h4>เริ่มเปิดรับนักศึกษา</h4>
                </div>
                <div className="timeline-body">
                  <img
                    loading="lazy"
                    width="80%"
                    className="img-raised img-fluid rounded"
                    src="https://www.science.kmitl.ac.th/assets/img/sciKmitl/1.jpg"
                  />
                  <p className="timelineDescription">
                    ในปีการศึกษา 2525
                    ได้เปิดรับนักศึกษาระดับปริญญาตรีเป็นรุ่นแรก
                    ในหลักสูตรวิทยาศาสตรบัณฑิตสาขาเคมีอุตสาหกรรม,
                    ฟิสิกส์ประยุกต์ และ สถิติประยุกต์ และในปีการศึกษา 2527
                    และปีการศึกษา 2528
                    ได้เปิดรับนักศึกษาระดับปริญญาตรีสาขาคณิตศาสตร์ประยุกต์และสาขาเทคโนโลยีชีวภาพ
                  </p>
                </div>
                <div className="timeline-footer">
                  <p className="text-right">พ.ศ. 2525</p>
                </div>
              </div>
            </li>

            <li>
              <div className="timeline-badge">
                <a>
                  <i className="fa fa-circle" id=""></i>
                </a>
              </div>
              <div className="timeline-panel timeline-panel-left">
                <div className="timeline-heading">
                  <h4>จัดตั้งคณะวิทยาศาสตร์</h4>
                </div>
                <div className="timeline-body">
                  <img
                    loading="lazy"
                    width="80%"
                    className="img-raised img-fluid rounded"
                    src="https://www.science.kmitl.ac.th/assets/img/sciKmitl/2.jpg"
                  />
                  <p className="timelineDescription">
                    จากการขยายภาระหน้าที่ความรับผิดชอบ
                    จึงได้มีพระราชกฤษฎีกาจัดตั้งคณะวิทยาศาสตร์ขึ้น เมื่อวันที่ 8
                    ธันวาคม 2531
                    และได้ขยายการผลิตบัณฑิตระดับปริญญาตรีในสาขาอื่นๆ
                    รวมทั้งเปิดรับนักศึกษาระดับปริญญาโทและปริญญาเอกอีกด้วย
                  </p>
                </div>
                <div className="timeline-footer">
                  <p className="text-right">8 ธันวาคม 2531</p>
                </div>
              </div>
            </li>

            <li className="timeline-inverted">
              <div className="timeline-badge">
                <a>
                  <i className="fa fa-circle" id=""></i>
                </a>
              </div>
              <div className="timeline-panel timeline-panel-right">
                <div className="timeline-heading">
                  <h4>เข้าสู่หน่วยงานในกำกับของรัฐ</h4>
                </div>
                <div className="timeline-body">
                  <img
                    loading="lazy"
                    width="80%"
                    className="img-raised img-fluid rounded"
                    src="https://www.science.kmitl.ac.th/assets/img/sciKmitl/3.jpg"
                  />
                  <p className="timelineDescription">
                    สถาบันฯ มีฐานะเป็นหน่วยงานในกำกับของรัฐ
                    ซึ่งไม่เป็นส่วนราชการตามกฎหมายว่าด้วยระเบียบบริหารราชการแผ่นดิน
                    กฎหมายว่าด้วยระเบียบบริหารราชการกระทรวงศึกษาธิการ
                    และกฎหมายว่าด้วยการปรับปรุงกระทรวง ทบวง กรม
                    และไม่เป็นรัฐวิสาหกิจตามกฎหมายว่าด้วยวิธีการงบประมาณ
                    และกฎหมายอื่น
                    ตามพระราชบัญญัติสถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง
                    พ.ศ. 2551
                  </p>
                </div>
                <div className="timeline-footer">
                  <p className="text-right">8 มีนาคม พ.ศ. 2551</p>
                </div>
              </div>
            </li>

            <li>
              <div className="timeline-badge">
                <a>
                  <i className="fa fa-circle" id=""></i>
                </a>
              </div>
              <div className="timeline-panel timeline-panel-left">
                <div className="timeline-heading">
                  <h4>จัดตั้งส่วนงาน</h4>
                </div>
                <div className="timeline-body">
                  <img
                    loading="lazy"
                    width="80%"
                    className="img-raised img-fluid rounded"
                    src="https://www.science.kmitl.ac.th/assets/img/sciKmitl/4.jpg"
                  />
                  <p className="timelineDescription">
                    มีการจัดตั้งส่วนงานในสถาบันตามประกาศในราชกิจจานุเบกษา วันที่
                    14 กรกฎาคม พ.ศ. 2551 และส่วนงานวิชาการระดับคณะ
                    โดยมีการแบ่งหน่วยงานภายในตามประกาศสถาบัน พ.ศ. 2552 ดังนี้
                  </p>
                  <p className="timelineDescription">
                    1. ส่วนสนับสนุนวิชาการ
                    <br></br> 2. ส่วนวิชาการ ประกอบด้วย
                    <br></br> - สาขาวิชาคณิตศาสตร์
                    <br></br> - สาขาวิชาวิทยาการคอมพิวเตอร์
                    <br></br> - สาขาวิชาเคมี
                    <br></br> - สาขาวิชาชีววิทยา
                    <br></br> - สาขาวิชาฟิสิกส์
                    <br></br> - สาขาวิชาสถิติ
                    <br></br> - ศูนย์เครื่องมือวิทยาศาสตร์
                  </p>
                </div>
                <div className="timeline-footer">
                  <p className="text-right">14 กรกฎาคม พ.ศ. 2551</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </Container>
      <Container className="my-[16px]">
        <div className="container">
          <h1 className="text-2xl font-bold">
            ปรัชญา-ปณิธาน-วิสัยทัศน์-พันธกิจ
          </h1>
          <br></br>
          <div className="wrapper">
            <div className="line"></div>
            <div className="text-xl font-bold">ปรัชญา</div>
            <div className="text-md">
              &quot; การศึกษา วิจัย
              ด้านวิทยาศาสตร์และเทคโนโลยีเป็นรากฐานที่ดีของการพัฒนาประเทศ &quot;
            </div>
          </div>
          <div className="wrapper">
            <div className="line"></div>
            <div className="text-xl font-bold">วิสัยทัศน์</div>
            <div className="text-md">
              &quot; เป็นเลิศทางวิทยาศาสตร์ประยุกต์ เพื่ออุตสาหกรรมและ
              การพัฒนาที่ยั่งยืน ในปี 2567 &quot;
            </div>
          </div>
          <div className="wrapper">
            <div className="line"></div>
            <div className="text-xl font-bold">ปณิธาน</div>
            <div className="text-md">
              &quot; มุ่งมั่นให้การศึกษาและวิจัย
              เพื่อผลิตทรัพยากรมนุษย์ที่มีความรู้ทางด้านวิทยาศาสตร์และเทคโนโลยี
              ควบคู่จริยธรรม และรักษาไว้ซึ่งศิลปวัฒนธรรมอันดีของประเทศ &quot;
            </div>
          </div>
          <div className="wrapper">
            <div className="line"></div>
            <div className="text-xl font-bold">พันธกิจ</div>
            <div className="text-md">
              <div className="wrapper2">
                <div>
                  ● สร้างองค์ความรู้ทางวิทยาศาสตร์ระดับสากล เพื่อการพัฒนา
                  ที่ยั่งยืน
                </div>
                <div>
                  ● พัฒนาทรัพยากรมนุษย์ด้านวิทยาศาสตร์ประยุกต์ ที่มีความรู้
                  ความสามารถทั้งทฤษฎีและปฏิบัติ ตอบโจทย์ อุตสาหกรรม
                  และความต้องการของประเทศ
                </div>
                <div>
                  ● ถ่ายทอดองค์ความรู้ และเทคโนโลยีสู่ภาคอุตสาหกรรม ชุมชน
                  และสังคม
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <style jsx scoped>{`
        .wrapper {
          display: grid;
          grid-template-columns: 5% 10% 60%;
        }
        .wrapper2 {
          display: grid;
          grid-template-columns: 100%;
        }
        .line:before {
          top: 0;
          bottom: 0;
          position: absolute;
          content: ' ';
          width: 8px;
          background: #ff7c32;
          margin-left: -1.5px;
        }
        .line {
          text-align: left;
          list-style: none;
          padding: 25px 0;
          position: relative;
          font-weight: 300;
        }
        .container {
          max-width: 1024px;
        }
        .timeline > li.timeline-inverted > .timeline-panel:after {
          border-left-width: 0;
          border-right-width: 14px;
          left: -14px;
          right: auto;
        }
        .timeline > li > .timeline-panel:after {
          position: absolute;
          top: 27px;
          right: -14px;
          display: inline-block;
          border-top: 14px solid transparent;
          border-left: 14px solid #ffffff;
          border-right: 0 solid #ffffff;
          border-bottom: 14px solid transparent;
          content: ' ';
        }
        .timeline > li > .timeline-panel-left:after {
          position: absolute;
          top: 27px;
          right: -14px;
          display: inline-block;
          border-top: 14px solid transparent;
          border-left: 14px solid #ffffff;
          border-right: 0 solid #ffffff;
          border-bottom: 14px solid transparent;
          content: ' ';
        }
        .vl {
          border-left: 6px solid green;
          height: 500px;
        }
        .timeline > li.timeline-inverted > .timeline-panel:before {
          border-left-width: 0;
          border-right-width: 15px;
          left: -15px;
          right: auto;
        }
        .timeline > li > .timeline-panel:before {
          position: absolute;
          top: 26px;
          right: -15px;
          display: inline-block;
          border-top: 15px solid transparent;
          border-left: 15px solid #ffffff;
          border-right: 0 solid #ffffff;
          border-bottom: 15px solid transparent;
          content: ' ';
        }
        .timeline > li.timeline-inverted > .timeline-panel {
          float: right;
        }

        .timeline > li.timeline-inverted > .timeline-badge {
          left: -12px;
        }
        ul {
          list-style-type: disc;
        }
        html * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        * {
          -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
          -webkit-tap-highlight-color: transparent;
        }
        a {
          color: #f15c22;
          text-decoration: none;
          background-color: transparent;
          -webkit-text-decoration-skip: objects;
        }
        i {
          font-style: italic;
        }
        .timeline > li:before,
        .timeline > li:after {
          content: ' ';
          display: table;
        }
        .timeline > li:nth-child(2) {
          margin-top: 60px;
        }
        .timeline > li.timeline-inverted {
          float: right;
          clear: right;
        }
        .timeline > li {
          margin-bottom: 20px;
          position: relative;
          width: 50%;
          float: left;
          clear: left;
        }
        .timeline > li:after {
          clear: both;
        }
        .timeline > li:before,
        .timeline > li:after {
          content: ' ';
          display: table;
        }
        .timeline-footer p {
          margin-bottom: 0;
        }
        .text-right {
          text-align: right !important;
        }
        .timeline-footer {
          padding: 5px 15px;
          border-bottom-left-radius: 13px;
          border-bottom-right-radius: 13px;
          background-color: #ee992b;
        }
        p {
          display: block;
          margin-block-start: 1em;
          margin-block-end: 1em;
          margin-inline-start: 0px;
          margin-inline-end: 0px;
        }
        p {
          font-size: 14px;
          margin: 0 0 10px;
        }
        .timeline-body > p,
        .timeline-body > ul {
          padding: 10px 15px;
          margin-bottom: 0;
        }
        .timelineDescription {
          text-align: justify;
        }
        p {
          font-family: 'Kanit', sans-serif;
          font-size: 16px !important;
        }
        img {
          display: block;
          margin-left: auto;
          margin-right: auto;
          width: 80%;
        }
        user agent stylesheet img {
          overflow-clip-margin: content-box;
          overflow: clip;
        }
        img {
          vertical-align: middle;
          border-style: none;
        }
        .img-fluid {
          max-width: 100%;
          height: auto;
        }
        .rounded {
          border-radius: 6px !important;
        }
        .img-raised {
          box-shadow: 0 5px 15px -8px rgb(0 0 0 / 24%),
            0 8px 10px -5px rgb(0 0 0 / 20%);
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        .h1,
        .h2,
        .h3,
        .h4,
        .h5,
        .h6 {
          margin-bottom: 0.5rem;
          font-family: inherit;
          font-weight: 400;
          line-height: 1.1;
          color: inherit;
        }
        h4 {
          display: block;
          margin-block-start: 1.33em;
          margin-block-end: 1.33em;
          margin-inline-start: 0px;
          margin-inline-end: 0px;
          font-weight: bold;
        }
        h4,
        h5,
        h6,
        .h4,
        .h5,
        .h6 {
          margin-top: 10px;
          margin-bottom: 10px;
        }
        h4,
        .h4 {
          font-size: 1.125rem;
          line-height: 1.5em;
        }
        .timeline-heading h4 {
          font-weight: 600;
          font-size: 22px;
          padding: 0 15px;
          color: #ee992b;
        }
        .timeline > li > .timeline-panel:before {
          position: absolute;
          top: 26px;
          right: -15px;
          display: inline-block;
          border-top: 15px solid transparent;
          border-left: 15px solid #ee992b;
          border-right: 0 solid #ee992b;
          border-bottom: 15px solid transparent;
          content: ' ';
        }
        .timeline > li > .timeline-panel {
          width: calc(100% - 25px);
          width: -moz-calc(100% - 25px);
          width: -webkit-calc(100% - 25px);
          float: left;
          border: 1px solid #eeaa2b;
          border-radius: 15px;
          background: #ffffff;
          position: relative;
          box-shadow: 0 5px 15px -8px rgb(0 0 0 / 24%),
            0 8px 10px -5px rgb(0 0 0 / 20%);
        }
        .fa {
          height: 20px;
          width: 20px;
          background-color: #ee992b;
          border-radius: 50%;
          display: inline-block;
        }
        a,
        area,
        button,
        [role='button'],
        input,
        label,
        select,
        summary,
        textarea {
          touch-action: manipulation;
        }
        a {
          font-family: 'Kanit', sans-serif;
          font-size: 18px !important;
        }
        .timeline-badge > a {
          color: #ee992b !important;
        }
        a:not([href]):not([tabindex]) {
          color: inherit;
          text-decoration: none;
        }
        .timeline > li > .timeline-badge {
          color: #e9d326;
          width: 24px;
          height: 24px;
          line-height: 50px;
          text-align: center;
          position: absolute;
          top: 16px;
          right: -12px;
          z-index: 100;
        }
        .timeline > li:before,
        .timeline > li:after {
          content: ' ';
          display: table;
        }
        .timeline > li {
          margin-bottom: 20px;
          position: relative;
          width: 50%;
          float: left;
          clear: left;
        }
        .timeline {
          list-style: none;
          padding: 10px 0;
          position: relative;
          font-weight: 300;
        }
        .container {
          margin-right: auto;
          margin-left: auto;
          padding-right: 15px;
          padding-left: 15px;
          width: 100%;
        }
        .text-center {
          text-align: center !important;
        }
        div {
          display: block;
        }
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }
        hr {
          display: block;
          unicode-bidi: isolate;
          margin-block-start: 0.5em;
          margin-block-end: 0.5em;
          margin-inline-start: auto;
          margin-inline-end: auto;
          overflow: hidden;
          border-style: inset;
          border-width: 1px;
        }
        hr {
          margin-top: 1rem;
          margin-bottom: 1rem;
          border: 0;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
        }
        hr {
          box-sizing: content-box;
          height: 0;
          overflow: visible;
        }
        hr {
          border-top: 2px solid #ff9800a6;
          box-shadow: 0 2px 2px 0 #ffc64587, 0 3px 1px -2px rgb(0 0 0 / 20%),
            0 1px 5px 0 rgb(0 0 0 / 12%);
        }
        ol,
        ul,
        dl {
          margin-top: 0;
          margin-bottom: 1rem rem;
        }
        li {
          display: list-item;
          text-align: -webkit-match-parent;
        }
        html * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </>
  )
}

export default HistoryPage
