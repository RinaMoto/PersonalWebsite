import React from 'react';
import creations from './Creations.json';
import './Creations.css';

import { animations, item } from "../../components/animations/AnimatedPage.js";
import { motion } from "framer-motion";
import { Card,
    Grid,
    CardMedia,
    CardContent,
    CardActions,
    CardActionArea,
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
                                spacing={2}
                                justifyContent="center" 
                                style={{marginTop: '2px'}}
                            >
                            {creations.map((project) => {
                                return (
                                    <Grid key={project.projectID}
                                        item 
                                        xs={11}
                                        sm={11}
                                        md={6}
                                        lg={4}>
                                        <motion.div variants={attributes}>
                                            <motion.div variants={items}>
                                                <Card 
                                                    elevation={5}
                                                    sx={{ height: "100%", minWidth: "400px", maxWidth: 345, margin: "4vw"}}
                                                    key={project.projectID}
                                                >
                                                    <CardActionArea
                                                        component="a"
                                                        href={project.link}
                                                    >
                                                        <CardMedia
                                                            component="img"
                                                            style={{ paddingTop: "0%", height: "40vh"}}
                                                            image={project.image}
                                                            title="coding project"
                                                        />
                                                        <CardContent  style={{ height: "13vh" }}>
                                                            <Typography gutterBottom variant="h5" component="h2" style={{fontFamily: "Averia Serif Libre"}}>
                                                                {project.projectName}
                                                            </Typography>
                                                            <Typography variant="body2" component="p" style={{fontFamily: "Averia Serif Libre"}}>
                                                                {project.description}
                                                            </Typography>
                                                        </CardContent>
                                                        <CardActions style={{padding: "20px"}}>
                                                            <Typography component="h3" color="primary" style={{fontFamily: "Averia Serif Libre"}}>
                                                                {project.languages}
                                                            </Typography>
                                                            
                                                        </CardActions>
                                                    </CardActionArea>
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