import React from 'react';
import './App.css';
import {SearchCarOwnerContainer} from "./components/search-car-owner-container/search-car-owner-container";
import AppHeader from "./components/app-header/app-header";
import {BrowserRouter, Switch, Route, Redirect, HashRouter} from 'react-router-dom';
import CarOwnerPageContainer from "./components/car-owner-page-container/car-owner-page-container";
import {SelectValue} from "antd/lib/select";
import {CarOwnerModel} from "./models/car-owner.model";
import Login from "./components/login/login";


interface Props {

};

interface State {
    currentCarOwner: CarOwnerModel | undefined
};

class App extends React.Component<Props, State> {
    state: State = {
        currentCarOwner: undefined
    };

    render() {
    return (
      <div className="App">
        <AppHeader/>
          <HashRouter basename='/'>
              <div className='app-body'>
                  <Route path='/search' component={SearchCarOwnerContainer}/>
                  <Route path='/login' component={Login}/>
              </div>
          </HashRouter>
      </div>
    );
  }
}

export default App;
