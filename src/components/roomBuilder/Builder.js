//!  version-2 ------------------------ 
// import React, { useEffect, useState } from "react";
// import { connect } from "react-redux";
// import { fetchRooms, selectedRoom } from "../../redux/actions";
// import { Grid } from "@mui/material";
// import RoomCardComponent from "./RoomCard";
// import RoomBooking from "./RoomBooking";

// const mapStateToProps = (state) => {
//     return {
//         rooms: state.rooms,
//         selectedRoom: state.selectedRoom,
//     };
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         FetchRooms: () => dispatch(fetchRooms()),
//         // SelectedRoom: (room) => dispatch(selectedRoom(room)),
//     };
// };

// const Builder = (props) => {
//     useEffect(() => {
//         props.FetchRooms();
//         // props.SelectedRoom();
//     }, []);
//     const [selectedRoom, setSelectedRoom] = useState("");

    

//     const handleSelectedRoom = (room) => {
//         setSelectedRoom(room);
//     };
//     console.log(selectedRoom);

//     const controller = props.rooms.map((room) => {
//         const grid = (
//             <Grid item xs={4} key={room.id}>
//                 <RoomCardComponent
//                     rooms={room}
//                     handleSelectedRoom={handleSelectedRoom}
//                 />
//             </Grid>
//         );
//         return grid;
//     });

//     return (
//         <div>
//             <Grid container spacing={4}>
//                 {controller}
//             </Grid>
//         </div>
//     );
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Builder);

//! version-1 ---------

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchRooms } from "../../redux/actions";
import { Grid } from "@mui/material";
import RoomCardComponent from "./RoomCard";

const mapStateToProps = (state) => {
    return {
        rooms: state.rooms,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        FetchRooms: () => dispatch(fetchRooms()),
    };
};

const Builder = (props) => {
    useEffect(() => {
        props.FetchRooms();
    }, []);

    const grid = props.rooms.map((room) => (
        <Grid item xs={4} key={room.id}>
            <RoomCardComponent rooms={room} />
        </Grid>
    ));

    return (
        <div>
            <Grid container spacing={4}>
                {grid}
            </Grid>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Builder);
