import { motion } from "framer-motion"
import { Tilt } from "react-tilt"
import { styles } from "../styles"
import { services } from "../constants"
 import { fadeIn, textVariant } from "../utils/motion"
 import { SectionWrapper } from "../hoc"

 const ServiceCard = ({ index, title, icon }) => {
   return (
     <Tilt className="xs:w-[250px] w-full ">
       <motion.div
         variants={fadeIn("right", "spring", index * 0.5, 0.75)}
         className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
       >
         <div
           options={{
             max: 45,
             scale: 1,
             speed: 450,
           }}
           className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
         >
           <img
             src={icon}
             alt="web-development"
             className="w-16 h-16 object-contain"
           />

           <h3 className="text-white text-[20px] font-bold text-center">
             {title}
           </h3>
         </div>
       </motion.div>
     </Tilt>
   )
 }

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled Software Developer with experience in SpringBoot, .Net Core and
        Django for backend frameworks, and expertise in frontend frameworks like React, Boostrap, and am in the process of increasing my
        Three.js proficiency. I'm a quick learner and collaborate closely with clients
        to create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className="mt-20 flex gap-4 justify-center">
        {/* LinkedIn Button */}
        <motion.a
          href="https://www.linkedin.com/in/tjrapodile/"
          target="_blank"
          rel="noopener noreferrer"
          variants={fadeIn("", "", 0.2, 1)}
          className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          LinkedIn Profile
        </motion.a>

        {/* Download CV Button */}
        <motion.a
          href="..\public\CV.pdf" // Make sure to update this with the actual path to your CV
          download="CV.pdf"
          variants={fadeIn("", "", 0.2, 1)}
          className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Download CV
        </motion.a>
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

    </>
  )
}

export default SectionWrapper(About, "about")