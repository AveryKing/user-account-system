import {Button, ButtonGroup, Grid, Grow, Typography} from "@mui/material";
import Paper from "@mui/material/Paper";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import App from "./App";

export default function GreetUser(props: any)  {

    useEffect(() => {
        setTimeout(() => {
            ReactDOM.render(<App mode='mainScreen' />, document.getElementById('root'));
        }, 2500)
    })
    return (
        <Grow in={true} >
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

                <Grow in={true} timeout={2000}>
                    <Grid item xs={12} sx={{padding: '100px', borderRadius: '8px'}}>
                        <Grow in={true}>
                        <Typography align='center' variant='h2'
                                    sx={{fontFamily:'Ubuntu', fontWeight:'400',marginBottom: '15px', paddingTop: '5px', color: "rgba(0,0,0,0.65)"}}>
                            Hello, {props.name}!
                        </Typography>
                        </Grow>
                    </Grid>
                </Grow>
            </Paper>
        </Grid>
        </Grow>
    )
}