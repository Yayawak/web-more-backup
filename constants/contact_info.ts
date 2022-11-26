interface IContactInfo {
  shortName?: string
  name: string
  engName: string
  position: string
  engPosition?: string
  email: string
  img: string
}

export const contactInfo: IContactInfo[] = [
  // คณบดี
  {
    shortName:'รศ.ดร. สุธี  ชุติไพจิตร',
    name: 'รองศาสตราจารย์ ดร. สุธี  ชุติไพจิตร',
    engName: 'Associate Professor Dr. Sutee Chutipaijit',
    position: 'คณบดี',
    engPosition: 'Dean',
    email: 'sutee.ch@kmitl.ac.th',
    img: 'https://www.science.kmitl.ac.th/assets/img/dean-office/sutee.png'
  },

  // รองคณบดี
  {
    shortName:'ผศ.ดร.กานต์ วงศาริยะ',
    name: 'ผู้ช่วยศาสตราจารย์ ดร. กานต์ วงศาริยะ',
    engName: 'Assistant Professor Dr. Karn Wongsariya',
    position: 'รองคณบดีฝ่ายบริหารงานทั่วไปและบริหารยุทธศาสตร์',
    engPosition: 'Vice Dean',
    email: 'karn.wo@kmitl.ac.th',
    img: 'https://www.science.kmitl.ac.th/assets/img/dean-office/karn.png'
  },
  {
    shortName: 'รศ.ดร.อาภาภรณ์ สกุลการะเวก',
    name: 'รองศาสตราจารย์ ดร. อาภาภรณ์ สกุลการะเวก',
    engName: 'Associate Professor Dr. Aparporn Sakulkalavek',
    position: 'รองคณบดีฝ่ายวิจัย นวัตกรรมและบริการวิชาการ',
    engPosition: ' Vice Dean',
    email: 'aparporn.sa@kmitl.ac.th',
    img: 'https://www.science.kmitl.ac.th/assets/img/dean-office/aparporn.png'
  },
  {
    shortName: 'รศ.ดร.โชคชัย กิตติวงศ์วัฒนา',
    name: 'รองศาสตราจารย์ ดร. โชคชัย กิตติวงศ์วัฒนา',
    engName: 'Associate Professor Dr. Chokchai Kittiwongwattana',
    position: 'รองคณบดีฝ่ายวิชาการ',
    engPosition: 'Vice Dean',
    email: 'chokchai.ki@kmitl.ac.th',
    img: 'https://www.science.kmitl.ac.th/assets/img/dean-office/chokchai.png'
  },
  {
    shortName: 'รศ.ดร.อภิลักษณ์  เอียดเอื้อ',
    name: 'รองศาสตราจารย์ ดร. อภิลักษณ์  เอียดเอื้อ',
    engName: 'Associate Professor Dr. Apiluck  Eiad-ua',
    position: 'รองคณบดีฝ่ายกิจการนักศึกษาและศิษย์เก่าสัมพันธ์ ',
    engPosition: 'Vice Dean',
    email: 'apiluck.ei@kmitl.ac.th',
    img: 'https://www.science.kmitl.ac.th/assets/img/dean-office/apiluk.png'
  },
  
  // ผู้ช่วยคณบดี
  {
    shortName: 'ผศ.ดร.ภาณุพล โขลนกระโทก',
    name: 'ผู้ช่วยศาสตราจารย์ ดร. ภาณุพล โขลนกระโทก',
    engName: 'Assistant Professor Dr. Bhanupol Klongratog',
    position: 'ผู้ช่วยคณบดีฝ่ายกายภาพ',
    engPosition: 'Assistant Dean',
    email: 'bhanupol.kl@kmitl.ac.th',
    img: 'https://www.science.kmitl.ac.th/assets/img/dean-office/bhanupol.png'
  },
  {
    shortName: 'ผศ.ดร.พัชราภรณ์ วีระชวนะศักดิ์',
    name: 'ผู้ช่วยศาสตราจารย์ ดร. พัชราภรณ์ วีระชวนะศักดิ์',
    engName: 'Assistant Professor Dr. Patcharaporn Weerachawanasak',
    position: 'ผู้ช่วยคณบดีฝ่ายกิจการพิเศษและประกันคุณภาพการศึกษา',
    engPosition: 'Assistant Dean',
    email: 'patcharaporn.we@kmitl.ac.th',
    img: 'https://www.science.kmitl.ac.th/assets/img/dean-office/patcharaporn.png'
  },
  {
    shortName: 'ผศ.ดร.วรภัทร์ สงวนไชยไผ่วงศ์',
    name: 'ผู้ช่วยศาสตราจารย์ ดร. วรภัทร์ สงวนไชยไผ่วงศ์',
    engName: 'Vorapat Sanguanchaipaiwong',
    position: 'ผู้ช่วยคณบดีฝ่ายบัณฑิตศึกษาและกิจการต่างประเทศ',
    engPosition: 'Assistant Dean',
    email: 'vorapat.sa@kmitl.ac.th',
    img: 'https://www.science.kmitl.ac.th/assets/img/dean-office/vorapat.png'
  },
  {
    shortName: 'รศ.ดร.การุณย์ สาดอ่อน',
    name: 'รองศาสตราจารย์ ดร. การุณย์ สาดอ่อน',
    engName: 'Associate Professor Dr. Karoon Sadorn',
    position: 'ผู้ช่วยคณบดีฝ่ายวิจัย นวัตกรรมและบริการวิชาการ',
    engPosition: 'Assistant Dean',
    email: 'karoon.sa@kmitl.ac.th',
    img: 'https://www.science.kmitl.ac.th/assets/img/dean-office/karoon.png'
  },
  {
    shortName: 'ดร.จตุพร มีศิลป์',
    name: 'ดร. จตุพร มีศิลป์',
    engName: 'Dr. Jatuporn Meesin',
    position: 'ผู้ช่วยคณบดีฝ่ายสื่อสารองค์กรและสารสนเทศ',
    engPosition: 'Assistant Dean',
    email: 'jatuporn.me@kmitl.ac.th',
    img: 'https://www.science.kmitl.ac.th/assets/img/dean-office/jatuporn.png'
  },

  // หัวหน้าภาค
  {
    shortName: 'ดร.วิชญะ ต่อวงศ์ไพชยนต์',
    name: 'ดร. วิชญะ ต่อวงศ์ไพชยนต์',
    engName: 'Dr. Witchaya Towongpaichayont',
    position: 'หัวหน้าภาควิชาวิทยาการคอมพิวเตอร์',
    engPosition: 'Head of Department',
    email: 'witchaya.to@kmitl.ac.th',
    img: 'https://www.science.kmitl.ac.th/assets/img/dean-office/witchaya.png'
  },
  {
    shortName: 'ผศ.ดร.ศุกระวรรณ มะเวชะ',
    name: 'ผู้ช่วยศาสตราจารย์ ดร. ศุกระวรรณ มะเวชะ',
    engName: 'Assistant Professor Dr. Sukrawan Mavecha',
    position: 'หัวหน้าภาควิชาคณิตศาสตร์',
    engPosition: 'Head of Department',
    email: 'sukrawan.ta@kmitl.ac.th',
    img: 'https://www.science.kmitl.ac.th/assets/img/dean-office/sukrawan.png'
  },
  {
    shortName: 'รศ.ดร.ภัทรียา ดำรงศักดิ์',
    name: 'รองศาสตราจารย์ ดร. ภัทรียา ดำรงศักดิ์',
    engName: 'Associate Professor Dr. Pattareeya Damrongsak',
    position: 'หัวหน้าภาควิชาฟิสิกส์',
    engPosition: 'Head of Department',
    email: 'pattareeya.da@kmitl.ac.th',
    img: 'https://www.science.kmitl.ac.th/assets/img/dean-office/pattareeya.png'
  },
  {
    shortName: 'ผศ.ดร.วรกฤต วรนันทกิจ',
    name: 'ผู้ช่วยศาสตราจารย์ ดร. วรกฤต วรนันทกิจ',
    engName: 'Assistant Professor Dr. Worakrit Worananthakij',
    position: 'หัวหน้าภาควิชาชีววิทยา',
    engPosition: 'Head of Department',
    email: 'worakrit.wo@kmitl.ac.th',
    img: 'https://www.science.kmitl.ac.th/assets/img/dean-office/worakrit.png'
  },
  {
    shortName: 'ดร.วรท โชติปฏิเวชกุล',
    name: 'ดร. วรท โชติปฏิเวชกุล',
    engName: 'Dr. Warot Chotpatiwetchkul',
    position: 'หัวหน้าภาควิชาเคมี',
    engPosition: 'Head of Department',
    email: 'warot.ch@kmitl.ac.th',
    img: 'https://www.science.kmitl.ac.th/assets/img/dean-office/warot.png'
  },
  {
    shortName: 'ผศ.ดร.สิทธิชัย เจริญเศรษฐศิลป์',
    name: 'ผู้ช่วยศาสตราจารย์ ดร. สิทธิชัย เจริญเศรษฐศิลป์',
    engName: 'Assistant Professor Dr. Sittichai Charoensettasilp',
    position: 'หัวหน้าภาควิชาสถิติ',
    engPosition: 'Head of Department',
    email: 'kcsittic.ch@kmitl.ac.th',
    img: '	https://www.science.kmitl.ac.th/assets/img/dean-office/sittichai.png'
  },

  // หัวหน้าศูนย์
  {
    shortName: 'ผศ.ดร.พิศาล สุขวิสูตร',
    name: 'ผู้ช่วยศาสตราจารย์ ดร. พิศาล สุขวิสูตร',
    engName: 'Assistant Professor Dr. Pisan Sukwisute',
    position: 'หัวหน้าศูนย์เครื่องมือวิทยาศาสตร์',
    engPosition: 'Head of Scientific Equipment Center',
    email: 'pisan.su@kmitl.ac.th',
    img: 'https://www.science.kmitl.ac.th/assets/img/dean-office/pisan.png'
  },
  {
    shortName: 'ดร.อัคเดช อุดมชัยพร',
    name: 'ดร. อัคเดช อุดมชัยพร',
    engName: 'Dr. Akadej  Udomchaiporn',
    position: 'หัวหน้าศูนย์ K-DAI',
    engPosition: 'Head of KMITL Digital Analytics and Intelligence Center',
    email: 'akadej.ud@kmitl.ac.th',
    img: 'https://www.science.kmitl.ac.th/assets/img/dean-office/akadej.png'
  },
  {
    shortName: 'นางประไพจิต ยั่งยืน',
    name: 'นางประไพจิต ยั่งยืน',
    engName: 'Prapaichit Yungyuen',
    position: 'ผู้อำนวยการส่วนสนับสนุนวิชาการ',
    engPosition: 'Director of Academic Support',
    email: 'prapaichit.yu@kmitl.ac.th',
    img: 'https://www.science.kmitl.ac.th/assets/img/dean-office/prapaichit.png'
  },

]
