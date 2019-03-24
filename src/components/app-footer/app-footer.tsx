import React from "react";
import './app-footer.scss';
import {Avatar, Col, Row} from "antd";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const MORAN_PHONE: string = "+972524646027";

const AppFooter: React.FunctionComponent = () => {
    return (<Row className='app-footer'>
        <Col span={4}>
            <a href={`tel:${MORAN_PHONE}`}>
            <FontAwesomeIcon className='phone-icon' icon={faPhone} size='3x'/>
            </a>
        </Col>
        <Col span={16} className='footer-content'>
            <div className={'question-text'}>{'Still no answer?...'}</div>
            <div className={'unleash-text'}>{'Unleash Moran!'}</div>
        </Col>
        <Col span={4} className='photo'>
            <Avatar size={50} src='moran.jpg'></Avatar>
        </Col>
    </Row>)
        ;
};

export default AppFooter;
