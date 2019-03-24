import React from "react";
import GoogleLogin from 'react-google-login';

const Login: React.FunctionComponent = () => {
    const responseGoogle = (response: any) => {
        console.log(response);
    };

    return (<GoogleLogin
        clientId="53515928147-n8d4su0h0obffddrdhdlm3qp6bnhspo3.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
    />);
};

export default Login;
