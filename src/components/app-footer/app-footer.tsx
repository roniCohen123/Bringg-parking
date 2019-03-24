import React from "react";
import './app-footer.scss';
import {Avatar, Col, Row} from "antd";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const AppFooter: React.FunctionComponent = () => {
    return (<Row className='app-footer'>
        <Col span={4}>
            <FontAwesomeIcon className='phone-icon' icon={faPhone} size='3x'/>
        </Col>
        <Col span={16} className='content'>
            <div className={'question-text'}>{'Still no answer?...'}</div>
            <div className={'unleash-text'}>{'Unleash Moran!'}</div>
        </Col>
        <Col span={4} className='photo'>
            <Avatar size={50}></Avatar>
        </Col>
    </Row>)
        ;
};

export default AppFooter;
