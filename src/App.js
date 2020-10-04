import React from 'react';
import logo from './logo.svg';
/*import './App.css';*/
import {Container, Box, Paper, Grid} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow:1
    },
    menuButton: {
        marginRight: theme.spacing(1)
    },
    title: {
        flexGrow:1
    },
    mainFeaturesPost: {
      position: "relative",
      color: theme.palette.common.white,
      marginBottom: theme.spacing(4),
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center"
    },
    overlay: {
      position: "absolute",
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      backgroundOverlay: "rgba(0,0,0,.3)"
    },
    mainFeaturesPostContent: {
      position: "relative",
      padding: theme.spacing(9)

    }
  }));


function App() {
    const classes = useStyles();

  return (
      <>
      <AppBar>
          <Container position="fixed">
              <Toolbar>
                  <IconButton edge="start"  color="inherit" aria-label="menu" className={classes.menuButton}>
                      <MenuIcon />

                  </IconButton>
                  <Typography variant="h6" className={classes.title}>Зубков Евгений Юрьевич</Typography>
                  <Box mr={3}>
                      <Button color="inherit" variant="outlined">Log In</Button>
                  </Box>
                  <Button color="secondary" variant="contained">Sign Up</Button>

              </Toolbar>

          </Container>

      </AppBar>

          <main>
              <Paper className={classes.mainFeaturesPost}
              style={{ backgroundImage: 'url(https://source.unsplash.com/random)'}}>
                <Container maxWidth="md">
                  <div className={classes.overlay}/>

                  <Grid container>
                    <Grid item md={8}>
                      
                      <div className={classes.mainFeaturesPostContent}>
                        <Typography
                          component="h1"
                          variant="h3"
                          color="inherit"
                          gutterBottom  
                        >
                          Зубков Евгений Юрьевич 
                          Web Developer 
                         </Typography> 
                        <Typography
                          component="h5"
                          color="inherit"
                          paragraph  
                        >
                          lorem Sunt aute voluptate anim eiusmod minim non excepteur consectetur voluptate.   
                        </Typography> 
                        <Button variant="contained" color="secondary">
                          Портфолио
                        </Button>
                      </div>
                    </Grid>
                  </Grid>
                </Container>
              </Paper>
          </main>

      </>


/*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Evgeniy's Zubkov site
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button variant="contained" color="primary">
          Primary
        </Button>
      </header>
    </div>
*/
  );
}

export default App;
