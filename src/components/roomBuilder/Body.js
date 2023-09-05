import React from "react";
import Builder from "./Builder";
import { Route, Routes } from "react-router-dom";
import RoomBooking from "./RoomBooking";
import { connect } from "react-redux";
import { Typography } from "@mui/material";
import Auth from "../auth/auth";
import AuthAlert from "../auth/AuthAlert";


const mapStateToProps = (state) => {
    return {
        token: state.token,
        roomNumber: state.roomNumber,
    };
};

const Body = (props) => {
    

    let routes = null;
    if (props.roomNumber === 0) {
        routes = (
            <div>
                <Typography variant="h1">No room available</Typography>
            </div>
        );
    } else {
        routes = (
            <div>
                <Routes>
                    <Route path="/" element={<Builder />}></Route>
                    <Route path="/booking" element={<RoomBooking />}></Route>
                    <Route path="/auth" element={<Auth />}></Route>
                    <Route path="/authAlert" element={<AuthAlert />}></Route>
                    {/* <Route path="/test" element={<Test />}></Route> */}
                </Routes>
            </div>
        );
    }
    return <div>{routes}</div>;
};

export default connect(mapStateToProps)(Body);
