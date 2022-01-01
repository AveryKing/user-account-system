import {Grid, Grow, Typography} from "@mui/material";
import Paper from "@mui/material/Paper";
import React from "react";
import NavBar from "./NavBar";

export default function MainScreen(props: any) {
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

                <Grow in={true} timeout={2000}>
                    <Grid item xs={12} sx={{padding: '100px', borderRadius: '8px'}}>
                       <NavBar />
                    </Grid>
                </Grow>
            </Paper>
        </Grid>
    )
}