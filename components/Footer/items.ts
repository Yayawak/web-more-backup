import facebookLogo from '../../assets/logos/facebook-logo.png'
import youtubeLogo from '../../assets/logos/youtube-logo.png'
import phoneLogo from '../../assets/logos/phone-logo.png'
import mailLogo from '../../assets/logos/mail-logo.png'
import { StaticImageData } from 'next/image'

type aboutItem = {
  title: string
  path: string
}

type infoItem = {
  title: string
  dataline: string[]
}

type contactItem = {
  icon: StaticImageData
  alt: string
  path: string
}

export const aboutItems: aboutItem[] = [
  {
    title: 'History',
    path: '/about/history',
  },
  {
    title: 'KMITL Vision and Strategy',
    path: 'https://www.science.kmitl.ac.th/page#/resolution',
  },
  {
    title: 'ข้อมูลเปิดเผยสาธารณะ (ITA)',
    path: 'https://www.science.kmitl.ac.th/new/en/about/ita',
  },
  {
    title: 'ช่องทางการร้องเรียน',
    path: 'https://www.science.kmitl.ac.th/page#/contact',
  },
]

export const infoItems: infoItem[] = [
  {
    title: 'ที่อยู่',
    dataline: [
      'เลขที่ 1 ซอยฉลองกรุง 1 ถ.ฉลองกรุง',
      'แขวงลาดกระบัง เขตลาดกระบัง กรุงเทพฯ 10520',
    ],
  },
  {
    title: 'โทรศัพท์',
    dataline: ['02-329-8400 ถึง 8411'],
  },
  {
    title: 'โทรสาร',
    dataline: ['02-329-8412'],
  },
]

export const contactItems: contactItem[] = [
  {
    icon: phoneLogo,
    alt: 'phone logo',
    path: 'tel:023298400',
  },
  {
    icon: mailLogo,
    alt: 'mail logo',
    path: 'mailto:SCIENCE@kmitl.ac.th',
  },
  {
    icon: facebookLogo,
    alt: 'facebook logo',
    path: 'https://www.facebook.com/SciKmitl?_rdc=1&_rdr',
  },
  {
    icon: youtubeLogo,
    alt: 'youtube logo',
    path: 'https://www.youtube.com/channel/UCuU-IWCmc10r4DDRnyV4y6A',
  },
]
