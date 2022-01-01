
import {Grid, Grow, Typography, AppBar, Container, Divider, Chip, Link, ListItem, List, Card, Drawer} from "@mui/material";
import Paper from "@mui/material/Paper";
import React from "react";
import FeaturesItem from "./FeaturesItem";
import PrimarySearchAppBar from "./NavBar";

export default function MainScreen(props: any) {
    return (

    <Grow in={true}>
            <div>
            <div style={{marginTop: -7, width: '100vw', marginLeft: -18}}>
                <PrimarySearchAppBar/>
            </div>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"

                    style={{minHeight: '80vh'}}
                >
                    <Paper sx={{
                        marginTop:'0.5%',
                        width:'100%',
                        height:'100%',
                        borderRadius: '15px',
                        backgroundColor: "rgba(255,255,255,0.59)",
                        paddingTop: '10px',
                        paddingBottom: '10px',
                    }} elevation={15}>

                            <Grid item xs={12} sx={{padding: '30px', borderRadius: '8px',textAlign:'center'}}>
                                <Divider >
                                    <Typography variant='h5'>About</Typography>
                                </Divider>
                                <Container sx={{textAlign:'center'}}>
                                    <Typography width='100%'>
                                        This is a fully-featured user account system created with React, TypeScript, Node.js, & MongoDB.<br/>
                                        You are welcome use, modify, or distribute this software as you please. <Link>Click here for GitHub repo</Link><br />
                                        This was created by <Link>Avery King</Link>. If you like it, <Link>follow me on GitHub</Link> for more cool freeware :)
                                    </Typography>
                                </Container>
<br/>
                                <Divider >
                                    <Typography variant='h5'>Features</Typography>
                                </Divider>
                                <Typography>To explore the features, click the menu at top left</Typography>
                                <Grid container>
                                    <FeaturesItem title='Registration & Login'/>
                                    <FeaturesItem title='Profiles'/>
                                    <FeaturesItem title='Messaging'/>
                                    <FeaturesItem title='Friends'/>
                                    <FeaturesItem title='Posts'/>
                                    <FeaturesItem title='Search'/>
                                    <FeaturesItem title='Notifications'/>
                                    <FeaturesItem title='Groups'/>
                                    <FeaturesItem title='Administrative'/>

                                </Grid>

                            </Grid>
                    </Paper>
                </Grid>


            </div>
    </Grow>


    )
}