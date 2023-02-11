interface IContactStaffInfo {
  id?: number
  shortName?: string
  name: string
  engName: string
  position: string
  engPosition?: string
  tel: string
  email: string
  img: string
}

export const contactStaffInfo: IContactStaffInfo[] = [
  // สำนักงานคณบดี
  {
    id: 1,
    name: 'นาง ประไพจิต ยั่งยืน',
    engName: 'Mrs. Prapaichit Yungyuen',
    position: 'นักบริหารทรัพยากรบุคคล',
    tel: 'ext. 361, 3614',
    email: 'prapaichit.yu@kmitl.ac.th',
    img: 'https://www.science.kmitl.ac.th//apiUpload/staffPersonnelPicture/wH1F01KISz2l1594651914886.JPG'
  },
  {
    id: 2,
    name: 'นาง ประไพจิต ยั่งยืน',
    engName: 'Mrs. Prapaichit Yungyuen',
    position: 'นักบริหารทรัพยากรบุคคล',
    tel: 'ext. 361, 3614',
    email: 'prapaichit.yu@kmitl.ac.th',
    img: ''
  },
]