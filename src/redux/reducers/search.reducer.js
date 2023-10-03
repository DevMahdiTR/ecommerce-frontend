import { SearchTypes } from "../types";

const initialState = {
    status: false,
}


const SearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SearchTypes.TOGGLE_SEARCH:
            return {
                ...state,
                status: action.payload,
            }
        default:
            return state;
    }
}

export default SearchReducer;