import BaseButton from '@/components/Buttons/Base/BaseButton'
import NewsCard from '@/components/Cards/News/NewsCard'
import Container from '@/components/Layout/Container'
import { useGetHomeNewsQuery } from '@/store/api/news/getHomeNews'
import { Rounded } from '@/types/rounded'
import Link from 'next/link'
import IndexSectionTitle from './SectionTitle'

const IndexNews = () => {
  const { data, isLoading, isSuccess } = useGetHomeNewsQuery(8)

  return (
    <>
      <Container className="mt-[64px] mb-[16px]">
        <IndexSectionTitle>ข่าวสาร</IndexSectionTitle>

        {/* <div className="flex gap-[8px] flex-wrap">
          {newsTypes.map((e) => (
            <div
              key={e}
              className="rounded-[10px] px-[16px] py-[4px] border-[1px] border-black cursor-pointer"
            >
              {e}
            </div>
          ))}
        </div> */}
      </Container>

      <Container className="news-cards grid justify-between gap-[16px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex-wrap">
        {!isLoading && isSuccess ? (
          data.message.map((news) => (
            <NewsCard
              key={news.newsId}
              imageUrl={`https://www.science.kmitl.ac.th${news.news_file_topic
                .replace('public', ' ')
                .trim()}`}
              category={[news.resourceName]}
              title={news.topicFull}
              date={news.datetimepost_Preview}
              read={`/news/${news._id}`}
            />
          ))
        ) : (
          <>Loading...</>
        )}
      </Container>

      <Container>
        <Link href={`/news`}>
          <a>
            <BaseButton
              className="mx-auto mt-[48px] mb-[32px]"
              roundedType={Rounded.CUSTOM}
              rounded={8}
              backgroundColor="#FF7C32"
              elevation={false}
            >
              ข่าวทั้งหมด
            </BaseButton>
          </a>
        </Link>
      </Container>
    </>
  )
}

export default IndexNews
