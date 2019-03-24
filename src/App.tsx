import React from 'react';
import './App.css';
import {SearchCarOwnerContainer} from "./components/search-car-owner-container/search-car-owner-container";
import AppHeader from "./components/app-header/app-header";
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import CarOwnerPageContainer from "./components/car-owner-page-container/car-owner-page-container";
import {SelectValue} from "antd/lib/select";
import {CarOwnerModel} from "./models/car-owner.model";
import Login from "./components/login/login";


const carOwners: CarOwnerModel[] = [{Name: "roni cohen", License: "12345678", phoneNumber: "0548130194"},
    {Name: "inbal galili", License: "5465876", phoneNumber: "0548130194"},
    {Name: "avi G", License: "3245678", phoneNumber: "0548130194"}];

interface Props {

};

interface State {
    currentCarOwner: CarOwnerModel | undefined
};

class App extends React.Component<Props, State> {
    state: State = {
        currentCarOwner: undefined
    };

    onSelect = (value: SelectValue, option: Object): void => {
        const currentCarOwner = carOwners.find(carOwner => carOwner.License === value);
        this.setState({currentCarOwner});
    };

    render() {
    return (
      <div className="App">
        <AppHeader/>
          <Login/>
          <div className='app-body'>
              { this.state.currentCarOwner?
                  <CarOwnerPageContainer carOwner={this.state.currentCarOwner}/> :
                  <SearchCarOwnerContainer carOwners={carOwners} onSelect={this.onSelect}/>
              }

          </div>
      </div>
    );
  }
}

export default App;
