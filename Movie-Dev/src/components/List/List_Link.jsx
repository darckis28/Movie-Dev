import { Link } from "react-router-dom";
import "./List-Link.css";
function List_Link({ category, active }) {
  return (
    <div className="sub--link">
      {category.map((cate, idx) => (
        <Link onClick={active} key={idx} to={cate.split(" ").join("_")}>
          {cate}
        </Link>
      ))}
    </div>
  );
}

export default List_Link;
