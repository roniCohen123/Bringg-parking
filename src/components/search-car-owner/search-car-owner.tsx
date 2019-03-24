import {CarOwnerModel} from "../../models/car-owner.model";
import {AutoComplete} from "antd";
import React from "react";
import { SelectValue} from "antd/lib/select";
import {DataSourceItemType} from "antd/lib/auto-complete";
import {isEmpty as _isEmpty} from 'lodash';
import './search-car-owner.scss';
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const PLACE_HOLDER = 'Type in License Plate';

interface Props {
    carOwners: CarOwnerModel[],
    onSelect: (value: SelectValue, option: Object) => any
}

const SearchCarOwner: React.FunctionComponent<Props> = (props: Props) => {

    const onFilter = (inputValue: string, option: any): boolean => {
        return !_isEmpty(inputValue) && option.props.children && option.key.includes(inputValue);
    };

    const createOptions = (): DataSourceItemType[] => {
        return props.carOwners.map(carOwner => {return {
            value: carOwner.license.replace(/-/g, ''),
            text: `${carOwner.license} - ${carOwner.name}`
        }})
    };

    return (
        <AutoComplete
            className='search-car-owner'
            dataSource={createOptions()}
            placeholder={<div>{PLACE_HOLDER}<FontAwesomeIcon className='search-icon' icon={faSearch}/></div>}
            filterOption={onFilter}
            onSelect={props.onSelect}
            defaultOpen={true}
            open={true}
        />
    );
};
SearchCarOwner.defaultProps = {
    carOwners: []
};

export default SearchCarOwner;
