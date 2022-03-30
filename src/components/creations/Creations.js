import React from 'react';
import creations from './Creations.json';
import {AiFillGithub} from "react-icons/ai";

import { animations, item } from "../animations/AnimatedPage.js";
import { motion } from "framer-motion";
import { Card,
    Grid,
    CardMedia,
    CardContent,
    CardActions,
    Button,
    Typography}     from '@material-ui/core';
 
const isMobile = window.innerWidth < 768;
const attributes = !isMobile ? animations : "none";
const items = !isMobile ? item : "none";

function Creations() {
    return (
            <div className="Creations-Container">
                <motion.div variants={attributes} initial="hidden"
                animate="enter" exit="exit" transition="transition">
                    <motion.div variants={items} className="title">
                        <h1>Creations</h1>
                    </motion.div>
                        
                            <Grid
                                container
                                direction="column"
                                justifyContent="center"
                                alignItems="center"
                                style={{minHeight: "90vh"}}
                            >
                            {creations.map((info) => {
                                return (
                                    <Grid item key={info.userId}>
                                        <motion.div variants={attributes}>
                                            <motion.div variants={items}>
                                                <Card 
                                                    elevation={5}
                                                    style={{ width: "80vw",  maxWidth: "700px", margin: "4vw"}}
                                                    key={info.userId}
                                                >
                                                <CardMedia
                                                    component="img"
                                                    style={{ paddingTop: "0%", maxHeight: "30vh", minHeight: '20vh'}}
                                                    image={info.image}
                                                    title="coding project"
                                                />
                                                    <CardContent >
                                                        <Typography gutterBottom variant="h5" component="h2" style={{fontFamily: "Averia Serif Libre"}}>
                                                            {info.name}
                                                        </Typography>
                                                        <Typography variant="body2" component="p" style={{fontFamily: "Averia Serif Libre"}}>
                                                            {info.description}
                                                        </Typography>
                                                    </CardContent>
                                                    <CardActions style={{padding: "20px"}}>
                                                        <Typography component="h3" color="primary" style={{fontFamily: "Averia Serif Libre"}}>
                                                            {info.languages}
                                                        </Typography>
                                                        <Button href={info.link}><AiFillGithub/></Button>
                                                    </CardActions>
                                                </Card>
                                            </motion.div>
                                        </motion.div>
                                    </Grid>
                                    )
                                })}
                            </Grid>
                   
                </motion.div>
            </div>
    );
}

export default Creations;