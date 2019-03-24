import React from 'react';
import './App.css';
import {SearchCarOwnerContainer} from "./components/search-car-owner-container/search-car-owner-container";
import AppHeader from "./components/app-header/app-header";
import {Switch, Route, HashRouter, Redirect} from 'react-router-dom';
import Login from "./components/login/login";
import AppFooter from "./components/app-footer/app-footer";

interface Props {
};

interface State {
    userLoggedIn: boolean
};

class App extends React.Component<Props, State> {
    state: State = {
        userLoggedIn: window.localStorage.email? true: false
    };

    loginSucceeded = (): void => {
        this.setState({ userLoggedIn: true});
        this.render();
    };

    render() {
        return (
            <div className="App">
                <AppHeader/>
                <HashRouter basename='/'>
                    <div className='app-body'>
                        <Switch>
                            <Route exact path='/login' render={()=><Login loginSucceeded={this.loginSucceeded}/>}/>
                            <Route exact path='/search' component={SearchCarOwnerContainer}/>
                        </Switch>
                    </div>
                </HashRouter>
                <AppFooter/>
            </div>
        );
    }
}

export default App;
