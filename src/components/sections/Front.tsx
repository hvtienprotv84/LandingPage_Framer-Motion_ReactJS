// import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'
import { STRINGS, ARRAY } from '../../constants'
import { AuroraBackground } from '../backgrounds/Aurora'

import "../../constants/styles/Styles.css"

function Welcome() {
  return (
    <div className="snapScroll">
      <AuroraBackground
        className='background'
      >
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="motionContainer"
        >
          <div>
            <p className='greet'>
              {STRINGS.hello}
            </p>

            <div className='row'>
              <p className='name'>
                {STRINGS.name}
              </p>
            </div>

            <p className='typewriter'>
              <Typewriter
                words={ARRAY.Skills}
                loop={true}
                cursor
                cursorStyle='|'
                typeSpeed={100}
                cursorColor='white'
                cursorBlinking={true}
              />
            </p>

          </div>
        </motion.div>
      </AuroraBackground>
    </div>

  )
}

export default Welcome