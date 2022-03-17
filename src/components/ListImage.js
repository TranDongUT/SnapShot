import axios from "axios";
import { useContext, useEffect } from "react";
import { action, ImagesContext } from "../store";
import ImageItem from "./ImageItem";
import Loader from "./Loader";
import style from "./style/ListStyle.module.scss";

function ListImage() {
  const [state, dispatch] = useContext(ImagesContext);
  const { images } = state;

  const fetchImage = async () => {
    const respone = await axios
      .get(
        "https://pixabay.com/api/?key=8761127-15c354fd40a23de8d36bfe25d&q=&image_type=photo&pretty=true"
      )
      .then((respone) => {
        dispatch(action.fetchData(respone.data.hits));
      });
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <div>
      <div className={style.listImg}>
        {images.length == 0 ? (
          <Loader />
        ) : (
          images.map((image) => {
            return (
              <div key={image.id} className={style.item}>
                <ImageItem>{image}</ImageItem>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default ListImage;
