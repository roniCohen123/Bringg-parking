import {CarOwnerModel} from "../../models/car-owner.model";
import {AutoComplete} from "antd";
import React from "react";
import { SelectValue} from "antd/lib/select";
import {DataSourceItemType} from "antd/lib/auto-complete";
import {isEmpty as _isEmpty} from 'lodash';

const carOwners: CarOwnerModel[] = [{Name: "roni cohen", License: "12345678", phoneNumber: "0548130194"},
    {Name: "inbal galili", License: "5465876", phoneNumber: "0548130194"},
    {Name: "avi G", License: "3245678", phoneNumber: "0548130194"}];
const PLACE_HOLDER = 'Insert car license';

interface Props {
    carOwners: CarOwnerModel[],
    onSelect: (value: SelectValue, option: Object) => any
}

const SearchCarOwner: React.FunctionComponent<Props> = (props: Props) => {

    const onFilter = (inputValue: string, option: any): boolean => {
        return !_isEmpty(inputValue) && option.props.children && option.props.children.includes(inputValue);
    };

    const createOptions = (): DataSourceItemType[] => {
        if (!props.carOwners) {
            return [];
        }

        return props.carOwners.map(carOwner => {return {
            value: carOwner.License,
            text: `${carOwner.License} - ${carOwner.Name}`
        }})
    };

    return (
        <AutoComplete
            dataSource={createOptions()}
            placeholder={PLACE_HOLDER}
            filterOption={onFilter}
            onSelect={props.onSelect}
        />
    );
};

SearchCarOwner.defaultProps = {
    carOwners: []
};

export default SearchCarOwner;
