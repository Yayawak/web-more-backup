import { breadcrumbRoutes } from '@/constants/breadcrumb'
import { CustomProps } from '@/types/component-props'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useEffect, useMemo, useState } from 'react'

interface IBreadcrumbsProps {
  replaces?: string[]
}

interface ICompliedBreadcrumbs {
  name: string
  path: string
}

const Breadcrumbs: FC<CustomProps<IBreadcrumbsProps>> = ({
  replaces,
  className,
}) => {
  const router = useRouter()

  const paths = useMemo(() => {
    return router.pathname
      .split('/')
      .slice(1)
      .map((e) => '/' + e)
  }, [router])

  const [complied, setComplied] = useState<ICompliedBreadcrumbs[]>([])

  useEffect(() => {
    let tmp = breadcrumbRoutes
    let pathIndex = 0
    const tmpComplied: ICompliedBreadcrumbs[] = [
      {
        name: 'หน้าหลัก',
        path: '/',
      },
    ]
    let replaceIndex = 0

    while (pathIndex < paths.length && tmp[paths[pathIndex]]) {
      const path = paths[pathIndex]
      let name = tmp[path].name

      if (name === '?' && replaces && replaces[replaceIndex]) {
        name = replaces[replaceIndex]
        replaceIndex++
      }

      tmpComplied.push({
        name,
        path: '/' + paths[pathIndex],
      })

      if (breadcrumbRoutes[path] && breadcrumbRoutes[path].children) {
        tmp = breadcrumbRoutes[path].children!
      } else {
        break
      }

      pathIndex++
    }

    setComplied(tmpComplied)
  }, [])

  return (
    <div className={className}>
      {complied.map((set, i) => (
        <>
          <Link href={set.path}>
            <a>{set.name}</a>
          </Link>
          {i < complied.length - 1 && <span> &#62; </span>}
        </>
      ))}
    </div>
  )
}

export default Breadcrumbs
