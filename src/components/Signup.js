import React,{Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/styles";
import Login from './Login'
import { Route,BrowserRouter as Router } from 'react-router-dom'
import { createHashHistory } from "history";

import myFirebase from '../firebase/firebase'

const history = createHashHistory();

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Vehicle Accident Detection
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const styles = () => ({
  body: {
    backgroundColor: "#fff"
  }
,
paper: {
  marginTop: 100,
  display: "flex",
  padding: 20,
  flexDirection: "column",
  alignItems: "center"
},

avatar: {
  marginLeft: "auto",
  marginRight: "auto",
  backgroundColor: "#f50057"
},
form: {
  marginTop: 1
},
errorText: {
  color: "#f50057",
  marginBottom: 5,
  textAlign: "center"
},
b1:{
  buttonMargin : 20
}

});
class Signup extends Component{
  constructor(props){
    super(props);
    this.signup = this.signup.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email : '',
      password : ''
    };
  }

handleChange(e) {
  this.setState({ [e.target.name]: e.target.value });
}

signup(e){
  e.preventDefault();
  myFirebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
  }).then((u)=>{console.log(u)})
  .catch((error) => {
      console.log(error);
    })
    history.go("/Login");
}


render(){
  const { classes }= this.props;
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper className = {classes.paper}>
        <Avatar className = {classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <hr style={{marginTop:"15px",marginBottom:"15px"}}/>
          
        <form className = {classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value = {this.state.email}
                onChange = {this.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value = {this.password}
                onChange = {this.handleChange}
              />
            </Grid>
          </Grid>
          <hr style={{marginTop:"15px",marginBottom:"15px"}}/>
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick = {this.signup}
          >
            Sign Up
          </Button>
          <hr style={{marginTop:"15px",marginBottom:"15px"}}/>
          <Grid container>
            <Grid item>
              <Link href="/Login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
        </Paper>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
  }
}

export default withStyles(styles)(Signup);