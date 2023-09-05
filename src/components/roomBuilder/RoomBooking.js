import { Button, Card, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { addNewCustomer, DecrementRoomNumber } from "../../redux/actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        roomNumber: state.roomNumber,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        AddNewCustomer: (name, number, type) =>
            dispatch(addNewCustomer(name, number, type)),
        DecrementRoomNumber: () => dispatch(DecrementRoomNumber()),
    };
};

const RoomBooking = (props) => {
    // useEffect(() => {
    //     props.AddNewCustomer();
    //     props.DecrementRoomNumber();
    // }, []);
    useEffect(() => {}, []);

    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [type, setType] = useState("General");

    const handleName = (e) => {
        setName(e.target.value);
    };
    const handleNumber = (e) => {
        setNumber(e.target.value);
    };
    const handleType = (e) => {
        setType(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.AddNewCustomer(name, number, type);
        props.DecrementRoomNumber();

        setName("");
        setNumber("");
        setType("");
    };

    const form = (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={name}
                placeholder="Enter your name"
                onChange={handleName}
                required
                className="border p-4 w-full"
            />
            <input
                type="tel"
                name="number"
                value={number}
                placeholder="Give your phone number"
                onChange={handleNumber}
                required
                className="border p-4 w-full my-4"
            />
            <select
                name="type"
                value={type}
                onChange={handleType}
                required
                className="border p-4 w-full my-4"
            >
                <option value="General">General</option>
                <option value="General premium">General premium</option>
                <option value="Single Bed">Single Bed</option>
                <option value="Double Bed">Double Bed</option>
                <option value="Master">Master</option>
                <option value="Master(Double Bed)">Master(Double Bed)</option>
            </select>
            <Button variant="contained" type="submit">
                Confirm Booking
            </Button>
        </form>
    );
    return (
        <div>
            <div className="mb-4">
                <Typography variant="h6">Give your information </Typography>
            </div>
            <Card sx={{ padding: 5 }}>{form}</Card>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomBooking);
