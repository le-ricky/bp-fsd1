import React from 'react';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Tabs, Tab, makeStyles } from '@material-ui/core'
import CreateUser from '../src/components/createuser'
import ListUser from './components/listuser';
// import ListUser from '../pages/listusers'

function App() {

const [selectedTab, setSelectedTab] = React.useState(0);

const handleChange = (event, newValue) => {
  setSelectedTab(newValue);
};


const useStyles = makeStyles((theme) => ({
    // Load app bar information from the theme
    toolbarMargin: {
        ...theme.mixins.toolbar
    } 
  }));
  

const classes = useStyles();
  return (
    <Container maxWidth='sm'>
    <CssBaseline />
    <Grid container>
      <Grid item xs={12}>
          <AppBar position="fixed">
              {/* <Toolbar> */}
                  <Tabs variant="fullWidth" value={selectedTab} onChange={handleChange}>
                      <Tab label="Create User" />
                      <Tab label="List User" />
                  </Tabs>
              {/* </Toolbar> */}
          </AppBar>
      </Grid>
    </Grid>
      <div className={classes.toolbarMargin}/>
      {selectedTab === 0 && <CreateUser />}
      {selectedTab === 1 && <ListUser />}
    </Container>
  )
}
export default App;
