import { MENU_LOADED, MENU_REQUESTED, MENU_ERROR } from "../actions/type";

const initState = {
    menu: [],
    loading: true,
    error: false
}

const reducer = (state = initState, action) => {
    switch(action.type) {
        case MENU_LOADED:
            return {
                menu: action.payload,
                loading: false, 
                error: false
            };
        case MENU_REQUESTED:
            return {
                menu: state.menu,
                loading: true,
                error: false
            };
        case MENU_ERROR:
            return {
                menu: state.menu,
                loading: false,
                error: true
            };
        default:
            return state
    }
}

export default reducer;