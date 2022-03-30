import React from 'react';
import { animations, item } from "../animations/AnimatedPage.js";
import { motion } from "framer-motion";
import photo from "../photo/about-photo.jpg";

const techStack = ['Javascript ES6+', 'React.js', 'Node.js', 'Python', 'C++', 'HTML + CSS'];
const isMobile = window.innerWidth < 768;
const attributes = !isMobile ? animations : "none";
const items = !isMobile ? item : "none";

function About() {
    return (
        
            <motion.div variants={attributes} initial="hidden"
            animate="enter" exit="exit" transition="transition" className="About-Container">
                <div className="About-Paragraph">
                <motion.div variants={items}>
                    <img src={photo} className="image" alt="biography pic of Rina" style={{ height: "50vh"}}></img>
                </motion.div>
                <div className="words">
                <motion.div variants={items}>
                   <h3>I'm Rina. A girl in tech who loves to build!</h3>
                </motion.div>
                <motion.div variants={items}>
                <p>
                    I am currently studying Computer Science. During the pandemic, I realized
                    Dentisty was not the career for me and learned to code in my free time. I graduated with a BS in Human Physiology
                    in 2021 and began my journey as a Software engineer shortly after. 
                </p>
                <p>
                    I am into anything related to software engineering that requires creativity. But, I'm also into 
                    fullstack development, FinTech, and machine learning. In my free time, I enjoy PC games, the outdoors, lots of coffee,
                    and watching Ghibli films.
                </p>
                </motion.div>
                <motion.div variants={items}>
                <p>
                    Here are some recent technologies I've been working with:
                </p>
                </motion.div>
                <motion.ul variants={attributes}>
                    {techStack.map(tech => <motion.li key={tech} variants={items}>{tech}</motion.li>)}
                </motion.ul>
                </div>
                </div>
            </motion.div>
       
    
    );
}

export default About;