import React from "react";
import {Avatar, Box, Button, Card, Container, Divider, Grid, Tab, Tabs, Typography} from "@mui/material";
import PrimarySearchAppBar from "./NavBar";
import Paper from "@mui/material/Paper";
import {Add, MailOutlined} from "@mui/icons-material";
import ProfilePost from "./ProfilePost";
import FollowersGrid from "./FollowersGrid";

export default function Messages(props:any) {
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

                        <Grid container>
                            <Grid item xs={12} sx={{marginLeft:'1%'}}>
                                <Typography variant='h6'>Conversations</Typography>
                            </Grid>

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
                                        height: '100%',

                                    }}
                                >

                                    <Tab sx={{textTransform:'none', alignItems:'flex-start'}} label={
                                        <React.Fragment>

                                            <span style={{display:'flex'}}><Avatar

                                                alt="AK"
                                                src="https://avatars.githubusercontent.com/u/76629826?v=4"
                                                sx={{width: 60, height: 60}}
                                            />
                                                <div style={{display:'block',textAlign:'start',paddingLeft:'3px'}}>
                                                <Typography sx={{fontWeight:'500'}}>Avery King</Typography>
                                                <Typography>Lorem ipsum dolor sit am... 1d</Typography>
                                            </div>

                                            </span>
                                        </React.Fragment>
                                    } {...a11yProps(0)} />
                                    <Divider />

                                    <Tab sx={{textTransform:'none', alignItems:'flex-start'}} label={
                                        <React.Fragment>

                                            <span style={{display:'flex'}}><Avatar

                                                alt="AK"
                                                src="https://media1.popsugar-assets.com/files/thumbor/mzUiLo-8Y10peZM55u_w6Loa-h4/612x451:2344x2183/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/11/19/007/n/1922398/d3c823415dd4769f7d9263.82518194_/i/Kim-Kardashian.jpg"
                                                sx={{width: 60, height: 60}}
                                            />
                                                <div style={{display:'block',textAlign:'start',paddingLeft:'3px'}}>
                                                <Typography sx={{fontWeight:'500'}}>Kim Kardashian</Typography>
                                                <Typography>Lorem ipsum dolor sit am... 1d</Typography>
                                            </div>

                                            </span>
                                        </React.Fragment>
                                    } {...a11yProps(1)} />
                                    <Divider />
 <Tab sx={{textTransform:'none', alignItems:'flex-start'}} label={
                                        <React.Fragment>

                                            <span style={{display:'flex'}}><Avatar

                                                alt="AK"
                                                src="https://www.whitehouse.gov/wp-content/uploads/2021/01/45_donald_trump.jpg"
                                                sx={{width: 60, height: 60}}
                                            />
                                                <div style={{display:'block',textAlign:'start',paddingLeft:'3px'}}>
                                                <Typography sx={{fontWeight:'500'}}>Donald Trump</Typography>
                                                <Typography>Lorem ipsum dolor sit am... 1d</Typography>
                                            </div>

                                            </span>
                                        </React.Fragment>
                                    } {...a11yProps(2)} />
                                    <Divider />


                                </Tabs>
                            </Grid>

                            <Grid item xs={9}>
                                <TabPanel value={value} index={0}>
                                    Avery convo
                                </TabPanel>

                                  <TabPanel value={value} index={1}>
                                    Kim convo
                                </TabPanel>

                                  <TabPanel value={value} index={2}>
                                    Donald convo
                                </TabPanel>


                            </Grid>

                            </Grid>



                    </Grid>

                </Paper>
            </Grid>
        </div>
    )
}