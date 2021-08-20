import { MENU_LOADED, MENU_REQUESTED , MENU_ERROR, ITEM_ADD_TO_CARD, ITEM_DELETE_FROM_CARD, SUM_PRICE, DEC_PRICE} from "./type"

const menuLoaded = (newMenu) => {
    return {
        type: MENU_LOADED,
        payload: newMenu
    };
};

const menuRequested = () => {
    return {
        type: MENU_REQUESTED
    };
};

const menuError = () => {
    return {
        type: MENU_ERROR
    };
};

const addedToCard = (id) => {
    return {
        type: ITEM_ADD_TO_CARD,
        payload: id
    };
};

const deleteFromCard = (id) => {
    return {
        type: ITEM_DELETE_FROM_CARD,
        payload: id
    };
};

const sumingPrice = () => {
    return {
        type: SUM_PRICE
    }
}

const decPrice = (price) => {
    return {
        type: DEC_PRICE,
        payload: price
    }
}

export {menuLoaded, menuRequested, menuError, addedToCard, deleteFromCard, sumingPrice, decPrice};