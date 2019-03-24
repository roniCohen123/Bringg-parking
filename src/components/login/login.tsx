import React from "react";
import GoogleLogin from 'react-google-login';
import axios from 'axios';

const GOOGLE_TOKEN_INFO_URL = "https://www.googleapis.com/oauth2/v3/tokeninfo";

const Login: React.FunctionComponent = () => {
    const responseGoogle = (response: any) => {
        const token = response.hg.id_token;
        console.log(response);
        console.log(token);
        console.log(window.localStorage);

        axios.get(`${GOOGLE_TOKEN_INFO_URL}?id_token=${token}`).then(response => {
            const email = response.data.email;
            console.log(email);
            window.localStorage.setItem('email', email);
        });
    };

    return (<GoogleLogin
        clientId="53515928147-n8d4su0h0obffddrdhdlm3qp6bnhspo3.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
    />);
};

export default Login;
