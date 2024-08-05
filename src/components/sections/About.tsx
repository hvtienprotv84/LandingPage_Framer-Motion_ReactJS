import ImgMe from '../../assets/images/me2.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import { STRINGS } from '../../constants'
import '../../constants/styles/Styles.css'
import 'react-lazy-load-image-component/src/effects/blur.css';

function About() {
    return (
        <div className='aboutContainer'>
            <p className='aboutTitle'>
                {STRINGS.sectionTitleI}
            </p><br/><br/>

            <div className='aboutImgContainer snapScroll'>
                <LazyLoadImage
                    src={ImgMe}
                    width={600}
                    height={600}
                    className='aboutImg'
                    effect="blur"
                    wrapperProps={{
                        style: {transitionDelay: "1s"},
                    }}
                    draggable={false}
                    alt=''
                />
            </div>

            <p className='aboutDesc'>
                {STRINGS.aboutDesc}
            </p>
        </div>
    )
}

export default About