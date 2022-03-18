import axios from "axios";
import { useContext } from "react";
import { Card } from "react-bootstrap";
import { ImagesContext, action } from "../store";
import style from "./style/itemStyle.module.scss";
function Image({ children }) {
  const { webformatURL, user, views, downloads, likes, tags } = children;

  const [state, dispatch] = useContext(ImagesContext);

  const fetchData = async (keyWords = "") => {
    const respone = await axios
      .get(
        `https://pixabay.com/api/?key=8761127-15c354fd40a23de8d36bfe25d&q=${keyWords}&page=1&per_page=5`
      )
      .then((respone) => {
        dispatch(action.fetchData(respone.data.hits));
      });
  };

  const searchByTag = (tag) => {
    dispatch(action.searchImg(tag));
    fetchData(tag);
  };

  return (
    <>
      <div className={style.item}>
        <div className={style.img}>
          <img variant="top" src={webformatURL} />
        </div>
        <Card.Body>
          <div className={style.body}>
            <h3 className={style.user}>by {user}</h3>
            <div className={style.detail}>
              <h4>
                Views: <span>{views}</span>
              </h4>
              <h4>
                Downloads: <span>{downloads}</span>
              </h4>
              <h4>
                Likes: <span>{likes}</span>
              </h4>
            </div>
            <div className={style.tags}>
              {tags.split(", ").map((tag) => {
                return (
                  <span onClick={() => searchByTag(tag)} key={tag}>
                    #{tag}{" "}
                  </span>
                );
              })}
            </div>
          </div>
        </Card.Body>
      </div>
    </>
  );
}

export default Image;
