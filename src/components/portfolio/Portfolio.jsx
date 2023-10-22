import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "React Commerce refers to the integration of the React.js framework, a leading JavaScript library for UI development, with eCommerce functionalities. Leveraging React's component-based architecture, developers can create dynamic and responsive online storefronts. Coupled with backend systems like Node.js, Strapi, or established eCommerce platforms such as Shopify and WooCommerce through APIs, a React Commerce solution can provide product listings, cart management, user authentication, secure payment processing, and order tracking. Tools like Next.js enhance SEO capabilities, while libraries like Redux manage application state, and GraphQL optimizes data fetching, resulting in efficient and user-friendly online shopping experiences.",
  },
  {
    id: 2,
    title: "Next.js Blog",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 3,
    title: "Vanilla JS App",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Vanilla JS offers the advantage of simplicity and flexibility, allowing developers to gain a deep understanding of how JavaScript operates at its core. It's lightweight, ensuring faster load times for web applications, and it's also cross-platform, ensuring compatibility with various browsers. While it may require more code to accomplish certain tasks compared to using a library or framework, it gives developers complete control over their code, promoting efficient and optimized solutions. Whether you're a beginner learning the basics of web development or a seasoned developer fine-tuning the performance of a web application, vanilla JS is an essential skill and an invaluable tool in your toolkit.",
  },
  {
    id: 4,
    title: "Music App",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "A Music Mood Matcher app would use advanced AI algorithms to analyze a user's current emotional state through speech patterns, facial recognition, or biometric data, and then curate a playlist tailored to either enhance or counteract that mood. By integrating with streaming services or an in-app music library, users receive real-time, personalized music recommendations to suit their current feelings, whether they seek solace, motivation, relaxation, or celebration. Additional features could include mood tracking over time, offering insights into emotional trends and suggesting music therapies for consistent mood improvement.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
