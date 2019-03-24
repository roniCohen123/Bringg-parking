import {CarOwnerModel} from "../models/car-owner.model";
import axios from 'axios';

const CARS_URL = 'https://bringg-parking.herokuapp.com/cars';

var carOwners: CarOwnerModel[] = [];

axios.get(`${CARS_URL}`).then(response => {
    carOwners = response.data.cars;
});

export class CarOwner {

    static getCarOwners(): CarOwnerModel[] {
        return carOwners;
    };
};
