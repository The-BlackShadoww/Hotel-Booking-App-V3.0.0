import React from "react";
import Builder from "./Builder";
import { Route, Routes } from "react-router-dom";
import RoomBooking from "./RoomBooking";
import { connect } from "react-redux";
import Auth from "../auth/auth";
import AuthAlert from "../auth/AuthAlert";

const mapStateToProps = (state) => {
    return {
        token: state.token,
    };
};

const Body = (props) => {
    let routes = (
        <div>
            <Routes>
                <Route path="/" element={<Builder />}></Route>
                <Route path="/booking" element={<RoomBooking />}></Route>
                <Route path="/auth" element={<Auth />}></Route>
                <Route path="/authAlert" element={<AuthAlert />}></Route>
            </Routes>
        </div>
    );
    return <div>{routes}</div>;
};

export default connect(mapStateToProps)(Body);
