import React from "react";
import Button from "@material-ui/core/Button";
import icon from './head-icon.png';
import { connect } from "react-redux";
import { logoutUser } from "../actions";
import {Route , IndexRoute} from 'react-router';
import { withStyles } from "@material-ui/styles";
import head from './css/head.css';
import Avatar from "@material-ui/core/Avatar";
import avatar from "./images/avatar-icon.png";



class Head extends React.Component{
    handleLogout = () => {
        const { dispatch } = this.props;
        dispatch(logoutUser());
      };

    render(){
        const { isLoggingOut, logoutError } = this.props;

        
        return(
            <div className={head.main}>
                <div class= "icon">
                    <img src={icon} />
                </div>
                <div className = "avatar">
                    <Avatar alt = "AJ" src={avatar} />
                </div>
                <div className = "button">
                    <Button  variant="outlined" color="primary" onClick={this.handleLogout}>
                        Logout
                    </Button>
                    {isLoggingOut && <p>Logging Out....</p>}
                    {logoutError && <p>Error logging out</p>}
                </div>
                <div className = "marginline">
                    <hr style={{marginTop:"10px",marginBottom:"10px"}}/>
                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
      isLoggingOut: state.auth.isLoggingOut,
      logoutError: state.auth.logoutError
    };
  }


export default withStyles(head)(connect(mapStateToProps)(Head));
