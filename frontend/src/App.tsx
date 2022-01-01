import React from 'react';
import RegistrationForm from "./components/RegistrationForm";
import Welcome from './components/Welcome';
function App(props: any) {

    if(props.mode === 'signUp') {
        return (
            <div>
                <RegistrationForm />
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
