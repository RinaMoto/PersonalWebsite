import React, {useState} from "react";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion';
import {AiFillGithub, AiOutlineTwitter} from "react-icons/ai";
import {SiHashnode} from "react-icons/si";
import MenuIcon from '@mui/icons-material/Menu';
import {Drawer, List, ListItem, ListItemText, makeStyles} from '@material-ui/core';
import './navbar.css';

const animations = {
    whileHover: {scale:1},
    whileTap: {scale: .95}
}

const useStyles = makeStyles({

    paper: {
      background: "#8B9FA9",
      width: 200
    }
  });

function Navbar() {
    const classes = useStyles();

    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    
    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    };

    return (
        <>
            <motion.div variants={animations} whileHover="whileHover" layoutId="underline" id="navbar">
                
                <nav>
                    
                        <ul className="list">
                            <li><Link to="/" className="items" >/Home</Link></li>
                            <li><Link to="/about" className="items">/about</Link></li>
                            <li><Link to="/creations" className="items">/creations</Link></li>
                            <li><Link to="/contact" className="items">/contact</Link></li>
                            <li className="logo">
                                <a href="https://rinamoto.hashnode.dev/" className="items"><SiHashnode/></a>
                                <a href="https://github.com/RinaMoto" className="items"><AiFillGithub/></a>
                                <a href="https://twitter.com/RinaTheUsagi" className="items"><AiOutlineTwitter /></a>
                            </li>
                        </ul>
                
                    
                    <div className="hamburger" onClick={toggleHamburger}>
                        <MenuIcon />
                    </div>
                    <div className="sideBar">
                    <Drawer classes={{ paper: classes.paper }} open={hamburgerOpen} onClose={() => setHamburgerOpen(false)}>
                        <List>
                            <Link to="/" style={{ textDecoration: 'none'}}>
                                <ListItem button>
                                <ListItemText disableTypography
                                    primary="Home"
                                    style={{ fontFamily: "Averia Serif Libre", color: "black", fontSize: '30px' }} />
                                </ListItem>
                            </Link>
                            
                            <Link to="/about" style={{ textDecoration: 'none' }}>
                                <ListItem button>
                                <ListItemText disableTypography
                                    primary="About"
                                    style={{ fontFamily: "Averia Serif Libre", color: "black", fontSize: '30px' }} />
                                </ListItem>
                            </Link>

                            <Link to="/creations" style={{ textDecoration: 'none' }}>
                                <ListItem button>
                                <ListItemText disableTypography
                                    primary="Creations"
                                    style={{ fontFamily: "Averia Serif Libre", color: "black", fontSize: '30px' }}></ListItemText>
                                </ListItem>
                            </Link>
                            
                            <Link to="/contact" style={{ textDecoration: 'none' }}>
                                <ListItem button>
                                <ListItemText disableTypography 
                                    primary="Contact" 
                                    style={{ fontFamily: "Averia Serif Libre", color: "black", fontSize: '30px' }}/>
                                </ListItem>
                            </Link>

                            <ListItem button component="a" href="https://rinamoto.hashnode.dev/">
                                <ListItemText disableTypography
                                    primary="HashNode"
                                    style={{ fontFamily: "Averia Serif Libre", color: "black", fontSize: '30px' }} />
                            </ListItem>

                            <ListItem button component="a" href="https://github.com/RinaMoto">
                                <ListItemText disableTypography
                                    primary="Github" 
                                    style={{ fontFamily: "Averia Serif Libre", color: "black", fontSize: '30px' }}/>
                            </ListItem>

                            <ListItem button component="a" href="https://twitter.com/RinaTheUsagi">
                                <ListItemText disableTypography
                                    primary="Twitter" 
                                    style={{ fontFamily: "Averia Serif Libre", color: "black", fontSize: '30px' }}/>
                            </ListItem>
                        </List>
                    </Drawer>
                    </div>
                </nav>
            </motion.div>
        </>
    );
}

export default Navbar;