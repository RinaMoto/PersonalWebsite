import { motion } from "framer-motion";
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import TextAnimation from '../../components/animations/TextAnimation';
import { animations, item } from "../../components/animations/AnimatedPage.js";
import EmailIcon from '@mui/icons-material/Email';
import { Button } from '@material-ui/core';
import './Home.css';

import lottie from 'lottie-web';
import {GiSpiderWeb} from 'react-icons/gi';
import { makeStyles } from "@material-ui/core/styles";

function Home() {
  const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
      [theme.breakpoints.down("xs")]: {
        minWidth: 32,
        paddingLeft: 8,
        paddingRight: 8,
        "& .MuiButton-startIcon": {
          margin: 0
        }
      }
    },
    buttonText: {
      [theme.breakpoints.down("xs")]: {
        display: "none",
        alignItem: "center"
      }
    }
  }));
  
  const isMobile = window.innerWidth < 768;
  const attributes = !isMobile ? animations : "none";
  const items = !isMobile ? item : "none";
  const heyMotion = !isMobile ? <TextAnimation/> : "Hey";
  const classes = useStyles();
  const container = useRef(null)

    useEffect(() => {
        lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: true,
        width: 4,
        height: 3,
        autoplay: true,
        animationData: require('../../components/lotties/noFace.json')
        })
    }, [])


    let navigate = useNavigate()
    const courses = () => {
        navigate("/contact");
    }

    return (
        <motion.div variants={attributes} initial="hidden"
        animate="enter" exit="exit" transition="transition" >
            <div className="Container">
                <div className="paragraph">
                    <motion.div variants={items}>
                    <h1>{heyMotion}<br /> <span className="Rina">Rina</span> here.</h1>
                    </motion.div>
                    <motion.div variants={items}>
                    <h3>Welcome to my corner of the internet <GiSpiderWeb /></h3>
                    <p>From pre-dental to software engineer. I have interest in full-stack dev, fintech, machine learning, and everything in between.</p>
                    <p>Currently looking for Internship + New Grad positions</p>
                    </motion.div>
                    <motion.div variants={items}>
                    <Button 
                        onClick={courses} 
                        color="primary"
                        variant="contained" 
                        className={classes.button} 
                        startIcon={<EmailIcon />}
                    >
                        <span className={classes.buttonText} style={{fontFamily: "Averia Serif Libre", zIndex: "5"}}>Say hello</span>
                    </Button>
                   
                    </motion.div>
                </div>
                <span>
                <motion.div variants={items}>
                    <div className="noFace" ref={container}></div>
                </motion.div>
                </span>
            </div>
        </motion.div>
    );
}

export default Home;