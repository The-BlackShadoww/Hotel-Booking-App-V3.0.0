import React, { useEffect } from "react";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material";
import { URI } from "../../redux/URI";
import StarRateIcon from "@mui/icons-material/StarRate";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getCustomersFromLocalStorage } from "../../redux/actions";

const mapStateToProps = (state) => {
    return {
        token: state.token,
        customers: state.customers,
        customersFromLS: state.customersFromLS,
    };
};

const RoomCardComponent = (props) => {
    console.log(props.customers);
    console.log(props.customersFromLS);

    useEffect(() => {
        props.getCustomersFromLocalStorage();
    }, []);

    let bookingRoute = null;
    if (props.token === null) {
        bookingRoute = (
            <Link to={"/authAlert"}>
                <Button variant="contained" size="small">
                    Book now
                </Button>
            </Link>
        );
    } else {
        const isCustomerInLocalStorage = props.customersFromLS.some(
            (c) => c.type === props.rooms.name
        );

        if (isCustomerInLocalStorage) {
            bookingRoute = (
                <div>
                    <Button variant="contained" size="small" disabled>
                        Booked
                    </Button>
                </div>
            );
        } else {
            bookingRoute = (
                <div>
                    <Link to={"/booking"}>
                        <Button variant="contained" size="small">
                            Book now
                        </Button>
                    </Link>
                </div>
            );
        }
    }

    const roomCard = (
        <div>
            <div>
                <Card sx={{ maxWidth: 575 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={`${URI}${props.rooms.image}`}
                        title="green iguana"
                    />
                    <CardContent>
                        <div className="flex justify-between">
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                            >
                                {`${props.rooms.name}`}
                            </Typography>
                            <Typography variant="body2">
                                <StarRateIcon />
                                {`${props.rooms.rating}`}
                            </Typography>
                        </div>
                        <div className="flex justify-between">
                            <span>
                                <Typography
                                    variant="body1"
                                    color="text.secondary"
                                >
                                    {`${props.rooms.wifi}`}
                                </Typography>
                            </span>
                            <span>
                                <Typography
                                    variant="body1"
                                    color="text.secondary"
                                >
                                    {`${props.rooms.bed} Bed`}
                                </Typography>
                            </span>
                            <span>
                                <Typography
                                    variant="body1"
                                    color="text.secondary"
                                >
                                    {`${props.rooms.bathroom} Bathroom`}
                                </Typography>
                            </span>
                            <span>
                                <Typography
                                    variant="body1"
                                    color="text.secondary"
                                >
                                    {`${props.rooms.sofa} Sofa`}
                                </Typography>
                            </span>
                        </div>
                    </CardContent>
                    <CardActions>
                        <div className="w-full flex justify-between">
                            <div className="flex">
                                <Typography variant="h6">
                                    {" "}
                                    {`${props.rooms.price}`}
                                </Typography>
                            </div>
                            {bookingRoute}
                        </div>
                    </CardActions>
                </Card>
            </div>
        </div>
    );

    return <div>{roomCard}</div>;
};

export default connect(mapStateToProps, { getCustomersFromLocalStorage })(
    RoomCardComponent
);



//! ------ V-1 ----------

// import React, { useEffect } from "react";
// import {
//     Button,
//     Card,
//     CardActions,
//     CardContent,
//     CardMedia,
//     Typography,
// } from "@mui/material";
// import { URI } from "../../redux/URI";
// import StarRateIcon from "@mui/icons-material/StarRate";
// import { Link } from "react-router-dom";
// import { connect } from "react-redux";


// const mapStateToProps = (state) => {
//     return {
//         token: state.token,
//         customers: state.customers,
//         customersFromLS: state.customersFromLS,
//     };
// };

// const RoomCardComponent = (props) => {
//     console.log(props.customers);
//     console.log(props.customersFromLS);



//     let bookingRoute = null;
//     if (props.token === null) {
//         bookingRoute = (
//             <Link to={"/authAlert"}>
//                 <Button variant="contained" size="small">
//                     Book now
//                 </Button>
//             </Link>
//         );
//     } else {

//         const isRoomTypeAvailable = props.customers.some(
//             (customer) => customer.type === props.rooms.name
//         );

//         if (isRoomTypeAvailable) {
//             bookingRoute = (
//                 <div>
//                     <Button variant="contained" size="small" disabled>
//                         Booked
//                     </Button>
//                 </div>
//             );
//         } else {
//             bookingRoute = (
//                 <div>
//                     <Link to={"/booking"}>
//                         <Button variant="contained" size="small">
//                             Book now
//                         </Button>
//                     </Link>
//                 </div>
//             );
//         }
//     }

//     const roomCard = (
//         <div>
//             <div>
//                 <Card sx={{ maxWidth: 575 }}>
//                     <CardMedia
//                         sx={{ height: 140 }}
//                         image={`${URI}${props.rooms.image}`}
//                         title="green iguana"
//                     />
//                     <CardContent>
//                         <div className="flex justify-between">
//                             <Typography
//                                 gutterBottom
//                                 variant="h5"
//                                 component="div"
//                             >
//                                 {`${props.rooms.name}`}
//                             </Typography>
//                             <Typography variant="body2">
//                                 <StarRateIcon />
//                                 {`${props.rooms.rating}`}
//                             </Typography>
//                         </div>
//                         <div className="flex justify-between">
//                             <span>
//                                 <Typography
//                                     variant="body1"
//                                     color="text.secondary"
//                                 >
//                                     {`${props.rooms.wifi}`}
//                                 </Typography>
//                             </span>
//                             <span>
//                                 <Typography
//                                     variant="body1"
//                                     color="text.secondary"
//                                 >
//                                     {`${props.rooms.bed} Bed`}
//                                 </Typography>
//                             </span>
//                             <span>
//                                 <Typography
//                                     variant="body1"
//                                     color="text.secondary"
//                                 >
//                                     {`${props.rooms.bathroom} Bathroom`}
//                                 </Typography>
//                             </span>
//                             <span>
//                                 <Typography
//                                     variant="body1"
//                                     color="text.secondary"
//                                 >
//                                     {`${props.rooms.sofa} Sofa`}
//                                 </Typography>
//                             </span>
//                         </div>
//                     </CardContent>
//                     <CardActions>
//                         <div className="w-full flex justify-between">
//                             <div className="flex">
//                                 <Typography variant="h6">
//                                     {" "}
//                                     {`${props.rooms.price}`}
//                                 </Typography>
//                             </div>
//                             {bookingRoute}
//                         </div>
//                     </CardActions>
//                 </Card>
//             </div>
//         </div>
//     );

//     return <div>{roomCard}</div>;
// };
// export default connect(mapStateToProps)(
//     RoomCardComponent
// );