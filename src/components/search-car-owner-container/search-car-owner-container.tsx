import {CarOwnerModel} from "../../models/car-owner.model";
import React from "react";
import SearchCarOwner from "../search-car-owner/search-car-owner";
import {SelectValue} from "antd/lib/select";
import './search-car-owner-container';

interface Props {
    carOwners: CarOwnerModel[],
    onSelect: (value: SelectValue, option: Object) => any
}

interface State {
    currentCarOwner: CarOwnerModel | undefined
}

export class SearchCarOwnerContainer extends React.Component<Props, State> {
    render() {
        return <div>
            <SearchCarOwner carOwners={this.props.carOwners} onSelect={this.props.onSelect}/>
        </div>
    }
}
