import { lazy } from 'react';
import { Fade } from 'react-awesome-reveal';
import { STRINGS, ARRAY } from '../../constants'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Footer = lazy(() => import('../../components/sections/Footer'))

function Socials() {
  return (
    <Fade className='lg:snap-always lg:snap-center'>
      <div className='flex flex-col items-center justify-center h-full mt-[15rem] mb-[10rem]'>
        <p className="font-regular text-white text-center text-4xl md:text-5xl lg:text-6xl">
          {STRINGS.sectionTitleIII}
        </p>

        <p className='my-8 mx-8 lg:mx-60 md:text-base lg:text-base md:mx-32 text-center font-extralight text-xs'>
          {STRINGS.socialDesc}
        </p>

        <div className='flex gap-7 lg:gap-10'>
          {ARRAY.Socials.map((item, index) => (
            <a href={item?.url} target='_blank'>
              <LazyLoadImage
                key={index}
                src={item.src}
                width={50}
                height={50}
                className='scale w-9 lg:w-12'
              />
            </a>
          ))}
        </div>
      </div>

      <Footer />
    </Fade>
  )
}

export default Socials