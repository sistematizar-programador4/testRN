
import { ADD_LOCATION } from "../actions/types";
import { AsyncStorage } from "react-native";

const initialState = {
    locationList: []
};

const locationtReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_LOCATION:
            return {
                ...state,
                locationList: state.locationList.concat({
                    key: Math.random(),
                    name: action.data
                })
            };
        default:
            return state;
    }
};

export default locationtReducer;
