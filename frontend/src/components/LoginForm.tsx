import React, {FormEvent, FC, useState, ChangeEvent, useEffect} from 'react';
import {TextField, Button, Typography, Grid, Paper, Grow, Fade, Link, CircularProgress} from "@mui/material";
import userService from '../services/user';
import loginService from '../services/login';
import ReactDOM from 'react-dom';
import App from "../App";

const LoginForm: FC = () => {
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [usernameMessage, setUsernameMessage] = useState('');
    const [userData, setUserData] = useState({});
    const [displayForm, setDisplayForm] = useState(true);
    const [loading, setLoading] = React.useState(false);
    const [showPaper, setShowPaper] = useState(true)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);


    useEffect(() => {
        userService.getUserData()
            .then(response => {
                setUserData(response)
            })
    }, [])


    /** TODO: enforce maximum username length
     */
    const onChange = (event: ChangeEvent<HTMLInputElement>): Promise<boolean> | void => {
    }

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const user = await loginService.login({
                username, password,
            })


            window.localStorage.setItem(
                'uasUser', JSON.stringify(user)
            )
            setUser(user)
            setUsername('')
            setPassword('')
           // postService.setToken(user.token)

            //    ReactDOM.render(<App mode="default" userObj={user} />, document.getElementById('root'))

            return
        } catch (exception) {
          //  return ReactDOM.render(<Snackbar type="error" text={"The credentials you entered are invalid."} />, document.getElementById('snackbar'))
        }
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
                        <Grid item xs={12} sx={{padding: '20px', borderRadius: '8px', textAlign:'center'}}>
                            <Typography align='center' variant='h5'
                                        sx={{fontFamily:'Ubuntu', fontWeight:'bold',marginBottom: '15px', paddingTop: '5px', color: "rgba(0,0,0,0.65)"}}>Login</Typography>
                            <form onSubmit={onSubmit}>
                                {UsernameText(usernameError)}
                                <br/>
                                {PasswordText(passwordError)}
                                <br/>

                                <Button
                                    variant="outlined"
                                    sx={{borderRadius:'10px'}}
                                    disabled={loading}
                                    type='submit'
                                >
                                    Login
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
                                    Forgot your password?
                                </Typography>
                            </Link>
                        </Grid>
                    </Grow>
                </Paper>
            </Grow>
        </Grid>
    )
}

export default LoginForm;
