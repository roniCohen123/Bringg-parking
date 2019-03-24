import {CarOwnerModel} from "../../models/car-owner.model";
import React from "react";
import './car-owner-page-container.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowLeft, faPhone} from '@fortawesome/free-solid-svg-icons'
import {Row, Avatar, Col} from "antd";
import whatsapp from '../../icons/whatsapp-icon.png';
import slack from '../../icons/slack-icon.png';

const BLOCKED_TEXT: string = "Release me";
const BLOCKING_TEXT: string = "I'm blocking you";

interface Props {
    carOwner: CarOwnerModel,
    resetPage: () => void
};

interface State {
  isBlocked: boolean;
};

class CarOwnerPageContainer extends React.Component<Props, State> {
    state: State = {
        isBlocked: true
    };

    toggleBlocked = (): void => {
        this.setState({isBlocked: !this.state.isBlocked});
    };

    buildWhatsappUrl = (): string => {
        return `https://wa.me/${this.props.carOwner.phone}?text=${this.state.isBlocked? BLOCKED_TEXT: BLOCKING_TEXT}`;
    };

    buildSlackUrl = (): string => {
        return '';
    };

    render() {
        return (
            <div className='car-owner-page'>
                <div className='page-title'>
                    <div className='first-title'>
                        <span onClick={this.props.resetPage}>
                            <FontAwesomeIcon className='go-back-icon' icon={faArrowLeft}/>
                        </span>
                        {this.props.carOwner.license}</div>
                    <div className='sub-title'>{this.props.carOwner.name}</div>
                    <div className="car-owner-image" >
                        <Avatar size={100}></Avatar>
                        <FontAwesomeIcon className='phone-icon' icon={faPhone} size='2x'/>
                    </div>
                </div>
                <div className='page-body'>
                    <Row className='text-choose-container'>
                        <Col span={2}/>
                        <Col span={10} className={this.state.isBlocked? 'text-option-selected': 'text-option'} onClick={this.toggleBlocked}>{BLOCKED_TEXT}</Col>
                        <Col span={10} className={this.state.isBlocked? 'text-option': 'text-option-selected'} onClick={this.toggleBlocked}>{BLOCKING_TEXT}</Col>
                        <Col span={2}/>
                    </Row>
                    <Row className='content'>
                        {`Ask ${this.props.carOwner.name} to \n release you`}
                    </Row>
                    <Row>
                        <Col span={12}>
                            <a href={this.buildWhatsappUrl()}>
                                <Avatar src={whatsapp}></Avatar>
                            </a>
                        </Col>
                        <Col span={12}>
                            <a href={this.buildSlackUrl()}>
                                <Avatar size='large' src={slack}/>
                            </a>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
};

export default CarOwnerPageContainer;
