import { motion } from "framer-motion"
import { styles } from "../styles"
import { technologies } from "../constants/index.js";
import { BallCanvas } from "./canvas/index.js";
import SectionWrapper from "../hoc/SectionWrapper.jsx";

const Tech = () => {
    return (
        <>
            <motion.div className="w-min mb-20">
                <h2 className={styles.sectionSubText}>Here are the</h2>
                <h2 className={styles.sectionHeadText}>Technologies</h2>
                <h2 className={`${styles.sectionSubText} text-right`}>I use</h2>
            </motion.div>

            <div className="flex flex-row flex-wrap justify-center gap-10">
                {technologies.map((technology) => (
                  <div className="w-28 h-28" key={technology.name}>
                      <BallCanvas icon={technology.icon} />
                  </div>
              ))}
          </div>
        </>
    )
}

export default SectionWrapper(Tech, "tech")
