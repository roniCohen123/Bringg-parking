import {CarOwnerModel} from "../../models/car-owner.model";
import React from "react";
import SearchCarOwner from "../search-car-owner/search-car-owner";
import {SelectValue} from "antd/lib/select";
import './search-car-owner-container';
import {CarOwner} from "../../services/car-owner";
import {Redirect} from "react-router";
import CarOwnerPageContainer from "../car-owner-page-container/car-owner-page-container";

interface Props {
}

interface State {
    currentCarOwner: CarOwnerModel | undefined
}

export class SearchCarOwnerContainer extends React.Component<Props, State> {
    state: State = {
        currentCarOwner: undefined
    };

    onSelect = (value: SelectValue, option: Object): any => {
        const currentCarOwner = CarOwner.getCarOwners().find(carOwner => carOwner.License === value);
        if (currentCarOwner) {
            this.setState({currentCarOwner});
        }
    };

    render() {
        return <div>
            {
                this.state.currentCarOwner?
                    <CarOwnerPageContainer carOwner={this.state.currentCarOwner}/> :
                    <SearchCarOwner carOwners={CarOwner.getCarOwners()} onSelect={this.onSelect}/>
            }
        </div>
    }
}
