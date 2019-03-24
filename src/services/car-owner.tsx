import {CarOwnerModel} from "../models/car-owner.model";

const carOwners: CarOwnerModel[] = [{Name: "roni cohen", License: "12345678", phoneNumber: "0548130194"},
    {Name: "inbal galili", License: "5465876", phoneNumber: "0548130194"},
    {Name: "avi G", License: "3245678", phoneNumber: "0548130194"}];

export class CarOwner {

    static getCarOwners(): CarOwnerModel[] {
        return carOwners;
    };
};
