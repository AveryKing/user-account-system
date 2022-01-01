import React from 'react';
import RegistrationForm from "./components/RegistrationForm";
import Welcome from './components/Welcome';
import MainScreen from './components/MainScreen';
import GreetUser from './GreetUser';
import Profile from './components/Profile';
import Messages from "./components/Messages";
function App(props: any) {

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
                <Messages session={props.session} />
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
