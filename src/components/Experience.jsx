import { motion } from 'framer-motion'
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { styles } from '../styles'
import { experiences } from '../constants'
import { textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'


function Experience() {
  return (
   <>
   <motion.div variants={textVariant()}>
     <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience</h2>
   </motion.div>
   </>
  )
}

export default SectionWrapper(Experience, "experience")
