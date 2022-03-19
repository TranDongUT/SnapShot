import axios from "axios";
import { useContext, useEffect } from "react";
import { Card } from "react-bootstrap";
import { ImagesContext, action } from "../store";
import style from "./style/itemStyle.module.scss";

function Image({ onPageChange, children }) {
  const { webformatURL, user, views, downloads, likes, tags } = children;

  const [state, dispatch] = useContext(ImagesContext);

  const searchByTag = (tag) => {
    dispatch(action.searchImg(tag));
    onPageChange(1); ///reset to page 1
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
