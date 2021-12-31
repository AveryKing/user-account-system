import {Box, Grid, Grow, Paper, Typography, Container, ToggleButton, Button} from "@mui/material";
import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faAddressBook} from "@fortawesome/free-solid-svg-icons";
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

const Welcome = () => {
    /** TODO: make state into array
     * setSelected(prev => prev.concat(newId));
     * **/
    const [showWelcome, setShowWelcome] = useState(true);
    const [doAnimation, setDoAnimation] = useState(false)
    const [stage, setStage] = useState(1)
    const [showCheck, setShowCheck] = useState(true)
    const [goOut, setGoOut] = useState(true)
    const [hello, setHello] = useState(true)
    const [selected, setSelected] = React.useState(false);
    const [technology, setTechnology] = useState(false)
    const [humor, setHumor] = useState(false)
    const [sports, setSports] = useState(false)
    const [art, setArt] = useState(false)
    const [politics, setPolitics] = useState(false)
    const [howTo, setHowTo] = useState(false)
    const [music, setMusic] = useState(false)
    const [showSelectTopicsMsg, setShowSelectTopicsMsg] = useState(true)
    const [exercise, setExercise] = useState(false)
    const [spirituality, setSpirituality] = useState(false)
    const [topicsSelected, setTopicsSelected] = useState(0)
    const [helloMessage, setHelloMessage] = useState(true)


    const goToProfileSetup = () => {
        setShowSelectTopicsMsg(false)

        setTimeout(() => {
            setStage(3)
        },2000)


        console.log(stage)
    }

    useEffect(() => {
        if (stage === 2 && !goOut) {

            setTimeout(() => {
                setHelloMessage(false)
            }, 3000)
            setTimeout(() => {
                setHello(false)
            }, 3300)
        }
    })
    if (stage === 1) {
        setTimeout(() => {
            setShowWelcome(false);
        }, 2500)

        setTimeout(() => {
            setStage(2)
        }, 2550)

        setTimeout(() => {
            setGoOut(false)
        }, 2700)
        setTimeout(() => {
            setShowCheck(false)
        }, 2300)


        return (
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{minHeight: '100vh'}}
            >
                <Paper sx={{
                    borderRadius: '15px',
                    backgroundColor: "rgba(255,255,255,0.59)",
                    paddingTop: '7.2rem',
                    paddingBottom: '7.2rem',
                    paddingLeft: '3.5rem',
                    paddingRight: '3.5rem',
                }} elevation={15}>

                    <Grid item xs={12} sx={{
                        display: 'block',
                        padding: '20px',
                        borderRadius: '8px',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Grow in={showWelcome}>
                            <Box>
                                <FontAwesomeIcon
                                    style={{position: 'relative', bottom: '100%'}}
                                    color='#66bb6a'
                                    size='6x'
                                    icon={faCheckCircle}/>
                            </Box>
                        </Grow>
                        <br/>
                    </Grid>
                </Paper>
            </Grid>
        )
    } else if(stage === 2){
        return (
            <div>
                {goOut ?
                    <Grid
                        container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        style={{minHeight: '100vh'}}
                    >
                        <Paper sx={{
                            borderRadius: '15px',
                            backgroundColor: "rgba(255,255,255,0.59)",
                            paddingTop: '7.2rem',
                            paddingBottom: '7.2rem',
                            paddingLeft: '3.5rem',
                            paddingRight: '3.5rem',
                        }} elevation={15}>

                            <Grid item xs={12} sx={{
                                display: 'block',
                                padding: '20px',
                                borderRadius: '8px',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Grow in={showWelcome}>
                                    <Box>
                                        <FontAwesomeIcon
                                            style={{position: 'relative', bottom: '100%'}}
                                            color='#66bb6a'
                                            size='6x'
                                            icon={faCheckCircle}/>
                                    </Box>
                                </Grow>
                                <br/>
                            </Grid>
                        </Paper>
                    </Grid> : null}

                <Grow in={true} timeout={1000}>
                    <Grid
                        container
                        spacing={0}

                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        style={{minHeight: '100vh'}}
                    >
                        <Paper sx={{

                            borderRadius: '15px',
                            backgroundColor: "rgba(255,255,255,0.59)",
                            paddingTop: '10vh',
                            marginBottom: '2vh',
                            height: '80vh',
                            width: '85vw'
                        }} elevation={15}>

                            <Grid item xs={12} md={12} lg={12} sx={{
                                display: 'block',
                                padding: '20px',
                                borderRadius: '8px',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100%',
                                width: '100%'
                            }}>
                                <Grow in={true}>
                                    <Grid
                                        container
                                        spacing={0}
                                        direction="column"
                                        alignItems="center"
                                        justifyContent="center"
                                        minHeight='50vh'
                                        style={{}}
                                    >
                                        {hello ? <Grow timeout={helloMessage ? 2900 : 400} in={helloMessage}>
                                                <Grid alignItems='center' justifyContent='center' textAlign='center' item
                                                      xs={12}>

                                                    <Typography sx={{
                                                        color: "rgba(0,0,0,0.65)",
                                                        fontWeight: '400',
                                                        fontFamily: 'Ubuntu'
                                                    }} variant='h1'>Hello, Avery <span role="img"
                                                                                       aria-label="smiley">👋</span></Typography>

                                                </Grid>
                                            </Grow> :

                                            <Grow timeout={showSelectTopicsMsg ? 2400 : 1000} in={showSelectTopicsMsg}>
                                                <Container>
                                                    <Grid alignItems='center' textAlign='center' item xs={12}>
                                                        {topicsSelected === 0 ?
                                                            <Typography sx={{
                                                            color: "rgba(0,0,0,0.65)",
                                                            fontWeight: '400',
                                                            fontFamily: 'Ubuntu',
                                                            marginBottom:'6vh',
                                                            position: 'relative',
                                                            top: '1vh'
                                                        }} variant='h5'>
                                                            To get started, select at least three topics that interest
                                                            you<br/>
                                                        </Typography> : null }

                                                        {topicsSelected === 1 ?
                                                            <Typography sx={{
                                                                color: "rgba(0,0,0,0.65)",
                                                                fontWeight: '400',
                                                                fontFamily: 'Ubuntu',
                                                                marginBottom:'6vh',
                                                                position: 'relative',
                                                                top: '1vh'
                                                            }} variant='h5'>
                                                                To get started, select at least two more topics that interest
                                                                you<br/>
                                                            </Typography> : null }

                                                             {topicsSelected === 2 ?
                                                            <Typography sx={{
                                                                color: "rgba(0,0,0,0.65)",
                                                                fontWeight: '400',
                                                                fontFamily: 'Ubuntu',
                                                                marginBottom:'6vh',
                                                                position: 'relative',
                                                                top: '1vh'
                                                            }} variant='h5'>
                                                                To get started, select at least one more topic that interests
                                                                you<br/>
                                                            </Typography> : null }

                                                        {topicsSelected > 2 ?
                                                            <Typography sx={{
                                                                color: "rgba(0,0,0,0.65)",
                                                                fontWeight: '400',
                                                                fontFamily: 'Ubuntu',
                                                                marginBottom:'6vh',
                                                                position: 'relative',
                                                                top: '1vh'
                                                            }} variant='h5'>
                                                                Great! Now you can select more topics or click next to continue.<br/>
                                                            </Typography> : null }

                                                        <br/>
                                                    </Grid>

                                                    <Grid
                                                        marginLeft='12vw'
                                                        alignItems='center' textAlign='center' item xs={4} md={4}
                                                        lg={7} >
                                                        <Paper elevation={10}

                                                               sx={{
                                                                   height: '20vh', width: '50vw',
                                                                   borderRadius: '8px',
                                                                    paddingBottom:'33vh',
                                                                   bottom:'-3vh',
                                                                   position: 'relative',
                                                                   backgroundColor: "rgba(255,255,255,0.59)"
                                                               }}
                                                        >


                                                            {1==1 ?
                                                            <Grid
                                                                container
                                                                spacing={5}

                                                                alignItems="center"
                                                                justifyContent="center"
                                                                style={{minHeight: '20vh'}}
                                                            >
                                                                <Grid item xs={4}>
                                                                    <ToggleButton
                                                                        color='secondary'
                                                                        sx={{width:'50%'}}
                                                                        value="check"
                                                                        selected={technology}
                                                                        onChange={ () => {
                                                                           setTechnology(!technology)
                                                                            setTopicsSelected(topicsSelected+1)

                                                                        }}



                                                                    >
                                                                        <Typography fontFamily='Ubuntu'>
                                                                            Technology
                                                                        </Typography>
                                                                    </ToggleButton>

                                                                </Grid>

                                                                <Grid item xs={4}>
                                                                    <ToggleButton
                                                                        color='secondary'
                                                                        value="check"
                                                                        sx={{width:'50%'}}
                                                                        selected={humor}
                                                                        onChange={() => {
                                                                            setHumor(!humor);
                                                                            setTopicsSelected(topicsSelected+1)
                                                                        }}
                                                                    >
                                                                        <Typography fontFamily='Ubuntu'>
                                                                            Humor
                                                                        </Typography>
                                                                    </ToggleButton>

                                                                </Grid>

                                                                <Grid item xs={4}
                                                               >
                                                                    <ToggleButton

                                                                        color='secondary'
                                                                        sx={{width:'50%'}}
                                                                        value="check"
                                                                        selected={sports}
                                                                        onChange={() => {
                                                                            setSports(!sports);
                                                                            setTopicsSelected(topicsSelected+1)
                                                                        }}
                                                                    >
                                                                        <Typography fontFamily='Ubuntu'>
                                                                            Sports
                                                                        </Typography>
                                                                    </ToggleButton>

                                                                </Grid>
                                                                <Grid item xs={4}>
                                                                    <ToggleButton
                                                                        sx={{width:'50%'}}
                                                                        color='secondary'
                                                                        value="check"
                                                                        selected={music}
                                                                        onChange={() => {
                                                                            setMusic(!music);
                                                                            setTopicsSelected(topicsSelected+1)
                                                                        }}
                                                                    >
                                                                        <Typography fontFamily='Ubuntu'>
                                                                            Music
                                                                        </Typography>
                                                                    </ToggleButton>

                                                                </Grid>

                                                                <Grid item xs={4}>
                                                                    <ToggleButton
                                                                        sx={{width:'50%'}}
                                                                        color='secondary'
                                                                        value="check"
                                                                        selected={art}
                                                                        onChange={() => {
                                                                            setArt(!art);
                                                                            setTopicsSelected(art ? topicsSelected + 1 : topicsSelected - 1)
                                                                           // setTopicsSelected(topicsSelected+1)
                                                                        }}
                                                                    >
                                                                        <Typography fontFamily='Ubuntu'>
                                                                            Art
                                                                        </Typography>
                                                                    </ToggleButton>

                                                                </Grid>

                                                                <Grid item xs={4}>
                                                                    <ToggleButton
                                                                        sx={{width:'50%'}}
                                                                        color='secondary'
                                                                        value="check"
                                                                        selected={politics}
                                                                        onChange={() => {
                                                                            setPolitics(!politics);
                                                                            setTopicsSelected(topicsSelected+1)
                                                                        }}
                                                                    >
                                                                        <Typography fontFamily='Ubuntu'>
                                                                            Politics
                                                                        </Typography>
                                                                    </ToggleButton>

                                                                </Grid>
                                                                <Grid item xs={4}>
                                                                    <ToggleButton
                                                                        sx={{width:'50%'}}
                                                                        color='secondary'
                                                                        value="check"
                                                                        selected={howTo}
                                                                        onChange={() => {
                                                                            setHowTo(!howTo);
                                                                            setTopicsSelected(topicsSelected+1)
                                                                        }}
                                                                    >
                                                                        <Typography fontFamily='Ubuntu'>
                                                                            How-To
                                                                        </Typography>
                                                                    </ToggleButton>

                                                                </Grid>
                                                                <Grid item xs={4}>
                                                                    <ToggleButton
                                                                        sx={{width:'50%'}}
                                                                        color='secondary'
                                                                        value="check"
                                                                        selected={spirituality}
                                                                        onChange={() => {
                                                                            setSpirituality(!spirituality);
                                                                            setTopicsSelected(topicsSelected+1)
                                                                        }}
                                                                    >
                                                                        <Typography fontFamily='Ubuntu'>
                                                                            Spirituality
                                                                        </Typography>
                                                                    </ToggleButton>

                                                                </Grid>
                                                                <Grid item xs={4}>
                                                                    <ToggleButton

                                                                        sx={{width:'50%'}}
                                                                        color='secondary'
                                                                        value="check"
                                                                        selected={exercise}
                                                                        onChange={() => {
                                                                            setExercise(!exercise);
                                                                            setTopicsSelected(topicsSelected+1)
                                                                        }}
                                                                    >
                                                                        <Typography fontFamily='Ubuntu'>
                                                                            Exercise
                                                                        </Typography>
                                                                    </ToggleButton>

                                                                </Grid>
                                                             <Grid item xs={4}>
                                                                 {topicsSelected > 2 ?
                                                                     <Button onClick={goToProfileSetup} size='large' variant='outlined'>
                                                                        Next
                                                                    </Button> :
                                                                     <Button disabled size='large' variant='outlined'>
                                                                         Next
                                                                     </Button>
                                                                 }
                                                                </Grid>




                                                            </Grid>

                                                        : null }
                                                        </Paper>
                                                    </Grid>
                                                </Container>
                                            </Grow>}


                                    </Grid>
                                </Grow>
                                <br/>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grow>

            </div>
        )
    } else {
        return(
            <div><p>hi</p></div>
        )
    }

}

export default Welcome