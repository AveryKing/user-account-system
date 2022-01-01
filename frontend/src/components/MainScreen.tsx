import {Grid, Grow, Typography,AppBar, Container} from "@mui/material";
import Paper from "@mui/material/Paper";
import React from "react";
import PrimarySearchAppBar from "./NavBar";

export default function MainScreen(props: any) {
    return (

      <div style={{marginTop:-7,width:'100vw',marginLeft:-18}}>
            <PrimarySearchAppBar/>
        </div>



    )
}