/* eslint-disable react-refresh/only-export-components */

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { motion } from 'framer-motion'
import { textVariant } from "../utils/motion";
import "./tech.css"

const Tech = () => {
  return (
    <>
     <motion.div variants={textVariant()} className="mb-2">
        <h2 className={styles.sectionHeadText}>Technical Skills</h2>
     </motion.div >
       <div className='flex items-center mt-5 mb-7'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div style={{ background: 'linear-gradient(90deg, #A855F7, #D946EF 75%, rgba(217, 70, 239, 0) 100%)', width: '80%', height: '4px' }} />
       </div>
    <div>
      <div className="scroll-container">
        <div className="marquee">
           <span className={`${styles.techSubText} mt-21 text-white-100`}>
           <span className="mr-4">JavaScript</span>
           <span className="mr-4">TypeScript</span>
           <span className="mr-4">Java</span>
           <span className="mr-4">Bootstrap</span>
           <span className="mr-4">Redux</span>
           <span className="mr-4">React.js</span>
           <span className="mr-4">Next.js</span>
           <span className="mr-4">Node.js</span>
           <span className="mr-4">MySQL</span>
           <span className="mr-4">Git</span>
           </span>
         </div>
      </div>
     </div>
       
    <div className='flex flex-row flex-wrap justify-center gap-10' >
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    </>
  );
};

export default SectionWrapper(Tech, "");