import React, { useEffect } from "react";
import { Button, Typography } from "@mui/material";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { authExpCheck, logout } from "../../redux/authActions";

const mapStateToProps = (state) => {
    return {
        roomNumber: state.roomNumber,
        token: state.token,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
        authExpCheck: () => dispatch(authExpCheck()),
    };
};

const Header = (props) => {
    useEffect(() => {
        props.authExpCheck();
        // props.logout();
    }, []);

    let roomNumbers = null;
    if (props.token === null) {
        roomNumbers = (
            <Typography variant="h6">
                We have 6 rooms left
            </Typography>
        );
    } else {
        roomNumbers = (
            <Typography variant="h6">
                We have {props.roomNumber} rooms left
            </Typography>
        );
    }

    const headerTop = (
        <div className="py-10">
            <div className="flex justify-between">
                <Typography variant="h3">Hotel</Typography>
                <div>
                    <Link to={"/auth"}>
                        <Button variant="outlined" sx={{ marginRight: 2 }}>
                            Login/SignUp
                        </Button>
                    </Link>
                    <Button onClick={() => props.logout()} variant="contained">
                        Logout
                    </Button>
                </div>
            </div>
            <div
                className="mt-4 p-4"
                style={{ backgroundColor: "#1565c0", color: "white" }}
            >
                {/* <Typography variant="h6">
                    We have {props.roomNumber} rooms left
                </Typography> */}
                
                {roomNumbers}
            </div>
        </div>
    );
    return <div>{headerTop}</div>;
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
