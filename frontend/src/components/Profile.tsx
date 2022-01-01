import PrimarySearchAppBar from "./NavBar";
import React from "react";
import {Avatar, Box, Button, Container, Divider, Grid, Link, Tab, Tabs, Typography} from "@mui/material";
import Paper from "@mui/material/Paper";
import FeaturesItem from "./FeaturesItem";
import LocationOnIcon from '@mui/icons-material/LocationOn';
export default function Profile(props:any) {
    interface TabPanelProps {
        children?: React.ReactNode;
        index: number;
        value: number;
    }

    function TabPanel(props: TabPanelProps) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`vertical-tabpanel-${index}`}
                aria-labelledby={`vertical-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{ p: 3 }}>
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
            marginTop:'0.5%',
            width:'100%',
            height:'100%',
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

            <Grid item xs={12} sx={{alignItems:'center',padding: '30px', borderRadius: '8px',textAlign:'center',display:'flex'}}>
                <Avatar

                    alt="AK"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 150, height: 150,marginRight:'5%' }}
                />

                <div style={{display:'inline-block',position:'relative',top:'20px',width:'50vh'}}>
                    <div style={{width:'20vh',marginLeft:'25%'}}>


                    <Typography variant='h5' sx={{marginTop:'-20%',width:'20vh',marginBottom:'1%'}}>Avery King</Typography><br/>
                    <div style={{display:'flex',marginBottom:'10%'}}>
                        <Typography  sx={{marginTop:'-15%',width:'20vh',justifyContent:'center'}}>🌍Kalamazoo, MI</Typography>

                    </div>
                    </div>
                    <div style={{display:'flex'}}>
                        <Button variant='outlined' sx={{width:'80%'}}>Add friend</Button>
                        <Button variant='outlined' sx={{width:'80%'}}>Message</Button>
                    </div>


                </div>


            </Grid>

                <Grid container>
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        sx={{ borderRight: 1, borderColor: 'transparent',position:'absolute', height:'100%'}}
                    >
                        <Tab label="Overview" {...a11yProps(0)} />
                        <Tab label="Posts" {...a11yProps(1)} />
                        <Tab label="Friends" {...a11yProps(2)} />

                    </Tabs>

                </Grid>
            </Grid>

        </Paper>
    </Grid>
        </div>
    )
}