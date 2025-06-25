import { assets } from "../../assets/assets";
import Category from "../Category/category";
import "./DisplayCategory.css";

const DisplayCategory = ({
  selectedCategory,
  setSelectedCategory,
  categories,
}) => {
  return (
    <div className="row g-3" style={{ width: "100%", margin: 0 }}>
    <div
          key="All"
          className="col-md-3 col-sm-6"
          style={{ padding: "0 10px" }}
        >
      <Category
        CategoryName="All Items"
        imgUrl={assets.login}
        numberOfItem={categories.reduce((acc, cat) => acc + cat.items, 0)}
        bgColor="#6c757d"
        isSelected={selectedCategory === ""}
        onClick={() => setSelectedCategory("")}
      />
      </div>
      {categories.map((cat) => (
        <div
          key={cat.categoryId}
          className="col-md-3 col-sm-6"
          style={{ padding: "0 10px" }}
        >
          <Category
            CategoryName={cat.name}
            imgUrl={cat.imgUrl}
            numberOfItem={cat.items}
            bgColor={cat.bgColor}
            isSelected={selectedCategory === cat.categoryId}
            onClick={() => setSelectedCategory(cat.categoryId)}
          />
        </div>
      ))}
    </div>
  );
};

export default DisplayCategory;
