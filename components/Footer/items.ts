import { StaticImageData } from 'next/image'

import facebookLogo from '../../assets/logos/facebook-logo.png'
import youtubeLogo from '../../assets/logos/youtube-logo.png'
import worldLogo from '../../assets/logos/world-logo.png'

type aboutItem = {
  title: string
  path: string
}

type contactItem = {
  image: StaticImageData
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
    image: facebookLogo,
    alt: 'Facebook logo',
    path: 'https://facebook.com',
  },
  {
    image: youtubeLogo,
    alt: 'YouTube logo',
    path: 'https://youtube.com',
  },
  {
    image: worldLogo,
    alt: 'Website logo',
    path: 'https://kmitl.ac.th',
  },
]
