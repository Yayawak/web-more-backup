import { useRouter } from 'next/router'
import { useGetNewsByIdQuery } from '@/store/api/news/getNewsById'
import React from 'react'
//import { News } from '../../model/news_model'
import NewsCard from '@/components/Cards/News/NewsCard'

const GetNewsPageById = ({ data }: any) => {
  const image = String(data.message.news_file_topic).replace('public', '')
  return (
    <>
    <img src='image'></img>
  </>
  )
}

export async function getServerSideProps(context) {
  const router = useRouter()
  const id: any = router.query.id
  const { data, isLoading, isSuccess } = useGetNewsByIdQuery(id)
  console.log(data)
  return {
    props: { data },
  }
}

// const router = useRouter()
// const id: any = router.query.id
// const { data, isLoading, isSuccess } = useGetNewsByIdQuery(id)
// let image: string
// if (!isLoading && isSuccess && data != undefined) {
//   let test: string = String(data.message.news_file_topic).replace(
//     'public',
//     ''
//   )
//   // console.log(test)

//   if (test != undefined) {
//     image = `https://www.science.kmitl.ac.th${test}`
//     // console.log(image)
//   }
//   return (
//     <>
//       <div>{data.message.topicFull}</div>
//       {!isLoading && isSuccess && test != undefined ? (
//         <img src={image!}></img>
//       ) : (
//         <>Loading...</>
//       )}
//     </>
//   )
// }
// return <div>loading..</div>

export default GetNewsPageById
