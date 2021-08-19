import { MENU_LOADED, MENU_REQUESTED , MENU_ERROR} from "./type"

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

export {menuLoaded, menuRequested, menuError};