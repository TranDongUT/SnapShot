import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { action, ImagesContext } from "../store";
import ImageItem from "./ImageItem";
import Loader from "./Loader";
import style from "./style/ListStyle.module.scss";
import PaginationComponent from "./Pagination";
import Search from "./Search";
import Category from "./Category";

function ListImage() {
  const [state, dispatch] = useContext(ImagesContext);
  const { images } = state;

  //Pagination
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 5,
    totalRows: 1,
  });

  const handleChangePage = (newPage) => {
    setPagination({
      ...pagination,
      page: newPage,
    });
  };

  const fetchImage = async () => {
    const respone = await axios
      .get(
        `https://pixabay.com/api/?key=8761127-15c354fd40a23de8d36bfe25d&q
        =&image_type=photo&&q=${state.searchImg}&page=${pagination.page}&per_page=${pagination.limit}`
      )
      .then((respone) => {
        setPagination({
          ...pagination,
          totalRows: respone.data.totalHits,
        });
        dispatch(action.fetchData(respone.data.hits));
      })
      .catch((error) => alert("invalid input: ", error));
  };

  useEffect(() => {
    fetchImage();
  }, [pagination.page, state.searchImg]);

  return (
    <div>
      <Search onPageChange={handleChangePage} />
      <Category onPageChange={handleChangePage} />
      <div className={style.listImg}>
        {images.length == 0 ? (
          <Loader />
        ) : (
          images.map((image) => {
            return (
              <div key={image.id} className={style.item}>
                <ImageItem onPageChange={handleChangePage}>{image}</ImageItem>
              </div>
            );
          })
        )}
      </div>
      <PaginationComponent
        pagination={pagination}
        onPageChange={handleChangePage}
      />
    </div>
  );
}

export default ListImage;
