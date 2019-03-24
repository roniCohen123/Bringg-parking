import {CarOwnerModel} from "../../models/car-owner.model";
import React from "react";
import './car-owner-page-container.scss';
import {Row, Button, Avatar, Col} from "antd";
import {Link} from "react-router-dom";


interface Props {
    carOwner: CarOwnerModel
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

    render() {
        return (
            <div className='car-owner-page'>
                <div className='page-title'>
                    <div className='first-title'>{this.props.carOwner.license}</div>
                    <div className='sub-title'>{this.props.carOwner.name}</div>
                    <div className="car-owner-image" >
                        <Avatar size={100}></Avatar>
                    </div>
                    </div>
                <div className='page-body'>
                    <Row className='text-choose-container'>
                        <Col span={10} className={this.state.isBlocked? 'text-option-selected': 'text-option'} onClick={this.toggleBlocked}>{"Release me"}</Col>
                        <Col span={10} className={this.state.isBlocked? 'text-option': 'text-option-selected'} onClick={this.toggleBlocked}>{"I'm blocking you"}</Col>
                    </Row>
                    <Row className='content'>
                        {`Ask ${this.props.carOwner.name} to \n release you`}
                    </Row>
                    <Row>
                        <Col>
                            <Link data-testid="link" to={''}>
                                <i className="fab fa-whatsapp"></i>

                            </Link>
                        </Col>
                        <Col>
                            <Link data-testid="link" to={''}>
                            </Link>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
};

export default CarOwnerPageContainer;
