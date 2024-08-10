import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { Tilt } from 'react-tilt'
import { styles } from '../styles'
import { git, github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn , textVariant} from '../utils/motion'
import "./works.css"



const ProjectCard = ({index, name, description, tags, image,source_code_link_backend, source_code_link_frontend, deployed_site_link}) => {
  
const [isLinkOpen, setIsLinkOpen] = useState(false)

  return (
    // <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      
      
      <div className='border-glow-container'>
       <div  onClick={() => {
        window.open(deployed_site_link, "_blank")
       }}  style={{zIndex: '1', height: '98.8%', width: '98.1%'}} className="cursor-pointer flex flex-col" >
        <div className='relative w-full '>
          <img src={image} alt={name} className='w-full h-full object-cover ' style={{borderTopLeftRadius: '8px', borderTopRightRadius: '8px' , height: '250px'}} />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div   className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer' onClick={(e) => {
              e.stopPropagation()
              setIsLinkOpen(!isLinkOpen)

            }}>
              <img  src={github} alt='github' className="w-1/2 h-1/2 object-contain"/>
            </div>
           {isLinkOpen &&  <div className='custom-box' >
           <a  href={source_code_link_frontend} target="_blank" className='text-[17px leading-[30px]'>Frontend</a>
           <a href={source_code_link_backend} target="_blank" className='text-[17px leading-[30px]'>Backend</a>
            </div>}
            
          </div>
          
          <div className='absolute' style={{right:"10px", bottom: '10px'}}>
<p style={{color: 'black', fontSize: '10px', background: 'yellow', borderRadius: '10px', padding: '4px'}}>This site is still cooking!</p>
          </div>
        </div>
        <div className='w-full project-description'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
          <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
        </div>
      
         
       </div>
      </div>
      
      
    // </motion.div>
  )
}

function Works() {
  return (
    <>
    <motion.div variants={textVariant()}>
     <p className={styles.sectionSubText}>My Projects</p>
      <h2 className={styles.sectionHeadText}>Projects.</h2>
   </motion.div>
   <div className='w-full flex'>
    <motion.p variants={fadeIn("", "", 0.1,1)} className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
    </motion.p>
   </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "")