import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import axstyle from "./css/axios.css";
import Button from "@material-ui/core/Button";





export default class SensorValues extends React.Component{

    constructor(props){
        super(props);
        this.state = {

            x1 : 333,
            y1 : 320,
            z1 : 282,
            sensordata : []

        }
    }
    handleData(data){
        let res = JSON.parse(data);
        this.setState({sensordata : res});
    }


    render(){

        return(
            <div className="sensor">
            <Container>

                <Grid Container>
                    <Grid item xs={12}>
                    <div className = "margin1">            
                            <hr style={{marginTop:"20px",marginBottom:"20px", marginLeft:"10px"}}/>
                            </div>
                        
                    <div className={axstyle.button}>
                            <Button  variant="outlined" color="black" onClick={this.handleLogout}>
                                SensorValues
                            </Button>
                            <div>
                                <ul>
                                    <li>X-Axis - {this.state.x1}° </li>
                                    <li>Y-Axis - {this.state.y1}° </li>
                                    <li>Z-Axis - {this.state.z1}° </li>
                                </ul>
                            </div>

                    </div>
                            <div className = "margin">            
                            <hr style={{marginTop:"10px",marginBottom:"10px"}}/>
                            </div>                                      
                    </Grid>
                </Grid>

            </Container>

        </div>
        );
    }

}