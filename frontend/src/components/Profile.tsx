import PrimarySearchAppBar from "./NavBar";
import React, {useEffect, useState} from "react";
import {Avatar, Box, Button, Container, Divider, Grid, Link, Slide, Tab, Tabs, Typography} from "@mui/material";
import Paper from "@mui/material/Paper";
import FeaturesItem from "./FeaturesItem";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ProfilePost from "./ProfilePost";
import FollowersGrid from "./FollowersGrid";
import userService from '../services/user';
import { Add, MailOutlined } from "@mui/icons-material";

export default function Profile(props: any) {

    const [user, setUser] = useState(null)
    const [followers, setFollowers] = useState([])
    const [following, setFollowing] = useState([])
    const [posts, setPosts] = useState([])

    useEffect(() => {
        userService.getUser('61d0e90e6c060de4dad5ea86')
            .then((user:any) => {
                setUser(user.user)
                setFollowers(user.user.followers)
                setFollowing(user.user.following)
                setPosts(user.user.posts)
            })
            .catch(err => alert('There was an error fetching this profile'))
    },[])

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

    if(user) {
    // @ts-ignore
        // @ts-ignore
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

                style={{minHeight: '100vh'}}
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
                                alt={user['username']}
                                src={user['avatarUrl']}
                                sx={{width: 150, height: 150, marginRight: '5%'}}
                            />

                            <div style={{display: 'inline-block', position: 'relative', top: '20px', width: '50vh'}}>
                                <div style={{width: '20vh', marginLeft: '19%'}}>

                                    <div style={{display: 'inline', marginBottom: '15%', width: '50vh'}}>
                                        <Typography variant='h5'
                                                    sx={{
                                                        marginTop: '-13%',
                                                        position: 'relative',
                                                        right: '5%',
                                                        width: '110%',
                                                        justifyContent: 'center',
                                                        marginBottom: '0.7vh'
                                                    }}>{user['username']}</Typography><br/>
                                    </div>
                                    <div style={{display: 'block', marginBottom: '15%', width: '50vh'}}><br/>
                                        <Typography sx={{
                                            marginTop: '-13%',
                                            position: 'relative',
                                            right: '5%',
                                            width: '50%',
                                            justifyContent: 'center'
                                        }}>🌍 {user['location']}</Typography>

                                    </div>
                                    <div style={{display: 'block', marginBottom: '10%', width: '50vh'}}><br/>
                                        <Typography sx={{
                                            marginTop: '-13%',
                                            position: 'relative',
                                            right: '5%',
                                            width: '50%',
                                            justifyContent: 'center'
                                        }}>📅 {user['age']} years old</Typography>
                                    </div>
                                </div>
                                <div style={{display: 'flex'}}>
                                    <Button variant='outlined' sx={{
                                        width: '40%',
                                        borderRadius: '15px',
                                        marginRight: '2px'
                                    }}><Add />Follow</Button>
                                    <Button variant='outlined'
                                            sx={{width: '40%', borderRadius: '15px'}}><MailOutlined/>&nbsp;Message</Button>
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
                                    <Tab label="Followers" {...a11yProps(2)} />
                                    <Tab label="Following" {...a11yProps(3)} />

                                </Tabs>
                            </Grid>

                            <Grid item xs={7}>

                                <TabPanel value={value} index={0}>
                                    <Box sx={{width: '100%', fontWeight: '500'}}>
                                        <Typography>
                                            Biography: {user['biography']}

                                        </Typography>
                                    </Box><br/>
                                    <Box sx={{width: '100%', fontWeight: '500'}}>
                                        <Typography>
                                            More content here

                                        </Typography>
                                    </Box><br/>

                                </TabPanel>

                                <TabPanel value={value} index={1}>
                                    <Grid container sx={{marginLeft: '9%'}} spacing={2}>
                                        {posts.length
                                            ? posts.map(post => <ProfilePost username={user['username']} post={post}/>)
                                            : <Typography>There are no posts to show.</Typography>}
                                    </Grid>

                                </TabPanel>
                                <TabPanel value={value} index={2}>
                                    <FollowersGrid />
                                </TabPanel>
                                <TabPanel value={value} index={3}>
                                    <FollowersGrid/>
                                </TabPanel>
                            </Grid>
                            <Grid item xs={2}>
                                <TabPanel value={value} index={0}>
                                    <Box sx={{width: '100%', fontWeight: '500', textAlign: 'left'}}>
                                        <Typography sx={{marginBottom: '3px'}}>
                                            Followers: {followers.length}
                                        </Typography>
                                        <Typography sx={{marginBottom: '3px'}}>
                                            Following: {following.length}
                                        </Typography>
                                        <Typography sx={{marginBottom: '3px'}}>

                                        </Typography>
                                        <Typography>
                                            Gender: {user['gender']}
                                        </Typography>
                                    </Box>
                                </TabPanel>

                            </Grid>
                        </Grid>
                    </Grid>

                </Paper>
            </Grid>
        </div>
    ) }

    return (
        <div>
            <p>Loading...</p>
        </div>
    )
}