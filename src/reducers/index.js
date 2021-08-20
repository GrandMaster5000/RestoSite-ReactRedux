import { MENU_LOADED, MENU_REQUESTED, MENU_ERROR, ITEM_ADD_TO_CARD, ITEM_DELETE_FROM_CARD, SUM_PRICE, DEC_PRICE } from "../actions/type";

const initState = {
    menu: [],
    loading: true,
    error: false,
    items: [],
    sum: 0
}

const reducer = (state = initState, action) => {
    switch(action.type) {
        case MENU_LOADED:
            return {
                ...state,
                menu: action.payload,
                loading: false, 
                error: false
            };
        case MENU_REQUESTED:
            return {
                ...state,
                menu: state.menu,
                loading: true,
                error: false
            };
        case MENU_ERROR:
            return {
                ...state,
                menu: state.menu,
                loading: false,
                error: true
            };
        case ITEM_ADD_TO_CARD:
            const id = action.payload,
            item = state.menu.find(item => item.id === id),
            newItem = {
                title: item.title,
                price: item.price,
                url: item.url,
                id: item.id
            }
            return {
                ...state,
                items: [
                    ...state.items,
                    newItem
                ]
            };
        case ITEM_DELETE_FROM_CARD:
            const idx = action.payload,
            itemIndex = state.items.findIndex(item => item.id === idx);
            return {
                ...state,
                items: [
                    ...state.items.slice(0, itemIndex),
                    ...state.items.slice(itemIndex + 1)
                ]
            };
        case SUM_PRICE:
            let sum = 0;
            state.items.forEach(item => {
                sum += item.price;
            })
            return {
                ...state,
                sum
            };
        case DEC_PRICE:
            return {
                ...state,
                sum: state.sum - action.payload
            }
        default:
            return state
    }
}

export default reducer;