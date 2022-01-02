import {Grid, Typography} from "@mui/material";
import Paper from "@mui/material/Paper";
import React from "react";

export default function ProfilePost(props:any) {
    return (
        <Grid item xs={10}>
            <Paper elevation={1}
                   sx={{
                       backgroundColor: "rgba(255,255,255,0.62)",
                       borderRadius: '10px'
                   }}>
                <div style={{margin: '5px'}}>
                    <Typography variant='h6'>{props.username}</Typography>
                    <Typography>{props.post.content ? props.post.content : 'There was an error loading this post'}</Typography>

                </div>

            </Paper>
        </Grid>
    )
}