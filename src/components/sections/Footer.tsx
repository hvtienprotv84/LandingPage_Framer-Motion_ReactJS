import moment from 'moment'

import { STRINGS, ARRAY } from '../../constants'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function Footer() {
    return (
        <div className='w-full bg-zinc-700 flex flex-row justify-between py-2 px-3 items-center'>
            <p className='text-xs'>© {moment().format('YYYY')} | {STRINGS.name}</p>

            <div className='flex flex-row gap-3'>
                {ARRAY.Stack.map((item, index) => (
                    <LazyLoadImage
                        key={index}
                        src={item.src}
                        width={20}
                        height={20}
                    />
                ))}
            </div>
        </div>
    )
}

export default Footer