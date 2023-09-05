import axios from "axios";
import * as actionTypes from "./actionTypes";
import { URI } from "./URI";

export const addNewCustomer = (name, number, type) => (dispatch) => {
    const newCustomer = {
        name: name,
        number: number,
        type: type,
    };

    axios
        .post(URI + "customer", newCustomer)
        .then((res) => res.data)
        .then((customer) => dispatch(add(customer)));

    // axios.post(URI + "customer", newCustomer).then((res) => {
    //     localStorage.setItem("bookedRoom", JSON.stringify(res.data));
    //     dispatch(add(res.data));
    // });
};

export const add = (customer) => {
    console.log(customer);
    return {
        type: actionTypes.ADD_CUSTOMER,
        payload: customer,
    };
};

export const showRooms = (room) => {
    return {
        type: actionTypes.ROOMS,
        payload: room,
    };
};

export const fetchRooms = () => (dispatch) => {
    axios
        .get(URI + "rooms")
        .then((res) => res.data)
        .then((room) => dispatch(showRooms(room)));
};

export const DecrementRoomNumber = () => {
    return {
        type: actionTypes.DECREMENT_ROOM_NUMBER,
    };
};

//! ---------------------------------------------------------
export const selectedRoom = (room) => (dispatch) => {
    const selectedRoom = room;
    axios
        .post(URI + "selectedRoom", selectedRoom)
        .then((res) => res.data)
        .then((room) => dispatch(add(room)));
};

export const addRoom = (room) => {
    return {
        type: actionTypes.SELECTED_ROOM,
        payload: room,
    };
};
