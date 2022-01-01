import Paper from "@mui/material/Paper";
import {Button, ButtonGroup, CircularProgress, Grid, Grow, Link, Typography} from "@mui/material";
import React from "react";
import App from "../App";
import ReactDOM from "react-dom";

export default function Welcome() {

    function openSignUp () {
        ReactDOM.render(<App mode='signUp' />, (document.getElementById('root')));
    }
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{minHeight: '80vh'}}
        >
        <Paper sx={{
            borderRadius: '15px',
            backgroundColor: "rgba(255,255,255,0.59)",
            paddingTop: '10px',
            paddingBottom: '10px'
        }} elevation={15}>

            <Grow in={true}>
                <Grid item xs={12} sx={{padding: '20px', borderRadius: '8px'}}>
                    <Typography align='center' variant='h5'
                                sx={{fontFamily:'Ubuntu', fontWeight:'bold',marginBottom: '15px', paddingTop: '5px', color: "rgba(0,0,0,0.65)"}}>
                        Welcome!
                    </Typography>
                    <br/>
                    <ButtonGroup>
                        <Button variant='outlined' onClick={openSignUp}>Sign Up</Button>
                        <Button variant='outlined'>Log In</Button>
                    </ButtonGroup>

                </Grid>
            </Grow>
        </Paper>
        </Grid>
    )
}