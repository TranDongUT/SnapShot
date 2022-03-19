import style from "./style/categoryStyle.module.scss";
import { Nav } from "react-bootstrap";
import { useContext } from "react";
import { action, ImagesContext } from "../store";
import axios from "axios";

function Category({ onPageChange }) {
  const [state, dispatch] = useContext(ImagesContext);

  const handleTab = (tab) => {
    dispatch(action.searchImg(tab));
    onPageChange(1);
  };

  return (
    <div className={style.category}>
      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link>
            <div onClick={() => handleTab("Cars")}>Cars</div>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <div onClick={() => handleTab("Animal")}>Animal</div>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <div onClick={() => handleTab("Building")}>Building</div>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}
export default Category;
