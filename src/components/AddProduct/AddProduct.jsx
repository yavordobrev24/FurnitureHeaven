import { useState } from "react";
import styles from "./AddProduct.module.css";
import { createProduct } from "../../services/productService";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

export default function AddProduct(props) {
  const navigate = useNavigate();
  const [productData, setProductData] = useState({
    name: "",
    image_url: "",
    description: "",
    category: "kitchen",
    price: "0.01",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    await createProduct(productData);
    navigate("/");
    setProductData({
      name: "",
      image_url: "",
      description: "",
      category: "kitchen",
      price: "",
    });
  };

  return (
    <div className={styles["add-product"]}>
      <div className={styles.form}>
        <h3>Add Product</h3>
        <form onSubmit={onSubmit}>
          <div className={styles.input}>
            <label htmlFor="productName">Product Name</label>
            <input
              type="text"
              id="productName"
              name="name"
              value={productData.name}
              onChange={onChangeHandler}
              required
            />
          </div>
          <div className={styles.input}>
            <label htmlFor="image_url">Image URL</label>
            <input
              type="text"
              id="image_url"
              name="image_url"
              value={productData.image_url}
              onChange={onChangeHandler}
              required
            />
          </div>
          <div className={styles.input}>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={productData.description}
              onChange={onChangeHandler}
              rows="3"
              maxLength="60"
              required
            ></textarea>
          </div>
          <div className={styles.input}>
            <label htmlFor="category">Category</label>
            <select
              id="category"
              name="category"
              value={productData.category}
              onChange={onChangeHandler}
              required
            >
              <option value="kitchen">Kitchen</option>
              <option value="living-room">Living Room</option>
              <option value="bedroom">Bedroom</option>
            </select>
          </div>
          <div className={styles.input}>
            <label htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              name="price"
              value={productData.price}
              onChange={onChangeHandler}
              min={0.01}
              step="0.01"
              required
            />
          </div>
          <Button>Add product</Button>
        </form>
      </div>
    </div>
  );
}
