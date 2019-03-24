import {CarOwnerModel} from "../../models/car-owner.model";
import {AutoComplete} from "antd";
import React from "react";
import {SelectValue} from "antd/lib/select";
import {DataSourceItemType} from "antd/lib/auto-complete";
import {isEmpty as _isEmpty} from 'lodash';
import './search-car-owner.scss';
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import axios from "axios";
import {confirmAlert} from "react-confirm-alert";
const SLACK_POST_URL: string = "https://bringg-parking.herokuapp.com";


const PLACE_HOLDER = 'Type in License Plate';
const MORAN_WHATSAPP_TEXT = 'I need your help';

interface Props {
    carOwners: CarOwnerModel[],
    onSelect: (value: SelectValue, option: Object) => any
}

const SearchCarOwner: React.FunctionComponent<Props> = (props: Props) => {

    const onFilter = (inputValue: string, option: any): boolean => {
        return !_isEmpty(inputValue) && option.props.children && option.key.includes(inputValue);
    };

    const createOptions = (): DataSourceItemType[] => {
        return props.carOwners.map(carOwner => {
            return {
                value: carOwner.license.replace(/-/g, ''),
                text: `${carOwner.license} - ${carOwner.name}`
            }
        })
    };

    const sendNoSpotsSlack = () => {
        const data = {
            userName: getOwnSlackUsername(),
        };

        confirmAlert({
            title: 'Send Slack Message',
            message: 'Sending message to #parking - Are you sure?',
            buttons: [
                {
                    label: 'Send',
                    onClick: () => axios.post(`${SLACK_POST_URL}/no_more_parking`, data)
                },
                {
                    label: 'Cancel',
                    onClick: () => {}
                }
            ]
        });
    };

    const getOwnSlackUsername = () => {
        const email = window.localStorage.email || '';
        return email.substr(0, email.indexOf('@'));
    };

    return (
        <div>

            <AutoComplete
                className='search-car-owner'
                dataSource={createOptions()}
                placeholder={<div>{PLACE_HOLDER}<FontAwesomeIcon className='search-icon' icon={faSearch}/></div>}
                filterOption={onFilter}
                onSelect={props.onSelect}
            />
            <span className="no-parking" onClick={sendNoSpotsSlack}>No parking left? Let everyone know</span>
        </div>
    );
};
SearchCarOwner.defaultProps = {
    carOwners: []
};

export default SearchCarOwner;
