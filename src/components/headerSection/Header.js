import React, { useEffect } from "react";
import { Button, Typography } from "@mui/material";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { authExpCheck, logout } from "../../redux/authActions";

const mapStateToProps = (state) => {
    return {
        customersFromLS: state.customersFromLS,
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
    }, []);

    let roomNumbers = null;
    if (props.token === null) {
        roomNumbers = (
            <Typography variant="h6">There are only 4 rooms left</Typography>
        );
    } else {
        let roomLeft = 4 - props.customersFromLS.length;
        if (roomLeft === 0) {
            roomNumbers = (
                <Typography variant="h6" sx={{color:"red"}}>Sorry !! There are no room left.</Typography>
            );
        } else {
            roomNumbers = (
                <Typography variant="h6">
                    We have {roomLeft} rooms left
                </Typography>
            );
        }
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
                    <Link to={"/"}>
                        <Button
                            onClick={() => props.logout()}
                            variant="contained"
                        >
                            Logout
                        </Button>
                    </Link>
                </div>
            </div>
            <div
                className="mt-4 p-4"
                style={{ backgroundColor: "#1565c0", color: "white" }}
            >
                {roomNumbers}
            </div>
        </div>
    );
    return <div>{headerTop}</div>;
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);

//! ----- v-1 -------

// import React, { useEffect } from "react";
// import { Button, Typography } from "@mui/material";
// import { connect } from "react-redux";
// import { Link } from "react-router-dom";
// import { authExpCheck, logout } from "../../redux/authActions";

// const mapStateToProps = (state) => {
//     return {
//         roomNumber: state.roomNumber,
//         token: state.token,
//     };
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         logout: () => dispatch(logout()),
//         authExpCheck: () => dispatch(authExpCheck()),
//     };
// };

// const Header = (props) => {
//     useEffect(() => {
//         props.authExpCheck();
//     }, []);

//     let roomNumbers = null;
//     if (props.token === null) {
//         roomNumbers = (
//             <Typography variant="h6">There are only 4 rooms left</Typography>
//         );
//     } else {
//         roomNumbers = (
//             <Typography variant="h6">
//                 We have {props.roomNumber} rooms left
//             </Typography>
//         );
//     }

//     const headerTop = (
//         <div className="py-10">
//             <div className="flex justify-between">
//                 <Typography variant="h3">Hotel</Typography>
//                 <div>
//                     <Link to={"/auth"}>
//                         <Button variant="outlined" sx={{ marginRight: 2 }}>
//                             Login/SignUp
//                         </Button>
//                     </Link>
//                     <Link to={"/"}>
//                         <Button
//                             onClick={() => props.logout()}
//                             variant="contained"
//                         >
//                             Logout
//                         </Button>
//                     </Link>
//                 </div>
//             </div>
//             <div
//                 className="mt-4 p-4"
//                 style={{ backgroundColor: "#1565c0", color: "white" }}
//             >
//                 {roomNumbers}
//             </div>
//         </div>
//     );
//     return <div>{headerTop}</div>;
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Header);
