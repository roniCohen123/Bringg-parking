import {CarOwnerModel} from "../../models/car-owner.model";
import React from "react";
import './car-owner-page-container.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowLeft, faPhone} from '@fortawesome/free-solid-svg-icons'
import {Row, Avatar, Col} from "antd";
import whatsapp from '../../icons/whatsapp-icon.png';
import slack from '../../icons/slack-icon.png';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const BLOCKED_TEXT: string = "Release Me";
const BLOCKING_TEXT: string = "I'm Blocking You";
const BLOCKED_WHATSAPP_TEXT: string = "Please release me!";
const BLOCKING_WHATSAPP_TEXT: string = "FYI - I'm blocking you today!";
const SLACK_POST_URL: string = "https://bringg-parking.herokuapp.com";

interface Props {
    carOwner: CarOwnerModel,
    resetPage: () => void
};

interface State {
  isBlocked: boolean;
  avatar?: string;
};

class CarOwnerPageContainer extends React.Component<Props, State> {
    state: State = {
        isBlocked: true,
    };

    toggleBlocked = (): void => {
        this.setState({isBlocked: !this.state.isBlocked});
    };

    buildWhatsappUrl = (): string => {
        return `https://wa.me/${this.normalizePhoneNumber()}?text=${this.state.isBlocked ? BLOCKED_WHATSAPP_TEXT : BLOCKING_WHATSAPP_TEXT}`;
    };

    sendSlack = () => {
        confirmAlert({
            title: 'Send Slack Message',
            message: 'Are you sure?',
            buttons: [
                {
                    label: 'Send',
                    onClick: () => this.state.isBlocked ? this.sendSlackRelease() : this.sendSlackImBlocking()
                },
                {
                    label: 'Cancel',
                    onClick: () => {}
                }
            ]
        });
    };

    sendSlackRelease = () => {
        const data = {
            blockingUserName: this.props.carOwner.slack,
            blockedUserName: this.getOwnSlackUsername()
        };

        return Promise.resolve(axios.post(`${SLACK_POST_URL}/release`, data));
    };

    sendSlackImBlocking = () => {
        const data = {
            blockingUserName: this.getOwnSlackUsername(),
            blockedUserName: this.props.carOwner.slack
        };

        Promise.resolve(axios.post(`${SLACK_POST_URL}/block`, data));
    };

    getOwnSlackUsername() {
        const email = window.localStorage.email || '';
        return email.substr(0, email.indexOf('@'));
    };

    normalizePhoneNumber = ():string => {
        return this.props.carOwner.phone.replace('0', '972');
    };

    componentDidMount(): void {
        axios.post(`${SLACK_POST_URL}/profile_image`, { userName: this.props.carOwner.slack }).then(imageData => {
            let avatar = 'default_user.png';
            if (imageData.data.success === true && imageData.data.profile && imageData.data.profile.image_192) {
                avatar = imageData.data.profile.image_192;
            }

            this.setState({ ...this.state, avatar: avatar });
        });
    }

    render() {
        return (
            <div className='car-owner-page'>
                <div className='page-title'>
                    <div className='first-title'>
                        <span onClick={this.props.resetPage}>
                            <FontAwesomeIcon className='go-back-icon' icon={faArrowLeft} size='2x'/>
                        </span>
                        {this.props.carOwner.license}</div>
                    <div className='sub-title'>{this.props.carOwner.name}</div>
                    <div className="car-owner-image" >
                        <Avatar size={100} src={this.state.avatar}></Avatar>
                        <a href={"tel:+" + this.normalizePhoneNumber()}>
                            <FontAwesomeIcon className='phone-icon' icon={faPhone} size='3x'/>
                        </a>
                    </div>
                </div>
                <div className='page-body'>
                    <Row className='text-choose-container'>
                        <Col span={2}/>
                        <Col span={10} className={this.state.isBlocked ? 'text-option-selected': 'text-option'} onClick={this.toggleBlocked}>{BLOCKED_TEXT}</Col>
                        <Col span={10} className={this.state.isBlocked ? 'text-option': 'text-option-selected'} onClick={this.toggleBlocked}>{BLOCKING_TEXT}</Col>
                        <Col span={2}/>
                    </Row>
                    <Row className='content-container'>
                        { this.state.isBlocked ?
                            <div className='content'>
                                {`Ask ${this.props.carOwner.name}`} <br/> {`to release you`}
                            </div> :
                            <div className='content'>
                                {`Let ${this.props.carOwner.name}`} <br/> {`know you're blocking them`}
                            </div>
                        }
                    </Row>
                    <Row className='send-message-icons'>
                        <Col span={7}/>
                        <Col span={5}>
                            <a href={this.buildWhatsappUrl()}>
                                <Avatar size={50} src={whatsapp}></Avatar>
                            </a>
                        </Col>
                        <Col span={5}>
                            <div onClick={this.sendSlack}>
                                <Avatar size={50} src={slack}/>
                            </div>
                        </Col>
                        <Col span={7}/>
                    </Row>
                </div>
            </div>
        );
    }
};

export default CarOwnerPageContainer;
