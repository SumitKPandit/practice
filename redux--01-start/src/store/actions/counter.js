import * as actionTypes from "./actionsTypes";

export const increment = () => {
    return {
        type: actionTypes.INCREMENT
    };
};

export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    };
};

export const change = (typ, val) => {
    return {
        type: typ,
        value: val
    };
};