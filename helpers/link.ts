import { NextRouter } from 'next/router'

export const goToInternalPage = (router: NextRouter, path: string) => {
  router.push(path)
}

export const goToExternalPage = (url: string, newTab: boolean = false) => {
  window.open(url, newTab ? '_blank' : '_self')
}
