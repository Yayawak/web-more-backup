interface DownloadCoursePageProps {
  DownloadCourse: string;
}

function DownloadCoursePage({ DownloadCourse }: DownloadCoursePageProps) {
  return (
      <>
        <div className='bg-orange-500 h-2 w-full'></div>
        <div className='bg-white p-6 rounded-b-lg'>
          <div className='flex justify-center'>
            <iframe 
              width="1080px" 
              height="608px" 
              src={DownloadCourse} 
              title="DownloadCourse" >
            </iframe>
          </div>
        </div>
      </>
    )
}

export default DownloadCoursePage;