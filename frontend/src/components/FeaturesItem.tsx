import Paper from "@mui/material/Paper";
import {Grid, Typography} from "@mui/material";
import React from "react";

export default function FeaturesItem(props:any) {
    return (
        <Grid item xs={12} sm={6} lg={3} sx={{padding: '30px', borderRadius: '8px',textAlign:'center'}}>
            <Paper elevation={4}
                   sx={{ borderRadius: '15px',
                       backgroundColor: "rgba(255,255,255,0.62)"}}>
                <Typography variant='h6'>{props.title}</Typography>
                <Typography sx={{marginLeft:'5px'}}>Feature details here</Typography>
            </Paper>
        </Grid>
    )
}