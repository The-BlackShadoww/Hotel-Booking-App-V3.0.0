import React, { useEffect } from "react";
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
        <Grid item xs={6} key={room.id}>
            <RoomCardComponent rooms={room} />
        </Grid>
    ));

    return (
        <div>
            <div>
                <Grid container spacing={6}>
                    {grid}
                </Grid>
            </div>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Builder);
