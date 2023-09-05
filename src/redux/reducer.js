import * as actionTypes from "./actionTypes";

const INITIAL_STATE = {
    rooms: [],
    customers: [],
    selectedRoom:[],
    roomNumber: 6,
    token: null,
    userId: null,
    authFailedMsg: null,
};

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ROOMS:
            return {
                ...state,
                rooms: action.payload,
            };
        case actionTypes.ADD_CUSTOMER:
            let newCustomer = action.payload;
            return {
                ...state,
                customers: state.customers.concat(newCustomer),
            };
        case actionTypes.DECREMENT_ROOM_NUMBER:
            return {
                ...state,
                roomNumber: --state.roomNumber,
            };
        //! Room Selection 
        case actionTypes.SELECTED_ROOM:
            let selectedRoom = action.payload;
            return {
                ...state,
                selectedRoom: state.selectedRoom.concat(selectedRoom)
            };
        //! Authentication
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                token: action.payload,
                userId: action.payload.userId,
            };
        case actionTypes.AUTH_FAILED:
            return { 
                ...state,
                authFailedMsg: action.payload,
            };
        case actionTypes.AUTH_LOGOUT:
            return {
                ...state,
                token: null,
                userId: null,
                authFailedMsg: null,
            };
        default:
            return state;
    }
};
