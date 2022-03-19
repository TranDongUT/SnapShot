import { FETCH_DATA, SEARCH_IMG } from "./constants";

const initState = {
  images: "",
  searchImg: "",
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
    default:
      throw new Error("Invalid Action");
  }
}

export { initState, reducer };
