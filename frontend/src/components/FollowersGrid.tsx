import {Grid} from "@mui/material";
import React from "react";

export default function FollowersGrid(props:any) {
    return (
        <Grid container sx={{marginLeft:'0%'}} spacing={5}>
            <Grid item xs={12}>
                You have 6 followers
            </Grid>
            <Grid item xs={4}>
                Friend
            </Grid>
            <Grid item xs={4}>
                Friend
            </Grid>
            <Grid item xs={4}>
                Friend
            </Grid>
            <Grid item xs={4}>
                Friend
            </Grid>
            <Grid item xs={4}>
                Friend
            </Grid>
            <Grid item xs={4}>
                Friend
            </Grid>

        </Grid>
    )
}