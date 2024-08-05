import { memo } from 'react';
import { Fade } from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { CardBody, CardContainer, CardItem } from '../ui/Card';

import { STRINGS } from '../../constants';
import IconGithub from '../../assets/icons/githubblack.svg'
import '../../constants/styles/Styles.css';
import 'react-lazy-load-image-component/src/effects/blur.css';

type Props = {
    item: any
    index: number
}

const ItemCards = memo(({ item, index }: Props) => {
    return (
        <Fade>
            <div className={`itemCardsContainer ${index != 0 && 'lg:my-[10em]'}`}
            >
                <CardContainer>
                    <CardBody className={`card-body w-auto h-auto ease-in-out px-5 `}>
                        <CardItem translateZ='50' className='w-full'>
                            <LazyLoadImage
                                src={item?.image}
                                width={item?.width}
                                height={item?.height}
                                className={`image imageCard`}
                                effect="blur"
                                wrapperProps={{
                                    style: {transitionDelay: "1s"},
                                }}
                                draggable={false}
                                alt='Preview'
                            />
                        </CardItem>
                    </CardBody>
                </CardContainer>

                <div className={`contentWrapper`}>
                    <div>
                        <p className='contentTitle'>
                            {item?.title}
                        </p>

                        {item?.url && (
                            <a 
                                className='scale linkButton'
                                target='_blank'
                                href={item?.url}
                            >
                                <LazyLoadImage
                                    src={IconGithub}
                                    className='w-4'
                                    draggable={false}
                                    alt='Preview'
                                />

                                <p className='linkText'>
                                    {STRINGS.github}
                                </p>
                            </a>
                        )}
                    </div>

                    <p className='text-white text-xs mt-2 font-extralight dark:text-white
                        md:text-base
                        lg:text-base lg:max-w-lg
                    '>
                        {item?.description}
                    </p>

                    <div className='mt-5 flex flex-row'>
                        {item?.icons?.map((item : any, index: number) => (
                            <LazyLoadImage
                                key={index}
                                src={item.src}
                                width={30}
                                height={30}
                                className='scale image mr-3 w-5 md:w-5 lg:w-6 '
                                alt='Stack'
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Fade>
    )
})

export default ItemCards
