import React from "react";
import APIOrder from "../apis/APIOrder";
import { useNavigate, Link } from "react-router-dom";
import { message } from "antd";
import { convertToLocalTime } from "../components/CarCards.js";

export function today() {
  let now = new Date();
  let date = now.getDate();
  let month = now.getMonth();
  let year = now.getFullYear();
  return `${date}/${month}/${year}`;
}
export function day() {
  let date = new Date().toLocaleString() + " ";
  return date;
}

const AddCarForm = () => {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  const handleAdd = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const price = formData.get("price");
    const image = formData.get("image");
    const category = formData.get("category");

    try {
      await APIOrder.postCar(formData);
      const returnTo = "/list-cars";
      navigate(returnTo);
      message.success("Data Berhasil Disimpan");
    } catch (error) {
      message.error("Gagal Menyimpan Data");
    }
  };

  return (
    <>
      {contextHolder}
      <div onSubmit={handleAdd} className="addcar-form">
        <form style={{ display: "flex", justifyContent: "space-between", flexDirection: "column", height: "78vh" }}>
          <div className="inputs">
            <div className="input-name">
              <label>Name/Tipe mobil*</label>
              <input required type="name" name="name" placeholder="Input Nama/Tipe Mobil" />
            </div>
            <div className="input-price">
              <label>Harga*</label>
              <input required type="number" name="price" placeholder="Input Harga Sewa Mobil" />
            </div>
            <div className="input-pic">
              <label>Foto*</label>
              <input required type="file" name="image" placeholder="Upload Foto Mobil" />
            </div>
            <div className="input-category d-flex">
              <label>Kategori*</label>
              <select name="category">
                <option value="small">2 - 4 orang</option>
                <option value="medium">4 - 6 orang</option>
                <option value="large">6 - 8 orang</option>
              </select>
            </div>
            <div className="create-time d-flex">
              <label>Create at</label>
              <small>{today()}</small>
            </div>
            <div className="update-time d-flex">
              <label>Update at</label>
              <small>{today()}</small>
            </div>
          </div>
          <div className="add-button" style={{}}>
            <Link to="/list-cars">
              <button style={{ color: "#0D28A6", textDecoration: "none", background: "white" }}>Cancel</button>
            </Link>

            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddCarForm;
