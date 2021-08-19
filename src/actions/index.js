import { MENU_LOADED } from "./type"

const menuLoaded = (newMenu) => {
    return {
        type: MENU_LOADED,
        payload: newMenu
    };
};

export {menuLoaded};