import { useContext, useEffect } from "react";
import { action, ImagesContext } from "../store";
import axios from "axios";
import style from "./style/searchStyle.module.scss";

function Search({ onPageChange }) {
  const [state, dispatch] = useContext(ImagesContext);

  const handleInput = (e) => {
    dispatch(action.searchImg(e.target.value));
    onPageChange(1); //reset to page 1
  };

  return (
    <div className={style.inputField}>
      <input
        placeholder="Search Your Image..."
        value={state.searchImg}
        onChange={(e) => handleInput(e)}
      />
      <button>Search</button>
    </div>
  );
}

export default Search;
