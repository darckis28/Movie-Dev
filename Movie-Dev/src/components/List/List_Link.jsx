import { Link } from "react-router-dom";
import "./List-Link.css";
function List_Link({ category, reft }) {
  return (
    <div className="sub--link">
      {category.map((cate, idx) => (
        <Link key={idx} to={cate.split(" ").join("_")}>
          {cate}
        </Link>
      ))}
    </div>
  );
}

export default List_Link;
