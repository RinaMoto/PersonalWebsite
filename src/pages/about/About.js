import React from 'react';
import { animations, item } from "../../components/animations/AnimatedPage.js";
import { motion } from "framer-motion";
import photo from "../photo/about-photo.jpg";
import './About.css';
import pdf from './Resume-Rina-2.pdf';
import { Button } from '@material-ui/core';

var aboutContent = require('./AboutText.json');
const isMobile = window.innerWidth < 768;
const attributes = !isMobile ? animations : "none";
const items = !isMobile ? item : "none";

function About() {
    return (
            <motion.div variants={attributes} initial="hidden"
            animate="enter" exit="exit" transition="transition" className="AboutContainer">
                <div className="AboutParagraph">
                    <motion.div variants={items}>
                        <img src={photo} className="image" alt="biography pic of Rina" ></img>
                    </motion.div>
                    <div className="AboutParagraphText">
                        <motion.div variants={items}>
                            <h3>{aboutContent.Heading}</h3>
                            <Button 
                                href={pdf} 
                                target="_blank" 
                                download="Rina-Easterday-Resume.pdf"
                                color="primary" 
                                variant="outlined"
                                style={{ border: '2px solid', fontWeight: 'bolder', borderRadius: '20px', fontFamily: "Averia Serif Libre"}}
                            >
                                Download Resume
                            </Button>
                        </motion.div>
                        <motion.div variants={items}>
                            <p>
                                {aboutContent.AboutText} 
                            </p>
                            <p>
                                {aboutContent.AboutText2}
                            </p>
                        </motion.div>
                        <motion.div variants={items}>
                            <p>
                                {aboutContent.TechStackHeading}
                            </p>
                        </motion.div>
                        <motion.ul variants={attributes} className="techStackContainer">
                            {aboutContent.TechStack.map(tech => <motion.li key={tech} variants={items}>{tech}</motion.li>)}
                        </motion.ul>
                    </div>
                </div>
            </motion.div>
       
    
    );
}

export default About;