import { useGetNewsByIdQuery } from '@/store/api/news/getNewsById'
import React from 'react'
import { useEffect, useState } from 'react'
import Container from '@/components/Layout/Container'
import { useRouter } from 'next/router'
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs'
import Image from 'next/image'

interface INewsByIdPageProps {
  id: any
}

const NewsByIdPage = ({ id }: INewsByIdPageProps) => {
  const [datePreview, setDatePreview] = useState<string>('')
  const [newsFiles, setNewsFiles] = useState<string[]>([])
  // const router = useRouter()
  // console.log(router)

  const {
    data: newsData,
    isLoading: newsLoading,
    isSuccess: newsSuccess,
  } = useGetNewsByIdQuery(id)

  useEffect(() => {
    if (!newsLoading && newsSuccess) {
      const dateGmt: string[] = new Date(newsData.message.datetimePost)
        .toString()
        .split(' ')
      const date: string = `${dateGmt[2]} ${dateGmt[1]} ${dateGmt[3]}`
      setDatePreview(date)
      setNewsFiles([
        newsData.message.news_file_01,
        newsData.message.news_file_02,
        newsData.message.news_file_03,
      ])
    }
  }, [newsLoading, newsSuccess])
  return (
    <>
      {!newsLoading && newsSuccess ? (
        <Container className="my-[16px]">
          {newsSuccess && (
            <Breadcrumbs replaces={[newsData.message.topicFull]} />
          )}
          <p className="text-left text-3xl font-bold">
            {newsData.message.topicFull}
          </p>

          <p className="text-lg">{datePreview}</p>
          <div className="relative h-[400px] w-full my-[48px]">
            <Image
              className="object-contain"
              src={`https://www.science.kmitl.ac.th${String(
                newsData.message.news_file_topic
              ).replace('public', '')}`}
              alt="science kmitl"
              fill
              sizes="(min-width: 0) 100vw"
            ></Image>
          </div>

          <p
            className="mb-5 text-center"
            dangerouslySetInnerHTML={{ __html: newsData.message.detailFull }}
          ></p>
        </Container>
      ) : (
        <>Loading...</>
      )}

      {!newsLoading && newsSuccess && newsFiles.length > 0 ? (
        newsFiles
          .filter((news) => news != null)
          .map((news, i) => (
            <Container className="mt-16 mb-16" key={i}>
              <iframe className="w-full h-screen" src={`${news}`}></iframe>
            </Container>
          ))
      ) : (
        <></>
      )}
    </>
  )
}

export async function getServerSideProps(context) {
  const id = context.params.id
  return {
    props: {
      id: id,
    },
  }
}
export default NewsByIdPage
