import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, TextField, Button, CircularProgress } from '@material-ui/core';
import Navbar from './NavBar';


import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
//import Age from './Age';

const useStyles = makeStyles((theme) => ({
  root: {

    marginTop: 30,
    '& > *': {

    },
  },
  paper: {
    backgroundColor: 'lightBlue',
    marginTop: 50,
    width: 400,
    margin: '0 auto',
    textAlign: 'center',
    padding: 15

  },

  input: {
    width: '95%',
    marginBottom: 15
  }
}));


function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar />

      <Paper elevation={3} className={classes.paper}>
        <h1>Login</h1>

        <form className={classes.root} noValidate autoComplete="off">
          <TextField label="Enter your email" className={classes.input} />
          <TextField
            id="standard-password-input"
            label="Enter your password"
            type="password"
            autoComplete="current-password"
            className={classes.input}
          />

        <Button variant="contained" color="primary" className={classes.input}>
            Login
        </Button>

          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              className={classes.input}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

        </form>
        <CircularProgress value={60} />
      </ Paper>

    </div>
  );
}

export default App;
