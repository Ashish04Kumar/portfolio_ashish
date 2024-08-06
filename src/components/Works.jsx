import { motion } from 'framer-motion'
import React from 'react'
import { Tilt } from 'react-tilt'
import { styles } from '../styles'
// import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn , textVariant} from '../utils/motion'


function Works() {
  return (
    <>
    <motion.div variants={textVariant()}>
     <p className={styles.sectionSubText}>My Projects</p>
      <h2 className={styles.sectionHeadText}>Projects.</h2>
   </motion.div>
    </>
  )
}

export default SectionWrapper(Works, "")