import { FETCH_DATA, RESET_PAGE, SEARCH_IMG } from "./constants";

export const fetchData = (payload) => ({
  type: FETCH_DATA,
  payload,
});

export const searchImg = (payload) => ({
  type: SEARCH_IMG,
  payload,
});
