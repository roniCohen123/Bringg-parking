import React from "react";
import './app-header.scss';
import {Col, Row} from "antd";

const AppHeader: React.FunctionComponent = () => {
    return (<div className='app-header'>
        <Row>
            <span className='logo-first-part'>{'UNBLOCK.'}</span>
            <span className='logo-second-part'>{'ME'}</span>
        </Row>
    </div>)
    ;
};

export default AppHeader;
