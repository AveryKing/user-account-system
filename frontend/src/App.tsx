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
    const [mode, setMode] = useState('')
    const [effectDone, setEffectDone] = useState(false)
    useEffect(() => {

        const loggedUserJSON = window.localStorage.getItem('uasUser')
        if(loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)


                userService.validateToken(user.token)
                    .then(session => {
                        setSession(user)
                    }).catch(exception => {
                    setSession(null)
                    setMode('welcome')
                    setEffectDone(true);
                    console.log('Exception thrown when validating token')
                })


                    // setSession(user)

            //postService.setToken(user.token)
          //  setMode('loggedIn')

        } else {
            setSession(null);
            setMode('welcome')
            setEffectDone(true)
        }


    }, [])
    if(props.mode === 'signUp' && !session) {
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
    if(props.mode === 'messages' && session) {
        return (
            <div>
                <Messages />
            </div>
        )
    }

    if(session && !props.mode) {
        return (
            <div>
                <MainScreen session={props.session} />
            </div>
        )
    }
    if(session && props.mode === 'profile') {
        return (
            <div>
                <Profile session={props.session} />
            </div>
        )
    }

    if(props.mode === 'login' && !session) {
        return (
            <div>
                <LoginForm/>
            </div>
        )
    }



    return (
          <div>
              {effectDone && <Welcome />}
          </div>
      )

}

export default App;
