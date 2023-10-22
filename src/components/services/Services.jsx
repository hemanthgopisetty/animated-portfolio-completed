import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Decentralized Personal Health Records</h2>
          <p>
          With the rise of blockchain technology, creating a decentralized personal health record system can enable patients to have complete control over their medical data.
Implementation: Utilize blockchain to develop a decentralized application  where patients can securely store their medical data. Integrate with IoT devices to automatically update health metrics. Smart contracts can be used to give temporary access to doctors.
Benefits: Enhanced privacy, easy data portability, reduced data breaches, and empowerment of patients.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>AI-Powered Urban Farming Systems</h2>
          <p>
          As urbanization increases, the need for local and sustainable food sources becomes paramount. Using AI to optimize urban farming can lead to higher yields and better resource management.
Implementation: Design an AI system to monitor urban farm parameters like humidity, light, pH levels, etc. Using Machine Learning, the system can predict the best conditions for crops and adjust environmental factors automatically.
Benefits: Increased crop yield, sustainability, reduced resource wastage, and promotion of urban farming.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Personalized Education Platforms using Augmented Reality (AR)</h2>
          <p>
          Traditional education is often one-size-fits-all. With AR, personalized education experiences can be crafted to fit the individual learning styles of students.
Implementation: Develop an AR application tailored for educational content. The system will adapt content presentation based on a student's learning speed, preferred content type (visual, auditory, kinesthetic), and interest areas.
Benefits: Enhanced student engagement, better knowledge retention, and a shift from rote learning to experiential learning.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Sustainable Packaging Solutions using Bio-materials</h2>
          <p>
          Plastic pollution is a significant environmental concern. Biodegradable packaging solutions can be a game-changer.
Implementation: Research bio-materials, like mycelium (fungus roots) or algae-based materials, that can be molded into packaging shapes. The goal is to create packaging that's not just biodegradable, but also has a minimal carbon footprint during production.
Benefits: Reduction in plastic pollution, promotion of sustainable practices, and potential reduction in production costs in the long run.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
