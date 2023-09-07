import { Alert, Button, Card, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { addNewCustomer } from "../../redux/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const mapStateToProps = (state) => {
    return {
        customers: state.customers,
        customersFromLS: state.customersFromLS,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        AddNewCustomer: (name, number, type) =>
            dispatch(addNewCustomer(name, number, type)),
    };
};

const RoomBooking = (props) => {
    useEffect(() => {}, []);

    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [type, setType] = useState("General");
    const [error, setError] = useState("");
    const [booked, setBooked] = useState(false);

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleNumber = (e) => {
        setNumber(e.target.value);
    };

    const handleType = (e) => {
        setType(e.target.value);
    };

    let options = (
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
        </select>
    );

    const isGenAvailable = props.customersFromLS.some(
        (c) => c.type === "General"
    );
    const isGenPAvailable = props.customersFromLS.some(
        (c) => c.type === "General premium"
    );
    const isSingleBedAvailable = props.customersFromLS.some(
        (c) => c.type === "Single Bed"
    );
    const isDoubleBedAvailable = props.customersFromLS.some(
        (c) => c.type === "Double Bed"
    );

    //! --------- Options -----------
    if (
        isDoubleBedAvailable &&
        !isGenAvailable &&
        !isGenPAvailable &&
        !isSingleBedAvailable
    ) {
        options = (
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
            </select>
        );
    } else if (
        !isDoubleBedAvailable &&
        isGenAvailable &&
        !isGenPAvailable &&
        !isSingleBedAvailable
    ) {
        options = (
            <select
                name="type"
                value={type}
                onChange={handleType}
                required
                className="border p-4 w-full my-4"
            >
                <option value="General premium">General premium</option>
                <option value="Single Bed">Single Bed</option>
                <option value="Double Bed">Double Bed</option>
            </select>
        );
    } else if (
        !isDoubleBedAvailable &&
        !isGenAvailable &&
        isGenPAvailable &&
        !isSingleBedAvailable
    ) {
        options = (
            <select
                name="type"
                value={type}
                onChange={handleType}
                required
                className="border p-4 w-full my-4"
            >
                <option value="General">General</option>
                <option value="Single Bed">Single Bed</option>
                <option value="Double Bed">Double Bed</option>
            </select>
        );
    } else if (
        !isDoubleBedAvailable &&
        !isGenAvailable &&
        !isGenPAvailable &&
        isSingleBedAvailable
    ) {
        options = (
            <select
                name="type"
                value={type}
                onChange={handleType}
                required
                className="border p-4 w-full my-4"
            >
                <option value="General">General</option>
                <option value="General premium">General premium</option>
                <option value="Double Bed">Double Bed</option>
            </select>
        );
    } else if (
        !isDoubleBedAvailable &&
        isGenAvailable &&
        isGenPAvailable &&
        isSingleBedAvailable
    ) {
        options = (
            <select
                name="type"
                value={type}
                onChange={handleType}
                required
                className="border p-4 w-full my-4"
            >
                <option value="Double Bed">Double Bed</option>
            </select>
        );
    } else if (
        isDoubleBedAvailable &&
        !isGenAvailable &&
        isGenPAvailable &&
        isSingleBedAvailable
    ) {
        options = (
            <select
                name="type"
                value={type}
                onChange={handleType}
                required
                className="border p-4 w-full my-4"
            >
                <option value="General">General</option>
            </select>
        );
    } else if (
        isDoubleBedAvailable &&
        isGenAvailable &&
        !isGenPAvailable &&
        isSingleBedAvailable
    ) {
        options = (
            <select
                name="type"
                value={type}
                onChange={handleType}
                required
                className="border p-4 w-full my-4"
            >
                <option value="General premium">General premium</option>
            </select>
        );
    } else if (
        isDoubleBedAvailable &&
        isGenAvailable &&
        isGenPAvailable &&
        !isSingleBedAvailable
    ) {
        options = (
            <select
                name="type"
                value={type}
                onChange={handleType}
                required
                className="border p-4 w-full my-4"
            >
                <option value="Single Bed">Single Bed</option>
            </select>
        );
    } else if (
        !isDoubleBedAvailable &&
        !isGenAvailable &&
        isGenPAvailable &&
        isSingleBedAvailable
    ) {
        options = (
            <select
                name="type"
                value={type}
                onChange={handleType}
                required
                className="border p-4 w-full my-4"
            >
                <option value="General">General</option>
                <option value="Double Bed">Double Bed</option>
            </select>
        );
    } else if (
        !isDoubleBedAvailable &&
        isGenAvailable &&
        !isGenPAvailable &&
        isSingleBedAvailable
    ) {
        options = (
            <select
                name="type"
                value={type}
                onChange={handleType}
                required
                className="border p-4 w-full my-4"
            >
                <option value="General premium">General premium</option>
                <option value="Double Bed">Double Bed</option>
            </select>
        );
    } else if (
        !isDoubleBedAvailable &&
        isGenAvailable &&
        isGenPAvailable &&
        !isSingleBedAvailable
    ) {
        options = (
            <select
                name="type"
                value={type}
                onChange={handleType}
                required
                className="border p-4 w-full my-4"
            >
                <option value="Single Bed">Single Bed</option>
                <option value="Double Bed">Double Bed</option>
            </select>
        );
    } else if (
        isDoubleBedAvailable &&
        !isGenAvailable &&
        !isGenPAvailable &&
        isSingleBedAvailable
    ) {
        options = (
            <select
                name="type"
                value={type}
                onChange={handleType}
                required
                className="border p-4 w-full my-4"
            >
                <option value="General">General</option>
                <option value="General premium">General premium</option>
            </select>
        );
    } else if (
        isDoubleBedAvailable &&
        !isGenAvailable &&
        isGenPAvailable &&
        !isSingleBedAvailable
    ) {
        options = (
            <select
                name="type"
                value={type}
                onChange={handleType}
                required
                className="border p-4 w-full my-4"
            >
                <option value="General">General</option>
                <option value="Single Bed">Single Bed</option>
            </select>
        );
    } else if (
        isDoubleBedAvailable &&
        isGenAvailable &&
        !isGenPAvailable &&
        !isSingleBedAvailable
    ) {
        options = (
            <select
                name="type"
                value={type}
                onChange={handleType}
                required
                className="border p-4 w-full my-4"
            >
                <option value="General premium">General premium</option>
                <option value="Single Bed">Single Bed</option>
            </select>
        );
    } else if (
        isDoubleBedAvailable &&
        isGenAvailable &&
        isGenPAvailable &&
        isSingleBedAvailable
    ) {
        options = (
            <select
                name="type"
                value={type}
                onChange={handleType}
                required
                className="border p-4 w-full my-4"
                disabled
            >
                <option value="No option left">No room left</option>
            </select>
        );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (/^01[0-9]{9}$/.test(number)) {
            props.AddNewCustomer(name, number, type);
            setError("");
        } else {
            setError("Invalid phone number");
        }

        setName("");
        setNumber("");
        setType("");
        setBooked(!booked);
    };

    let bookedRoom = null;
    if (booked) {
        bookedRoom = (
            <div>
                <Alert severity="success">
                    Room Booked
                    <Link to={"/"}>
                        <Button variant="outlined" sx={{ marginLeft: 2 }}>
                            Go to home
                        </Button>
                    </Link>
                </Alert>
            </div>
        );
    } else {
        bookedRoom = (
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
                {error && <p className="text-red-500">{error}</p>}
                {options}

                <Button
                    variant="contained"
                    type="submit"
                >
                    Confirm Booking
                </Button>
            </form>
        );
    }

    return (
        <div>
            <div className="mb-4">
                <Typography variant="h5">Give your information </Typography>
            </div>

            <Card sx={{ padding: 5 }}> {bookedRoom} </Card>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomBooking);
