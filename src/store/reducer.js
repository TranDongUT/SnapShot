import { FETCH_DATA, RESET_PAGE, SEARCH_IMG } from "./constants";

const initState = {
  images: "",
  searchImg: "",
  resetPage: false,
};

function reducer(state, action) {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        images: action.payload,
      };
    case SEARCH_IMG:
      return {
        ...state,
        searchImg: action.payload,
        resetPage: true,
      };
    case RESET_PAGE:
      return {
        ...state,
        resetPage: false,
      };
    default:
      throw new Error("Invalid Action");
  }
}

export { initState, reducer };
