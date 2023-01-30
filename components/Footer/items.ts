import facebookLogo from '../../assets/logos/facebook-logo.png'
import youtubeLogo from '../../assets/logos/youtube-logo.png'
import worldLogo from '../../assets/logos/world-logo.png'

type aboutItem = {
  title: string
  path: string
}

type contactItem = {
  mdiIconClass: string
  path: string
}

export const aboutItems: aboutItem[] = [
  {
    title: 'History',
    path: 'https://www.science.kmitl.ac.th/page#/history',
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

export const contactItems: contactItem[] = [
  {
    mdiIconClass: 'mdi mdi-facebook',
    path: 'https://www.facebook.com/SciKmitl?_rdc=1&_rdr',
  },
  {
    mdiIconClass: 'mdi mdi-youtube',
    path: 'https://www.youtube.com/channel/UCuU-IWCmc10r4DDRnyV4y6A',
  },
  {
    mdiIconClass: 'mdi mdi-web',
    path: '/',
  },
]
