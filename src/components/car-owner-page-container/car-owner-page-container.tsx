import {CarOwnerModel} from "../../models/car-owner.model";
import React from "react";
import './car-owner-page-container.scss';
import {Row, Button, Avatar} from "antd";

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
                    <div className='first-title'>{this.props.carOwner.License}</div>
                    <div className='sub-title'>{this.props.carOwner.Name}</div>
                    <div className="car-owner-image" >
                        <Avatar size={100}></Avatar>
                    </div>
                    </div>
                <div className='page-body'>
                    <Row>
                        <Button className={this.state.isBlocked? 'text-option-selected': 'text-option'} onClick={this.toggleBlocked}>{"Release me pls!"}</Button>
                        <Button className={this.state.isBlocked? 'text-option': 'text-option-selected'} onClick={this.toggleBlocked}>{"FYI - I'm blocking you"}</Button>
                    </Row>
                    <Row>
                    </Row>
                </div>
            </div>
        );
    }
};

export default CarOwnerPageContainer;
