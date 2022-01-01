import React, {useEffect, useState} from 'react';
import RegistrationForm from "./components/RegistrationForm";
import Welcome from './components/Welcome';
import MainScreen from './components/MainScreen';
import GreetUser from './GreetUser';
import Profile from './components/Profile';
import Messages from "./components/Messages";
import LoginForm from './components/LoginForm';
import userService from './services/user';
function App(props: any) {
    const [session,setSession] = useState(null)

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('uasUserToken')
        if(loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)

            try {
                userService.validateToken(user.token)
                setSession(user)
            } catch (exception) {
                console.log('Exception thrown when validating token')
            }
            //postService.setToken(user.token)
          //  setMode('loggedIn')

        }


    }, [])
    if(props.mode === 'signUp') {
        return (
            <div>
                <RegistrationForm />
            </div>
        )
    }

    if(props.mode === 'greetUser') {
        return (
            <div>
                <GreetUser name={props.name} />
            </div>
        )
    }

    if(props.mode === 'mainScreen') {
        return (
            <div>
                <MainScreen session={props.session} />
            </div>
        )
    }
    if(props.mode === 'profile') {
        return (
            <div>
                <Profile session={props.session} />
            </div>
        )
    }

    if(props.mode === 'login') {
        return (
            <div>
                <LoginForm/>
            </div>
        )
    }
    return (
        <div>

            <Welcome />

        </div>
    );

}

export default App;
