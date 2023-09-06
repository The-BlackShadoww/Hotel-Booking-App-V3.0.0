import * as actionTypes from "./actionTypes";

const INITIAL_STATE = {
    rooms: [],
    customers: [],
    customersFromLS: [],
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
        //! ----------- CustomersFromLS ----------
        case actionTypes.CUSTOMERS_FROM_LS:
            return {
                ...state,
                customersFromLS: action.payload,
            };
        //! -----Authentication------
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
                customersFromLS: [],
                token: null,
                userId: null,
                authFailedMsg: null,
            };
        default:
            return state;
    }
};



//! -------- v-1 ------------

// import * as actionTypes from "./actionTypes";

// const INITIAL_STATE = {
//     rooms: [],
//     customers: [],
//     customersFromLS: [],
//     roomNumber: 4,
//     token: null,
//     userId: null,
//     authFailedMsg: null,
// };

// export const reducer = (state = INITIAL_STATE, action) => {
//     switch (action.type) {
//         case actionTypes.ROOMS:
//             return {
//                 ...state,
//                 rooms: action.payload,
//             };
//         case actionTypes.ADD_CUSTOMER:
//             let newCustomer = action.payload;
//             return {
//                 ...state,
//                 customers: state.customers.concat(newCustomer),
//             };
//         case actionTypes.DECREMENT_ROOM_NUMBER:
//             return {
//                 ...state,
//                 roomNumber: --state.roomNumber,
//             };
//         //! -----Authentication------
//         case actionTypes.AUTH_SUCCESS:
//             return {
//                 ...state,
//                 token: action.payload,
//                 userId: action.payload.userId,
//             };
//         case actionTypes.AUTH_FAILED:
//             return {
//                 ...state,
//                 authFailedMsg: action.payload,
//             };
//         case actionTypes.AUTH_LOGOUT:
//             return {
//                 ...state,
//                 customersFromLS: [],
//                 token: null,
//                 userId: null,
//                 authFailedMsg: null,
//             };
//         default:
//             return state;
//     }
// };