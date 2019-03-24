import {CarOwnerModel} from "../../models/car-owner.model";
import React from "react";
import SearchCarOwner from "../search-car-owner/search-car-owner";
import {SelectValue} from "antd/lib/select";
import './search-car-owner-container';
import {CarOwner} from "../../services/car-owner";
import {Redirect} from "react-router";
import CarOwnerPageContainer from "../car-owner-page-container/car-owner-page-container";
import axios from 'axios';
const CARS_URL = 'https://bringg-parking.herokuapp.com/cars';

interface Props {
}

interface State {
    currentCarOwner: CarOwnerModel | undefined,
    carOwners: CarOwnerModel[] | []

}

export class SearchCarOwnerContainer extends React.Component<Props, State> {
    state: State = {
        currentCarOwner: undefined,
        carOwners: []
    };

    onSelect = (value: SelectValue, option: Object): any => {
        const currentCarOwner = CarOwner.getCarOwners().find(carOwner => carOwner.license === value);
        if (currentCarOwner) {
            this.setState({...this.state, currentCarOwner});
        }
    };

    componentWillMount(){
        axios.get(`${CARS_URL}`).then(response => {
            this.setState({...this.state, carOwners: response.data});
        });
    }

    render() {
        return <div>
            {
                this.state.currentCarOwner?
                    <CarOwnerPageContainer carOwner={this.state.currentCarOwner}/> :
                    <SearchCarOwner carOwners={this.state.carOwners} onSelect={this.onSelect}/>
            }
        </div>
    }
}
