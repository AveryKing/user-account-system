import React, {FormEvent, FC, useState, ChangeEvent, useEffect} from 'react';
import {TextField, Button, Typography, Grid, Paper, Grow, Fade, Link, CircularProgress} from "@mui/material";
import userService from '../services/user';
import ReactDOM from 'react-dom';
import App from "../App";

const RegistrationForm: FC = () => {
    const [values, setValues] = useState({});
    const [emailError, setEmailError] = useState(false)
    const [usernameError, setUsernameError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [usernameMessage, setUsernameMessage] = useState('')
    const [userData, setUserData] = useState({})
    const [displayForm, setDisplayForm] = useState(true)
    const [showLoading, setShowLoading] = useState(false)
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const [showPaper, setShowPaper] = useState(true)


    useEffect(() => {
        userService.getUserData()
            .then(response => {
                setUserData(response)
            })
    }, [])


    /** TODO: enforce maximum username length
     */
    const onChange = (event: ChangeEvent<HTMLInputElement>): Promise<boolean> | void => {
        const fieldName: string = event.target.name;
        const fieldValue: string = event.target.value;
        const checkParams = {[fieldName]: fieldValue};

        setValues({...values, [fieldName]: fieldValue});

        if (fieldName === 'password' && fieldValue) {
            setPasswordError(fieldValue.length < 6)
        } else {
            setPasswordError(false)
        }

        if (fieldValue && fieldName !== 'password') {
            userService.checkInUse(userData, checkParams)
                .then(response => {

                    if (fieldName === 'email') {
                        setEmailError(response);
                    } else if (fieldName === 'username') {
                        if (new RegExp(/^[a-z0-9]+$/i).test(fieldValue)) {
                            setUsernameMessage('That username is already in use.')
                            setUsernameError(response);
                        } else {
                            setUsernameMessage('That username is unacceptable.');
                            setUsernameError(true)
                        }
                    }
                })
        } else {
            if (fieldName === 'email') {
                setEmailError(false)
            } else if (fieldName === 'username') {
                setUsernameError(false);
            }
        }

    }

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSuccess(false);
        setLoading(true);
        setTimeout(() => {
            setShowLoading(true)
            userService.create(values)
                .then(response => {
                    setSuccess(true);
                    setLoading(false);
                    if(!response.hasOwnProperty('error')) {
                        setDisplayForm(false)
                        setShowPaper(false)
                        ReactDOM.render(<App mode='greetUser' name='welcome'/>, document.getElementById('root'));
                       // ReactDOM.render(<App welcome={true}/>, document.getElementById('root'));
                    } else {
                        alert('error')
                    }
                })

        }, 2300)
    }

    function EmailText(emailError: boolean) {
        if (emailError) {
            return <TextField error sx={{marginBottom: '10px'}} type='email' name='email' label='Email'
                              onChange={onChange} helperText="That email is already in use."/>;
        }
        return <TextField sx={{marginBottom: '10px'}} type='email' name='email' label='Email'
                          onChange={onChange}/>;
    }

    function UsernameText(usernameError: boolean) {
        if (usernameError) {
            return <TextField error sx={{marginBottom: '10px'}} type='text' name='username'
                              label='Username'
                              onChange={onChange} helperText={usernameMessage}/>;
        }
        return <TextField sx={{marginBottom: '10px'}} type='text' name='username' label='Username'
                          onChange={onChange}/>;
    }

    function PasswordText(passwordError: boolean) {
        if (passwordError) {
            return <TextField error sx={{marginBottom: '10px'}} type='password' name='password'
                              label='Password'
                              onChange={onChange} helperText='Your password is too short.'/>;
        }
        return <TextField sx={{marginBottom: '10px'}} type='password' name='password'
                          label='Password'
                          onChange={onChange}/>;
    }


    return (

        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{minHeight: '90vh'}}
        >

                <Grow in={showPaper}>
                    <Paper sx={{
                        borderRadius: '15px',
                        backgroundColor: "rgba(255,255,255,0.59)",
                        paddingTop: '10px',
                        paddingBottom: '10px'
                    }} elevation={15}>

                        <Grow in={displayForm}>
                            <Grid item xs={12} sx={{padding: '20px', borderRadius: '8px'}}>
                                <Typography align='center' variant='h5'
                                            sx={{fontFamily:'Ubuntu', fontWeight:'bold',marginBottom: '15px', paddingTop: '5px', color: "rgba(0,0,0,0.65)"}}>Create
                                    an account</Typography>
                                <form onSubmit={onSubmit}>
                                    {EmailText(emailError)}
                                    <br/>
                                    {UsernameText(usernameError)}
                                    <br/>
                                    {PasswordText(passwordError)}
                                    <br/>

                                    <Button
                                        variant="outlined"
                                        sx={{marginLeft: '25%',borderRadius:'10px'}}
                                        disabled={loading}
                                        type='submit'
                                    >
                                        Register
                                        {loading && (
                                            <CircularProgress
                                                size={24}
                                                sx={{
                                                    position: 'absolute',
                                                    top: '50%',
                                                    left: '50%',
                                                    marginTop: '-12px',
                                                    marginLeft: '-12px',
                                                }}
                                            />
                                        )}
                                    </Button>
                                </form>
                                <br/>
                                <Link>
                                    <Typography fontFamily='Ubuntu' fontSize='15px' align='center' sx={{color: "rgba(0,0,0,0.57)"}}>
                                        Already have an account?
                                    </Typography>
                                </Link>
                            </Grid>
                        </Grow>
                    </Paper>
                </Grow>
        </Grid>
    )
}

export default RegistrationForm;
