import style from "./style/paginationStyle.module.scss";
import { Pagination } from "react-bootstrap";
import { useState, useContext } from "react";
import { action, ImagesContext } from "../store";

function PaginationComponent({ pagination, onPageChange }) {
  const [state, dispatch] = useContext(ImagesContext);

  const { page, limit, totalRows } = pagination;
  const [range, setRange] = useState({
    start: 0,
    end: 10,
  });
  const totalPages = Math.ceil(totalRows / limit);
  const arrButton = [];
  for (let i = 0; i < totalPages; i++) {
    arrButton.push(i + 1);
  }

  const handleChangePage = (newPage) => {
    if (state.resetPage) {
      dispatch(action.resetPage());
      onPageChange(1);
    } else {
      onPageChange(newPage);
      if (newPage > range.end) {
        setRange((prev) => {
          return { start: prev.start + 5, end: prev.end + 5 };
        });
      }
      if (newPage <= range.start) {
        setRange((prev) => {
          return { start: prev.start - 5, end: prev.end - 5 };
        });
      }
    }
  };

  return (
    <div className={style.listBtn}>
      <Pagination.Item
        disabled={pagination.page <= 1}
        onClick={() => handleChangePage(pagination.page - 1)}
      >
        {"<"}
      </Pagination.Item>
      {arrButton.slice(range.start, range.end).map((button) => {
        return (
          <Pagination.Item
            key={button}
            active={page == button}
            onClick={() => handleChangePage(button)}
          >
            {button}
          </Pagination.Item>
        );
      })}

      <Pagination.Item
        disabled={page == totalPages}
        onClick={() => handleChangePage(pagination.page + 1)}
      >
        {">"}
      </Pagination.Item>
    </div>
  );
}

export default PaginationComponent;
