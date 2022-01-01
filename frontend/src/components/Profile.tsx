import PrimarySearchAppBar from "./NavBar";
import React from "react";
import {Avatar, Box, Button, Container, Divider, Grid, Link, Slide, Tab, Tabs, Typography} from "@mui/material";
import Paper from "@mui/material/Paper";
import FeaturesItem from "./FeaturesItem";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ProfilePost from "./ProfilePost";

export default function Profile(props: any) {
    interface TabPanelProps {
        children?: React.ReactNode;
        index: number;
        value: number;
    }

    function TabPanel(props: TabPanelProps) {
        const {children, value, index, ...other} = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`vertical-tabpanel-${index}`}
                aria-labelledby={`vertical-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{p: 3}}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    function a11yProps(index: number) {
        return {
            id: `vertical-tab-${index}`,
            'aria-controls': `vertical-tabpanel-${index}`,
        };
    }

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
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
                    marginTop: '0.5%',
                    width: '100%',
                    height: '100%',
                    borderRadius: '15px',
                    backgroundColor: "rgba(255,255,255,0.59)",
                    paddingTop: '10px',
                    paddingBottom: '10px',
                }} elevation={15}>


                    <Box alignItems='center'>


                    </Box>
                    <Grid
                        container
                        spacing={0}
                        direction="column"
                        alignItems="center"

                        style={{minHeight: '80vh'}}
                    >

                        <Grid item xs={12} sx={{
                            alignItems: 'center',
                            padding: '30px',
                            borderRadius: '8px',
                            textAlign: 'center',
                            display: 'flex'
                        }}>
                            <Avatar

                                alt="AK"
                                src="/static/images/avatar/1.jpg"
                                sx={{width: 150, height: 150, marginRight: '5%'}}
                            />

                            <div style={{display: 'inline-block', position: 'relative', top: '20px', width: '50vh'}}>
                                <div style={{width: '20vh', marginLeft: '25%'}}>


                                    <Typography variant='h5'
                                                sx={{marginTop: '-20%', width: '20vh', marginBottom: '1%'}}>Avery
                                        King</Typography><br/>
                                    <div style={{display: 'block', marginBottom: '15%', width: '50vh'}}><br/>
                                        <Typography sx={{
                                            marginTop: '-13%',
                                            position: 'relative',
                                            right: '5%',
                                            width: '50%',
                                            justifyContent: 'center'
                                        }}>&emsp;🌍Kalamazoo, MI</Typography>

                                    </div>
                                    <div style={{display: 'block', marginBottom: '10%', width: '50vh'}}><br/>
                                        <Typography sx={{
                                            marginTop: '-13%',
                                            position: 'relative',
                                            right: '5%',
                                            width: '50%',
                                            justifyContent: 'center'
                                        }}>📅 21 years old</Typography>
                                    </div>
                                </div>
                                <div style={{display: 'flex'}}>
                                    <Button variant='outlined' sx={{
                                        width: '80%',
                                        borderRadius: '15px',
                                        marginRight: '2px'
                                    }}>Follow</Button>
                                    <Button variant='outlined'
                                            sx={{width: '80%', borderRadius: '15px'}}>Message</Button>
                                </div>


                            </div>


                        </Grid>

                        <Grid container>
                            <Grid item xs={3}>

                                <Tabs
                                    orientation="vertical"
                                    variant="scrollable"
                                    value={value}
                                    onChange={handleChange}
                                    aria-label="Vertical tabs example"
                                    sx={{
                                        borderRight: 1,
                                        borderColor: 'transparent',
                                        position: 'absolute',
                                        height: '100%'
                                    }}
                                >
                                    <Tab label="Overview" {...a11yProps(0)} />
                                    <Tab label="Posts" {...a11yProps(1)} />
                                    <Tab label="Friends" {...a11yProps(2)} />

                                </Tabs>
                            </Grid>

                            <Grid item xs={7}>

                                <TabPanel value={value} index={0}>
                                    <Box sx={{width: '100%', fontWeight: '500'}}>
                                        <Typography>
                                            Biography: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
                                            enim qui sint tempora voluptatibus. Aliquid architecto at consequuntur
                                            dignissimos ducimus fugiat illum iste, iure labore molestiae quae, quam
                                            repellendus veniam!

                                        </Typography>
                                    </Box><br/>
                                    <Box sx={{width: '100%', fontWeight: '500'}}>
                                        <Typography>
                                            Biography: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
                                            enim qui sint tempora voluptatibus. Aliquid architecto at consequuntur
                                            dignissimos ducimus fugiat illum iste, iure labore molestiae quae, quam
                                            repellendus veniam!

                                        </Typography>
                                    </Box><br/>

                                </TabPanel>

                                <TabPanel value={value} index={1}>
                                    <Grid container sx={{marginLeft: '9%'}} spacing={2}>
                                        <ProfilePost />
                                        <ProfilePost />
                                        <ProfilePost />
                                        <ProfilePost />

                                    </Grid>

                                </TabPanel>
                                <TabPanel value={value} index={2}>
                                    <Grid container sx={{marginLeft:'0%'}} spacing={5}>
                                        <Grid item xs={12}>
                                            You have 0 mutual friends
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
                                </TabPanel>
                                <TabPanel value={value} index={3}>
                                    Item Four
                                </TabPanel>
                            </Grid>
                            <Grid item xs={2}>
                                <TabPanel value={value} index={0}>
                                    <Box sx={{width: '100%', fontWeight: '500', textAlign: 'left'}}>
                                        <Typography sx={{marginBottom: '3px'}}>
                                            Followers: 1
                                        </Typography>
                                        <Typography sx={{marginBottom: '3px'}}>
                                            Following: 0
                                        </Typography>
                                        <Typography sx={{marginBottom: '3px'}}>

                                        </Typography>
                                        <Typography>
                                            Gender: Male
                                        </Typography>
                                    </Box>
                                </TabPanel>

                            </Grid>
                        </Grid>
                    </Grid>

                </Paper>
            </Grid>
        </div>
    )
}