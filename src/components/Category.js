import style from "./style/categoryStyle.module.scss";
import { Nav } from "react-bootstrap";
import { useContext } from "react";
import { action, ImagesContext } from "../store";
import axios from "axios";

function Category() {
  const [state, dispatch] = useContext(ImagesContext);

  const fetchData = async (keyWords) => {
    const respone = await axios
      .get(
        `https://pixabay.com/api/?key=8761127-15c354fd40a23de8d36bfe25d&q=${keyWords}&page=1&per_page=5`
      )
      .then((respone) => {
        dispatch(action.fetchData(respone.data.hits));
      });
  };

  const handleTab = (tab) => {
    dispatch(action.searchImg(tab));
    fetchData(tab);
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
