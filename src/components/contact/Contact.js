import {animations, item} from "../animations/AnimatedPage.js";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button, Box, TextField, makeStyles, Grid } from '@material-ui/core';
import { motion } from "framer-motion";

require('dotenv').config();

const isMobile = window.innerWidth < 768;
const attributes = !isMobile ? animations : "none";
const items = !isMobile ? item : "none";

const useStyles = makeStyles({
    field: {
        marginTop: 20,
        marginBotton: 20,
    }
})

export default function Contact() {
    var myKey = process.env.SERVICE;
    var template = process.env.TEMPLATE;
    var key = process.env.KEY;

    const classes = useStyles()

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(myKey, template, form.current, key)
        .then((result) => {
            console.log(result.text);
            alert("Thanks for the email!")
            e.target.reset()
        }, (error) => {
            console.log(error.text);
            alert("Email failed...", error)
        });
    };
    return (
        <motion.div variants={attributes} initial="hidden"
        animate="enter" exit="exit" transition="transition">
            <div className="Contact-Container">
            <motion.div variants={items} className="title">
                <h1>Contact</h1>
            </motion.div>
           
                <motion.div variants={items} className="form">
                <Grid
                    container
                    justifyContent="center"
                    direction="row"
                    alignItems="center"
                    >
                    <form className="contact-form" ref={form} onSubmit={sendEmail}>
                        <TextField 
                            required 
                            className={classes.field}
                            type="name" 
                            name="user_name" 
                            id="outlined-basic" 
                            label="Name" 
                            variant="outlined" 
                            fullWidth
                        />
                        <TextField 
                            required 
                            className={classes.field}
                            type="email" 
                            name="email" 
                            id="outlined-basic" 
                            label="Email" 
                            variant="outlined" 
                            fullWidth
                        />
                       
                        <TextField 
                            className={classes.field}
                            type="text" 
                            name="Subject" 
                            id="outlined-basic" 
                            label="Subject" 
                            variant="outlined" 
                            fullWidth
                        />
                  
                        <TextField 
                            required 
                            className={classes.field}
                            type="textArea" 
                            name="message" 
                            id="outlined-basic" 
                            label="Message" 
                            variant="outlined" 
                            multiline rows={4} 
                            fullWidth
                        />
                        <Box textAlign='center'>
                            <Button 
                                className={classes.field} 
                                type="submit" 
                                value="Send" 
                                variant="contained" 
                                color="primary"
                                style={{fontFamily: "Averia Serif Libre"}}
                            >Send</Button>
                        </Box>
                    </form>
                    </Grid>
                    </motion.div>
                </div>
                
        </motion.div>
    );
}
