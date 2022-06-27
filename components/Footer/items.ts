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
    path: '/about/history',
  },
  {
    title: 'KMITL Vision and Strategy',
    path: '/about/vision-and-strategy',
  },
  {
    title: 'Procurement',
    path: '/about/procurement',
  },
  {
    title: 'Authority and Responsibility',
    path: '/about/authority-and-responsibility',
  },
  {
    title: 'งาน ITA',
    path: '/about/ita',
  },
  {
    title: 'ช่องทางการร้องเรียน',
    path: '/about/complaint',
  },
]

export const contactItems: contactItem[] = [
  {
    mdiIconClass: 'mdi mdi-facebook',
    path: 'https://facebook.com',
  },
  {
    mdiIconClass: 'mdi mdi-youtube',
    path: 'https://youtube.com',
  },
  {
    mdiIconClass: 'mdi mdi-web',
    path: 'https://kmitl.ac.th',
  },
]
