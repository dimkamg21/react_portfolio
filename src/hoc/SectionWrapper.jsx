import {motion} from "framer-motion";
import {styles} from "../styles.js";
import {staggerContainer} from "../utils/motion.js";

const SectionWrapper = (Component, idName) => {
    return function hoc(props) {
        return (
            <motion.section
                id={idName}
                variants={staggerContainer()}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.25 }}
                className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
            >
                <Component props={props}/>
            </motion.section>
        )
    }
};

export default SectionWrapper;
