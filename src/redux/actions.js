import axios from "axios";
import * as actionTypes from "./actionTypes";
import { URI } from "./URI";

export const addNewCustomer = (name, number, type) => (dispatch) => {
    const newCustomer = {
        name: name,
        number: number,
        type: type,
    };

    const existingCustomers =
        JSON.parse(localStorage.getItem("customers")) || [];

    const updatedCustomers = [...existingCustomers, newCustomer];

    localStorage.setItem("customers", JSON.stringify(updatedCustomers));

    axios
        .post(URI + "customer", newCustomer)
        .then((res) => res.data)
        .then((customer) => dispatch(add(customer)));

    dispatch(getCustomersFromLocalStorage());
};

export const getCustomersFromLocalStorage = () => {
    const customersFromLS = JSON.parse(localStorage.getItem("customers")) || [];
    return {
        type: actionTypes.CUSTOMERS_FROM_LS,
        payload: customersFromLS,
    };
};

export const add = (customer) => {
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


//! -------- Version-1 ---------------

// import axios from "axios";
// import * as actionTypes from "./actionTypes";
// import { URI } from "./URI";

// export const addNewCustomer = (name, number, type) => (dispatch) => {
//     const newCustomer = {
//         name: name,
//         number: number,
//         type: type,
//     };

//     axios
//         .post(URI + "customer", newCustomer)
//         .then((res) => res.data)
//         .then((customer) => dispatch(add(customer)));
// };

// export const add = (customer) => {
//     console.log(customer);
//     return {
//         type: actionTypes.ADD_CUSTOMER,
//         payload: customer,
//     };
// };

// export const showRooms = (room) => {
//     return {
//         type: actionTypes.ROOMS,
//         payload: room,
//     };
// };

// export const fetchRooms = () => (dispatch) => {
//     axios
//         .get(URI + "rooms")
//         .then((res) => res.data)
//         .then((room) => dispatch(showRooms(room)));
// };

// export const DecrementRoomNumber = () => {
//     return {
//         type: actionTypes.DECREMENT_ROOM_NUMBER,
//     };
// };
