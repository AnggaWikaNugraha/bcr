import axios from "axios";
import React, { useState } from "react";
import APIOrder from "../apis/APIOrder";
import { useNavigate, useParams } from "react-router-dom";
import { message } from "antd";
import { convertToLocalTime } from "../components/CarCards.js";

const EditCarForm = () => {
  const [carData, setCarData] = useState();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();
  const [image, setImage] = useState();
  const [messageApi, contextHolder] = message.useMessage();
  const [createdAt, setCreatedAt] = useState("");
  const [updatedAt, setUpdatedAt] = useState("");

  const params = useParams();

  React.useEffect(() => {
    const fetchData = async (id) => {
      const res = await APIOrder.getCarById(`${params.carId}`);
      if (res.status === 200) {
        setCarData(res.data);
        setName(res.data.name);
        setPrice(res.data.price);
        setCategory(res.data.category);
        setCreatedAt(res.data.createdAt);
        setUpdatedAt(res.data.updatedAt);
        // setImage(res.data.image);
      } else {
        alert("Failed to catch car data");
      }
    };
    fetchData();
  }, [params.carId]);

  const onSave = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const price = formData.get("price");
    const category = formData.get("category");
    const image = formData.get("image");
    const values = { name, price, category, image };
    try {
      const res = await APIOrder.editCar(params.carId, formData);
      if (res.status === 200) {
        setName(name);
        setPrice(price);
        setCategory(category);
        setImage(image);
        setCarData(values);
        // console.log(setCarData());
        // console.log(values);
        const returnTo = "/list-cars";
        navigate(returnTo);
        message.success("Data Berhasil Disimpan");
      }
    } catch (error) {
      message.error("Gagal Menyimpan Data");
    }
  };

  return (
    <>
      {contextHolder}
      <div onSubmit={onSave} className="addcar-form" style={{ minHeight: "100vh" }}>
        {carData ? (
          <form>
            <div className="inputs">
              <div className="input-name">
                <label>Name/Tipe mobil*</label>
                <input defaultValue={name} required type="name" name="name" />
              </div>
              <div className="input-price">
                <label>Harga*</label>
                <input defaultValue={price} required type="number" name="price" />
              </div>
              <div className="input-pic">
                <label>Foto*</label>
                <input required type="file" name="image" />
              </div>
              <div className="input-category d-flex">
                <label>Kategori*</label>
                <select defaultValue={category} name="category">
                  <option value="small">2 - 4 orang</option>
                  <option value="medium">4 - 6 orang</option>
                  <option value="large">6 - 8 orang</option>
                </select>
              </div>
              <div className="create-time">
                <label>Create at</label>
                <small>{convertToLocalTime(createdAt)}</small>
              </div>
              <div className="update-time">
                <label>Update at</label>
                <small>{convertToLocalTime(updatedAt)}</small>
              </div>
            </div>
            <div className="add-button" style={{ marginTop: "31%" }}>
              <button>Cancel</button>
              <button type="submit">Save</button>
            </div>
          </form>
        ) : (
          <p>Loading...</p>
        )}

        <p></p>
      </div>
    </>
  );
};

export default EditCarForm;
