import NewsCard from '@/components/Cards/News/NewsCard'
import { useGetHomeNewsQuery } from '@/store/api/news/getHomeNews'
import Container from '@/components/Layout/Container'
const NewsCategories = [
  { name: 'กิจกรรม' },
  { name: 'แข่งขัน' },
  { name: 'Giải trí' },
  { name: 'Sức khỏe' },
  { name: 'Giáo dục' },
  { name: 'Thế giới' },
]

const NewsDepartments = [
  { name: 'ภาควิชาวิทยาการคอมพิวเตอร์' },
  { name: 'ภาควิชาชีววิทยา' },
  { name: 'ภาควิชาฟิสิกส์' },
  { name: 'ภาควิชาสถิติ' },
  { name: 'ภาควิชาเคมี' },
  { name: 'ภาควิชาคณิตศาสตร์ประยุกต์' },
  { name: 'K-DAI' },
  { name: 'ศูนย์เครื่องมือ' },
]

const NewsPage = () => {
  const { data, isLoading, isSuccess } = useGetHomeNewsQuery(8)
  return (
    <>
      <div>
        <div>
          <a>หน้าหลัก</a>
          <a> &gt; </a>
          <a>ข่าวสาร ฝากพี่ฟิ้นทำ XD</a>
        </div>
      </div>
      <Container>
        <div className="flex justify-center text-2xl font-semibold mt-5 mb-10">
          ข่าวสาร และประชาสัมพันธ์
        </div>
      </Container>
      <Container>
        <div className=" flex justify-between pb-10">
          <div>
            <p className="pb-2">หมวดหมู่</p>
            <div>
              <select className="filterBox bg-white border border-gray-400 rounded-lg px-5 py-2">
                <option value="0">กรุณาเลือกหมวดหมู่</option>
                {NewsCategories.map((category, index) => (
                  <option key={index} value={index}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <p className="pb-2">สาขาวิชา</p>
            <div>
              <select className="filterBox tags-select-box bg-white rounded-lg border  border-gray-400 px-5 py-2">
                <option value="0">กรุณาเลือกสาขาวิชา</option>
                {NewsDepartments.map((category, index) => (
                  <option key={index} value={index}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <p className="pb-2 ">คำค้นหา</p>
            <div className="">
              <input
                className="filterBox bg-white border border-gray-400 rounded-lg px-3 py-[6px]"
                type="text"
                placeholder="กรุณากรอกคำค้นหา"
              />
            </div>
          </div>
          <div>
            <div>
              <p className="pb-2 ">&nbsp;</p>
            </div>
            <div>
              {/* Reset Button */}
              <button className="bg-[#FF7C32] rounded-lg px-4 py-[8px] text-white">
                ค้นหา
              </button>
            </div>
          </div>
        </div>
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
              read={`https://www.science.kmitl.ac.th/page#/news_each/${news._id}`}
            />
          ))
        ) : (
          <>Loading...</>
        )}
      </Container>

      <style jsx lang="scss">{`
        .tags-select-box {
        }

        .filterBox {
          width: 350px;
        }
      `}</style>
    </>
  )
}
export default NewsPage
