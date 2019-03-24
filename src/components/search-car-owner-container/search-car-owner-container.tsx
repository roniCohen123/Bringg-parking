import {CarOwnerModel} from "../../models/car-owner.model";
import React from "react";
import SearchCarOwner from "../search-car-owner/search-car-owner";
import {SelectValue} from "antd/lib/select";
import './search-car-owner-container';

const carOwners: CarOwnerModel[] = [{Name: "roni cohen", License: "12345678", phoneNumber: "0548130194"},
    {Name: "inbal galili", License: "5465876", phoneNumber: "0548130194"},
    {Name: "avi G", License: "3245678", phoneNumber: "0548130194"}];

interface Props {
}

interface State {
    currentCarOwner: CarOwnerModel | undefined
}

export class SearchCarOwnerContainer extends React.Component<Props, State> {
    onSelect = (value: SelectValue, option: Object): void => {
        const currentCarOwner = carOwners.find(carOwner => carOwner.License === value);
        this.setState({currentCarOwner});
    };

    render() {
        return <div>
            <SearchCarOwner carOwners={carOwners} onSelect={this.onSelect}/>
        </div>
    }
}
