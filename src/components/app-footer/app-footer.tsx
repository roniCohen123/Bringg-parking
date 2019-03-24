import React from "react";
import './app-footer.scss';
import {Avatar, Col, Row} from "antd";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const MORAN_PHONE: string = "+972524646027";



const AppFooter: React.FunctionComponent = () => {
    const moranText = 'I need your help...';
    const whatsappUrl = `https://wa.me/972524646027?text=${moranText}`;

    return (<Row className='app-footer'>
        <Col span={4} className='photo'>
            <a href={whatsappUrl}>
                <Avatar size={50} src='moran.jpg'></Avatar>
            </a>
        </Col>
        <Col span={16} className='footer-content'>
            <div className={'question-text'}>{'Still no answer?...'}</div>
            <div className={'unleash-text'}>{'Unleash Moran!'}</div>
        </Col>
        <Col span={4}>
            <a href={`tel:${MORAN_PHONE}`}>
                <FontAwesomeIcon className='phone-icon' icon={faPhone} size='3x'/>
            </a>
        </Col>
    </Row>)
        ;
};

export default AppFooter;
