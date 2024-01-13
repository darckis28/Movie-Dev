import "./List-Link.css";
function List_Link({ category, href }) {
  console.log(category);
  return (
    <div className="sub--link">
      {category.map((cate, idx) => (
        <a key={idx} href="">
          {cate}
        </a>
      ))}
    </div>
  );
}

export default List_Link;
