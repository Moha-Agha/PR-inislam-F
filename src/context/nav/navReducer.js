import { SHOW_NAV_SIDEBAR, SET_NAV_SIDEBAR_ITEM, SET_NAV_SIDEBAR_SECTION, SET_NAV_CURRENT } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SHOW_NAV_SIDEBAR:
      return {
        ...state,
        sidebar: action.payload
      };
    case SET_NAV_SIDEBAR_SECTION:
      return {
        ...state,
        sidebarSection: action.payload
      };
    case SET_NAV_SIDEBAR_ITEM:
      return {
        ...state,
        sidebarItem: action.payload
      };
    case SET_NAV_CURRENT:
      return {
        ...state,
        currentNav: action.payload
      };
    default:
      return state;
  }
};
