import { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";
import toast from "react-hot-toast";
import { addItem } from "../../service/ItemService";

const ItemForm = () => {
  const { categories, setItemsData, itemsData, setCategories } = useContext(AppContext);
  const [image, setImage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: "",
    categoryId: "",
    price: "",
    description: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!image) {
      toast.error("Please select an image");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("item", JSON.stringify(data));
    formData.append("file", image);

    try {
      const response = await addItem(formData);
      if (response.status === 201) {
        setItemsData([...itemsData, response.data]);

        setCategories((previousCategories) => 
        previousCategories.map((category) => 
          category.categoryId === data.categoryId ? 
        {...category, items: category.items +1 } : 
        category ));

        toast.success("Item added successfully");
        setData({ name: "", categoryId: "", price: "", description: "" });
        setImage(false);
      } else {
        toast.error("Unable to add item");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error adding item");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="item-form-container"
      style={{height: "100vh", overflow: "auto", overflowX: "hidden" }}
    >
      <div className="mx-2 mt-2">
        <div className="row">
          <div className="card col-md-8 form-container">
            <div className="card-body">
              <form onSubmit={onSubmitHandler}>
                <div className="mb-3 text-center">
                  <label htmlFor="image" className="form-label">
                    <img
                      src={image ? URL.createObjectURL(image) : assets.upload}
                      alt="preview"
                      style={{
                        width: "150px",
                        height: "150px",
                        objectFit: "cover",
                        cursor: "pointer",
                      }}
                    />
                  </label>
                  <input
                    type="file"
                    name="image"
                    id="image"
                    hidden
                    onChange={(e) => setImage(e.target.files[0])}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    placeholder="Item Name"
                    onChange={onChangeHandler}
                    value={data.name}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label" htmlFor="categoryId">
                    Category
                  </label>
                  <select
                    name="categoryId"
                    id="categoryId"
                    className="form-control"
                    onChange={onChangeHandler}
                    value={data.categoryId}
                  >
                    <option value="">-- SELECT CATEGORY --</option>
                    {categories.map((category) => (
                      <option
                        key={category.categoryId}
                        value={category.categoryId}
                      >
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="price" className="form-label">
                    Price
                  </label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    className="form-control"
                    placeholder="₹200.00"
                    onChange={onChangeHandler}
                    value={data.price}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <textarea
                    rows="5"
                    name="description"
                    id="description"
                    className="form-control"
                    placeholder="Write content here..."
                    onChange={onChangeHandler}
                    value={data.description}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-warning w-100"
                  disabled={loading}
                >
                  {loading ? "Loading..." : "Save"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemForm;
