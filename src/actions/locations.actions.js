import { ADD_LOCATION } from "./types";

export const addLocation = location => ({
    type: ADD_LOCATION,
    data: location
});
