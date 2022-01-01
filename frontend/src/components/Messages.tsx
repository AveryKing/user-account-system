import React from "react";
import {Avatar, Box, Button, createTheme, Divider, Grid, Tab, Tabs, Typography} from "@mui/material";
import PrimarySearchAppBar from "./NavBar";
import Paper from "@mui/material/Paper";
// @ts-ignore
import ChatMsg from '@mui-treasury/components/chatMsg/ChatMsg';
import MessageConversation from "./MessageConversation";

export default function Messages(props: any) {
    const theme = createTheme({
        breakpoints: {
            values: {
                xs: 0,
                sm: 450,
                md: 600,
                lg: 900,
                xl: 1200
            }
        }
    });

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
                            <Grid item xs={12} sx={{marginLeft: '50%'}}>
                                <Typography variant='h6'>
                                    &emsp;Conversations
                                </Typography>

                            </Grid>

                            <Grid item xs={3} sm={4}>

                                <Tabs


                                    orientation="vertical"
                                    variant="scrollable"
                                    value={value}
                                    onChange={handleChange}
                                    aria-label="Vertical tabs "
                                    sx={{
                                        borderRight: 1,
                                        borderColor: 'transparent',
                                        position: 'absolute',
                                        maxHeight: '80vh',

                                    }}
                                >
                                    <Tab sx={{textTransform: 'none', alignItems: 'flex-start'}}
                                         {...a11yProps(0)}
                                         label={
                                             <React.Fragment>

                                            <span style={{display: 'flex'}}><Avatar

                                                alt="AK"
                                                src="https://avatars.githubusercontent.com/u/76629826?v=4"
                                                sx={{width: 60, height: 60}}
                                            />
                                                <div style={{
                                                    display: 'block',
                                                    textAlign: 'start',
                                                    paddingLeft: '3px',
                                                    alignItems: 'center'
                                                }}>
                                                <Typography sx={{
                                                    fontWeight: '500',
                                                    display: {
                                                        xs: 'none',
                                                        sm: 'block'
                                                    },
                                                    marginTop: {
                                                        sm: '25%',
                                                        md: '0',
                                                        lg: '0'
                                                    }
                                                }}>Avery King</Typography>
                                                <Typography sx={{
                                                    display: {
                                                        xxs: 'none',
                                                        xs: 'none',
                                                        sm: 'none',
                                                        md: 'inline-block',
                                                        lg: 'block',
                                                        xl: 'block'
                                                    },
                                                }}>Lorem ipsum dolor sit am... 1d</Typography>

                                            </div>

                                            </span>

                                             </React.Fragment>
                                         }/>

                                    <Tab sx={{textTransform: 'none', alignItems: 'flex-start'}}
                                         {...a11yProps(1)}
                                         label={
                                             <React.Fragment>

                                            <span style={{display: 'flex'}}><Avatar

                                                alt="AK"
                                                src="https://media1.popsugar-assets.com/files/thumbor/mzUiLo-8Y10peZM55u_w6Loa-h4/612x451:2344x2183/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/11/19/007/n/1922398/d3c823415dd4769f7d9263.82518194_/i/Kim-Kardashian.jpg"
                                                sx={{width: 60, height: 60}}
                                            />
                                                <div style={{display: 'block', textAlign: 'start', paddingLeft: '3px'}}>
                                                <Typography sx={{
                                                    fontWeight: '500',
                                                    display: {
                                                        xs: 'none',
                                                        sm: 'block'
                                                    },
                                                    marginTop: {
                                                        sm: '15%',
                                                        md: '0',
                                                        lg: '0'
                                                    }
                                                }}>Kim Kardashian</Typography>
                                                <Typography sx={{
                                                    display: {
                                                        xxs: 'none',
                                                        xs: 'none',
                                                        sm: 'none',
                                                        md: 'inline-block',
                                                        lg: 'block',
                                                        xl: 'block'
                                                    },
                                                }}>Lorem ipsum dolor sit am... 1d</Typography>
                                            </div>

                                            </span>
                                             </React.Fragment>
                                         }/>
                                    <Tab sx={{textTransform: 'none', alignItems: 'flex-start'}}
                                         {...a11yProps(2)}
                                         label={
                                             <React.Fragment>

                                            <span style={{display: 'flex'}}><Avatar

                                                alt="AK"

                                                src="https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg"
                                                sx={{width: 60, height: 60}}
                                            />
                                                <div style={{
                                                    display: 'block',
                                                    textAlign: 'start',
                                                    paddingLeft: '3px',
                                                    alignItems: 'center'
                                                }}>
                                               <Typography sx={{
                                                   fontWeight: '500',
                                                   display: {
                                                       xs: 'none',
                                                       sm: 'flex'
                                                   },
                                                   marginTop: {
                                                       sm: '25%',
                                                       md: '0',
                                                       lg: '0'
                                                   }
                                               }}>Elon Musk</Typography>
                                                <Typography sx={{
                                                    display: {
                                                        xxs: 'none',
                                                        xs: 'none',
                                                        sm: 'none',
                                                        md: 'inline-block',
                                                        lg: 'block',
                                                        xl: 'block'
                                                    },
                                                }}>Lorem ipsum dolor sit am... 1d</Typography>
                                            </div>

                                            </span>
                                             </React.Fragment>
                                         }/>
                                    <Tab sx={{textTransform: 'none', alignItems: 'flex-start'}}
                                         {...a11yProps(3)}
                                         label={
                                             <React.Fragment>

                                            <span style={{display: 'flex'}}><Avatar

                                                alt="AK"

                                                src="https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Foriginal%2F000%2F013%2F564%2Fdoge.jpg"
                                                sx={{width: 60, height: 60}}
                                            />
                                                <div style={{display: 'block', textAlign: 'start', paddingLeft: '3px'}}>
                                                <Typography sx={{
                                                    fontWeight: '500',
                                                    display: {
                                                        xs: 'none',
                                                        sm: 'block'
                                                    },
                                                    marginTop: {
                                                        sm: '25%',
                                                        md: '0',
                                                        lg: '0'
                                                    }
                                                }}>Good Doge</Typography>
                                                <Typography sx={{
                                                    display: {
                                                        xxs: 'none',
                                                        xs: 'none',
                                                        sm: 'none',
                                                        md: 'inline-block',
                                                        lg: 'block',
                                                        xl: 'block'
                                                    },
                                                }}>Lorem ipsum dolor sit am... 1d</Typography>
                                            </div>

                                            </span>
                                             </React.Fragment>
                                         }/>

                                </Tabs>
                            </Grid>

                            <Grid item xs={8} md={5} sx={{marginLeft: {
                                xl:'-2%',
                                    lg:'-2%',
                                    md:'15%',
                                    sm:'5%'
                                }}}>

                                <TabPanel value={value} index={0}>
                                    <MessageConversation />

                                </TabPanel>

                                <TabPanel value={value} index={1}>
                                    <MessageConversation />

                                </TabPanel>
                                <TabPanel value={value} index={2}>
                                    <MessageConversation />
                                </TabPanel>
                                <TabPanel value={value} index={3}>
                                    <MessageConversation />
                                </TabPanel>


                            </Grid>
                        </Grid>
                    </Grid>

                </Paper>
            </Grid>
        </div>
    )
}