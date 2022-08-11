import { useGetNewsByIdQuery } from '@/store/api/news/getNewsById'
import React from 'react'
import { useEffect, useState } from 'react'
import Container from '@/components/Layout/Container'

interface INewsByIdPageProps {
  id: any
}

const NewsByIdPage = ({ id }: INewsByIdPageProps) => {
  const [datePreview, setDatePreview] = useState<string>('')
  const [newsFiles, setNewsFiles] = useState<string[]>([])
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
        <div>
          <Container className="mt-16">
            <p className="text-left text-3xl font-bold">
              {newsData.message.topicFull}
            </p>
            <p className="text-lg">{datePreview}</p>
            <img
              className="mt-11 mb-11"
              src={`https://www.science.kmitl.ac.th${String(
                newsData.message.news_file_topic
              ).replace('public', '')}`}
            ></img>
            <p
              className="mb-5 text-center"
              dangerouslySetInnerHTML={{ __html: newsData.message.detailFull }}
            ></p>
          </Container>
        </div>
      ) : (
        <>Loading...</>
      )}

      {!newsLoading && newsSuccess && newsFiles != [] ? (
        newsFiles
          .filter((news) => news != null)
          .map((news) => (
            <div>
              <Container className="mt-16 mb-16">
                <iframe className="w-full h-screen" src={`${news}`}></iframe>
              </Container>
            </div>
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
