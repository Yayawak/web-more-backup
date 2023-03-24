import Image from 'next/image';
import { css } from '@emotion/react';

interface InfographicPageProps {
  Infographic: string;
}

function InfographicPage({ Infographic }: InfographicPageProps) {
  return (
    <>
      <div className="bg-orange-500 h-2 w-full"></div>
      <div className="bg-white p-6 rounded-b-lg">
        <div className="flex justify-center">
          <Image
            css={css`
              object-fit: contain;
              position: static !important;
            `}
            src={Infographic}
            alt="InfographicPage"
            fill
          />
        </div>
      </div>
    </>
  );
}

export default InfographicPage;
