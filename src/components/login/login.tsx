import React from "react";
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import './login.scss';

const GOOGLE_TOKEN_INFO_URL = "https://www.googleapis.com/oauth2/v3/tokeninfo";

interface Props {
    loginSucceeded: () => void
};

const Login: React.FunctionComponent<Props> = (props) => {
    const responseGoogle = (response: any) => {
        const token = response.tokenId;

        axios.get(`${GOOGLE_TOKEN_INFO_URL}?id_token=${token}`).then(response => {
            const email = response.data.email;
            window.localStorage.setItem('email', email);
            props.loginSucceeded();
        });
    };

    return (
        <div className='google-login-container'>
            <GoogleLogin
                className='google-login'
                clientId="53515928147-n8d4su0h0obffddrdhdlm3qp6bnhspo3.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
            />
        </div>
);
};

export default Login;
