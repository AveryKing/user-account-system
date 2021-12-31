import React from 'react';
import RegistrationForm from "./components/RegistrationForm";
import Welcome from './components/Welcome';

function App(props: any) {

    if (props.welcome) {
        return (
            <div>
                <Welcome/>
            </div>
        )
    } else {
        return (
            <div>
                <RegistrationForm/>
            </div>
        );
    }
}

export default App;
