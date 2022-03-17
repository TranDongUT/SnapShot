import { useContext } from "react";
import { action, ImagesContext } from "../store";
import axios from "axios";
import style from "./style/searchStyle.module.scss";

function Search() {
  const [state, dispatch] = useContext(ImagesContext);
  const fetchData = async () => {
    const respone = await axios
      .get(
        `https://pixabay.com/api/?key=8761127-15c354fd40a23de8d36bfe25d&q=${state.searchImg}&image_type=photo&pretty=true`
      )
      .then((respone) => {
        dispatch(action.fetchData(respone.data.hits));
      });
  };

  const handleInput = (e) => {
    const keyWords = e.target.value.trim().toLowerCase();
    dispatch(action.searchImg(keyWords));
  };

  return (
    <div className={style.inputField}>
      <input
        placeholder="Search Your Image..."
        value={state.searchImg}
        onChange={(e) => handleInput(e)}
      />
      <button onClick={fetchData}>Search</button>
    </div>
  );
}

export default Search;
