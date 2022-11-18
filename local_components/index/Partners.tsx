import Container from '@/components/Layout/Container'
import Image from 'next/image'
import IndexSectionTitle from './SectionTitle'
import partnerEtat from '@/assets/images/partners/etat.png'
import partnerIsp from '@/assets/images/partners/isp.png'
import partnerUni from '@/assets/images/partners/uni.png'
import IndexSectionLine from './SectionLine'

const IndexPartners = () => {
  return (
    <>
      <IndexSectionLine className="mt-14">Our Partners</IndexSectionLine>
      <Container>
        <div className="relative mx-auto mt-10 h-[143px]">
          <Image
            className="object-contain"
            src={partnerEtat.src}
            alt="etat"
            fill
            sizes="(min-width: 0) 100vw"
          />
        </div>

        <IndexSectionLine className="mt-4"></IndexSectionLine>

        <div className="mt-4 ml-20 flex w-[212px] flex-col">
          <div className="relative h-[37px] w-full">
            <Image
              className="object-contain"
              src={partnerIsp.src}
              alt="isp"
              fill
              sizes="(min-width: 0) 100vw"
            />
          </div>
          <div className="text-center text-[11px] font-bold -mt-2">
            <p>International Science Program</p>
            <p className="-mt-1">School of Science</p>
          </div>
        </div>
      </Container>
      <div className="relative h-[370px] mt-5">
          <Image
            className="object-contain"
            src={partnerUni.src}
            alt="Uni"
            fill
            sizes="(min-width: 0) 100vw"
          />
        </div>
    </>
  )
}

export default IndexPartners
