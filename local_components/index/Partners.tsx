import Container from '@/components/Layout/Container'
import Image from 'next/image'
import IndexSectionTitle from './SectionTitle'
import partnerEtat from '@/assets/images/partners/etat.png'
import partnerIsp from '@/assets/images/partners/isp.png'

const IndexPartners = () => {
  return (
    <>
      <Container>
        <IndexSectionTitle className="my-[16px]">
          Our partners
        </IndexSectionTitle>

        <div className="image relative mx-auto">
          <Image
            src={partnerEtat.src}
            alt="etat"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="image relative mx-auto mt-[32px]">
          <Image
            src={partnerIsp.src}
            alt="isp"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </Container>

      <style jsx scoped lang="scss">{`
        .image {
          max-width: 600px;
          height: 100px;
        }
      `}</style>
    </>
  )
}

export default IndexPartners
