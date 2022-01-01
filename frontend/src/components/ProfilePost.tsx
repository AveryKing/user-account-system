import {Grid, Typography} from "@mui/material";
import Paper from "@mui/material/Paper";
import React from "react";

export default function ProfilePost(props:any) {
    return (
        <Grid item xs={10}>
            <Paper elevation={2}
                   sx={{
                       backgroundColor: "rgba(255,255,255,0.62)",
                       borderRadius: '10px'
                   }}>
                <div style={{margin: '5px'}}>
                    <Typography variant='h6'>Post</Typography>
                    <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ab adipisci aspernatur dicta enim eos ex facilis inventore
                        laborum molestiae optio provident quaerat quas quasi quia quis
                        repellat sunt voluptatibus, voluptatum.</Typography>

                </div>

            </Paper>
        </Grid>
    )
}