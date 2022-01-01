
import {Grid, Grow, Typography, AppBar, Container, Divider, Chip, Link, ListItem, List, Card, Drawer} from "@mui/material";
import Paper from "@mui/material/Paper";
import React from "react";
import FeaturesItem from "./FeaturesItem";
import PrimarySearchAppBar from "./NavBar";

export default function MainScreen(props: any) {
    return (

        <Grow in={true} timeout={1000}>
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

                                    <Grid item xs={12} sm={6} lg={3} sx={{padding: '30px', borderRadius: '8px',textAlign:'center'}}>
                                        <Paper elevation={4}
                                               sx={{ borderRadius: '15px',
                                                   backgroundColor: "rgba(255,255,255,0.62)"}}>
                                            <Typography variant='h6'>Profiles</Typography>
                                            <Typography sx={{marginLeft:'5px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dignissimos ducimus est, expedita illo illum iste magnam officia optio perferendis quas qui rerum sapiente similique soluta? Dolores eius quia totam!</Typography>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={3} sx={{padding: '30px', borderRadius: '8px',textAlign:'center'}}>
                                        <Paper elevation={4}
                                               sx={{ borderRadius: '15px',
                                                   backgroundColor: "rgba(255,255,255,0.62)"}}>
                                            <Typography variant='h6'>Messaging</Typography>
                                            <Typography sx={{marginLeft:'5px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dignissimos ducimus est, expedita illo illum iste magnam officia optio perferendis quas qui rerum sapiente similique soluta? Dolores eius quia totam!</Typography>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={3} sx={{padding: '30px', borderRadius: '8px',textAlign:'center'}}>
                                        <Paper elevation={4}
                                               sx={{ borderRadius: '15px',
                                                   backgroundColor: "rgba(255,255,255,0.62)"}}>
                                            <Typography variant='h6'>Friends</Typography>
                                            <Typography sx={{marginLeft:'5px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dignissimos ducimus est, expedita illo illum iste magnam officia optio perferendis quas qui rerum sapiente similique soluta? Dolores eius quia totam!</Typography>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={3} sx={{padding: '30px', borderRadius: '8px',textAlign:'center'}}>
                                        <Paper elevation={4}
                                               sx={{ borderRadius: '15px',
                                                   backgroundColor: "rgba(255,255,255,0.62)"}}>
                                            <Typography variant='h6'>Posts</Typography>

                                            <Typography sx={{marginLeft:'5px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dignissimos ducimus est, expedita illo illum iste magnam officia optio perferendis quas qui rerum sapiente similique soluta? Dolores eius quia totam!</Typography>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={3} sx={{padding: '30px', borderRadius: '8px',textAlign:'center'}}>
                                        <Paper elevation={4}
                                               sx={{ borderRadius: '15px',
                                                   backgroundColor: "rgba(255,255,255,0.62)"}}>
                                            <Typography variant='h6'>Search</Typography>

                                            <Typography sx={{marginLeft:'5px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dignissimos ducimus est, expedita illo illum iste magnam officia optio perferendis quas qui rerum sapiente similique soluta? Dolores eius quia totam!</Typography>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={3} sx={{padding: '30px', borderRadius: '8px',textAlign:'center'}}>
                                        <Paper elevation={4}
                                               sx={{ borderRadius: '15px',
                                                   backgroundColor: "rgba(255,255,255,0.62)"}}>
                                            <Typography variant='h6'>Notifications</Typography>

                                            <Typography sx={{marginLeft:'5px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dignissimos ducimus est, expedita illo illum iste magnam officia optio perferendis quas qui rerum sapiente similique soluta? Dolores eius quia totam!</Typography>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={3} sx={{padding: '30px', borderRadius: '8px',textAlign:'center'}}>
                                        <Paper elevation={4}
                                               sx={{ borderRadius: '15px',
                                                   backgroundColor: "rgba(255,255,255,0.62)"}}>
                                            <Typography variant='h6'>Groups</Typography>

                                            <Typography sx={{marginLeft:'5px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dignissimos ducimus est, expedita illo illum iste magnam officia optio perferendis quas qui rerum sapiente similique soluta? Dolores eius quia totam!</Typography>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12} sm={6} lg={3} sx={{padding: '30px', borderRadius: '8px',textAlign:'center'}}>
                                        <Paper elevation={4}
                                               sx={{ borderRadius: '15px',
                                                   backgroundColor: "rgba(255,255,255,0.62)"}}>
                                            <Typography variant='h6'>Administrative</Typography>

                                            <Typography sx={{marginLeft:'5px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dignissimos ducimus est, expedita illo illum iste magnam officia optio perferendis quas qui rerum sapiente similique soluta? Dolores eius quia totam!</Typography>
                                        </Paper>
                                    </Grid>

                                </Grid>

                            </Grid>
                    </Paper>
                </Grid>


            </div>
        </Grow>


    )
}