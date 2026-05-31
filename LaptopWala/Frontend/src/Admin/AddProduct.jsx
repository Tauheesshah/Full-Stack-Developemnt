import React, { useState, useRef } from "react";
import axios from "axios";

import "../CSS/Admin.css";

const AddProduct = () => {

  const fileInputRef = useRef();
  const [formData, setFormData] = useState({

    title: "",
    brand: "",
    category: "",
    description: "",

    price: "",
    oldPrice: "",
    discount: "",
    stock: "",

    model: "",
    processor: "",
    ram: "",
    storage: "",
    display: "",
    graphics: "",
    operatingSystem: "",
    battery: "",
    ports: "",
    connectivity: "",
    camera: "",
    audio: "",
    adapter: "",
    weight: "",

    features: "",

    isFeatured: false,
    isLatest: false,

  });

  const [images, setImages] = useState([]);

  const changeHandler = (e) => {

    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const submitHandler = async (e) => {

    e.preventDefault();

    try {

      const userInfo = JSON.parse(localStorage.getItem("userInfo"));

      const data = new FormData();

      // BASIC INFO

      data.append("title", formData.title);
      data.append("brand", formData.brand);
      data.append("category", formData.category);
      data.append("description", formData.description);

      // PRICE

      data.append("price", formData.price);
      data.append("oldPrice", formData.oldPrice);
      data.append("discount", formData.discount);
      data.append("stock", formData.stock);

      // SPECIFICATIONS

      data.append("model", formData.model);
      data.append("processor", formData.processor);
      data.append("ram", formData.ram);
      data.append("storage", formData.storage);
      data.append("display", formData.display);
      data.append("graphics", formData.graphics);
      data.append("operatingSystem", formData.operatingSystem);
      data.append("battery", formData.battery);
      data.append("ports", formData.ports);
      data.append("connectivity", formData.connectivity);
      data.append("camera", formData.camera);
      data.append("audio", formData.audio);
      data.append("adapter", formData.adapter);
      data.append("weight", formData.weight);

      // FEATURES

      data.append("features", formData.features);

      // STATUS

      data.append("isFeatured", formData.isFeatured);
      data.append("isLatest", formData.isLatest);

      // IMAGES

      for (let i = 0; i < images.length; i++) {

        data.append("images", images[i]);

      }

      const config = {

        headers: {

          "Content-Type": "multipart/form-data",

          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const response = await axios.post(

        "https://laptopwala-backend-1.onrender.com/api/products/create",
        data,
        config
      );

      alert("Product Added Successfully");
      setFormData({

        title: "",
        brand: "",
        category: "",
        description: "",
            
        price: "",
        oldPrice: "",
        discount: "",
        stock: "",
            
        model: "",
        processor: "",
        ram: "",
        storage: "",
        display: "",
        graphics: "",
        operatingSystem: "",
        battery: "",
        ports: "",
        connectivity: "",
        camera: "",
        audio: "",
        adapter: "",
        weight: "",
            
        features: "",
            
        isFeatured: false,
        isLatest: false,
            
      });

    setImages([]);
    fileInputRef.current.value = "";
      console.log(response.data);

    } catch (error) {

      alert(error.response?.data?.message);

    }
  };

  return (

    <div className="add-product-container">

      <h1>Add Product</h1>

      <form onSubmit={submitHandler} className="product-form">

        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={changeHandler}
        />

        <input
          type="text"
          name="brand"
          placeholder="Brand"
          onChange={changeHandler}
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          onChange={changeHandler}
        />

        <textarea
          name="description"
          placeholder="Description"
          onChange={changeHandler}
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          onChange={changeHandler}
        />

        <input
          type="number"
          name="oldPrice"
          placeholder="Old Price"
          onChange={changeHandler}
        />

        <input
          type="number"
          name="discount"
          placeholder="Discount"
          onChange={changeHandler}
        />

        <input
          type="number"
          name="stock"
          placeholder="Stock"
          onChange={changeHandler}
        />

        <h2>Specifications</h2>

        <input type="text" name="model" placeholder="Model" onChange={changeHandler} />
        <input type="text" name="processor" placeholder="Processor" onChange={changeHandler} />
        <input type="text" name="ram" placeholder="RAM" onChange={changeHandler} />
        <input type="text" name="storage" placeholder="Storage" onChange={changeHandler} />
        <input type="text" name="display" placeholder="Display" onChange={changeHandler} />
        <input type="text" name="graphics" placeholder="Graphics" onChange={changeHandler} />
        <input type="text" name="operatingSystem" placeholder="Operating System" onChange={changeHandler} />
        <input type="text" name="battery" placeholder="Battery" onChange={changeHandler} />
        <input type="text" name="ports" placeholder="Ports" onChange={changeHandler} />
        <input type="text" name="connectivity" placeholder="Connectivity" onChange={changeHandler} />
        <input type="text" name="camera" placeholder="Camera" onChange={changeHandler} />
        <input type="text" name="audio" placeholder="Audio" onChange={changeHandler} />
        <input type="text" name="adapter" placeholder="Adapter" onChange={changeHandler} />
        <input type="text" name="weight" placeholder="Weight" onChange={changeHandler} />

        <textarea
          name="features"
          placeholder="Features separated by comma"
          onChange={changeHandler}
        />

        <div className="checkbox-group">

          <label>
          
            <input
              type="checkbox"
              name="isFeatured"
              onChange={changeHandler}
            />
        
            Featured Product
          
          </label>
          
          <label>
          
            <input
              type="checkbox"
              name="isLatest"
              onChange={changeHandler}
            />
        
            Latest Product
          
          </label>
          
        </div>

        <div className="file-upload">
          <input
            type="file"
            multiple
            ref={fileInputRef}
            onChange={(e) => setImages(e.target.files)}
          />
        </div>

        <button type="submit">

          Add Product

        </button>

      </form>

    </div>
  );
};

export default AddProduct;