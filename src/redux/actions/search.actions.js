import { SearchTypes } from '../types.index';

export const ToggleSearch = (data) => {
    return {
        type: SearchTypes.TOGGLE_SEARCH,
        payload: data
    }
}