import React, { useState } from "react";
import APIOrder from "../apis/APIOrder";
import Category from "../assets/Category.png";
import UpadateTime from "../assets/UpdateTime.png";
import { FormOutlined, DeleteOutlined } from "@ant-design/icons";
import "../styles/CarCards.css";
import { useNavigate } from "react-router-dom";
// import DeleteButton from "./DeleteButton";
import { Modal, ModalBody } from "react-bootstrap";
import DeleteModal from "../assets/DeleteModal.png";
import "../styles/DeleteButton.css";
import { Link, useLocation } from "react-router-dom";
import { message } from "antd";
import { useDispatch, useSelector } from 'react-redux'
import { ActCarlist, Searchlist } from "../redux/actions/Carlist";
import { ACTIVITY_CARLIST_FILTER_ALL, ACTIVITY_CARLIST_FILTER_LARGE, ACTIVITY_CARLIST_FILTER_MEDIUM, ACTIVITY_CARLIST_FILTER_SMALL } from "../redux/type/typeCarlist";

export function convertToLocalCurrrency(number) {
  if (!number) return null;
  const formatter = new Intl.NumberFormat("id-Id", { style: "currency", currency: "IDR" });
  return formatter.format(number);
}

export function convertToLocalTime(utc) {
  if (!utc) return null;
  const date = new Date(utc);
  const formatter = new Intl.DateTimeFormat("id-ID", { year: "numeric", month: "short", day: "numeric", hour: "numeric" });
  return formatter.format(date);
}

const Cards = ({ cars, filterByCategory, onDelete }) => {
  return cars
    .filter((car) => (filterByCategory ? car.category === filterByCategory : !!car))
    .map((car) => {
      return (
        <div style={{ padding: "24px" }} className="car-card" key={car.id}>
          <div className="car-image">
            <img style={{ width: "303px" }} src={car.image} alt={car.name} />
          </div>
          <div className="card-content">
            <div className="card-info">
              <small>{car.name}</small>
              <strong>{convertToLocalCurrrency(car.price)} / hari</strong>
              <div style={{ display: "inline" }}>
                <img src={Category} alt="categoryPic" />
                <small>
                  {car.category === "small" && "2 - 4 people"}
                  {car.category === "medium" && "4 - 6 people"}
                  {car.category === "large" && "6 - 8 people"}
                </small>
              </div>
              <div style={{ display: "inline" }}>
                <img src={UpadateTime} alt="updateTime" />
                <small>Updated at {convertToLocalTime(car.updatedAt.split(","))}.00</small>
              </div>
            </div>
          </div>
          <div className="card-buttons">
            <div className="delete-button">
              <button className="on-delete" onClick={(id) => onDelete(car.id)}>
                <DeleteOutlined />
                <small> Delete</small>
              </button>
            </div>
            <Link to={`/edit-car/${car.id}`}>
              <button className="on-edit">
                <FormOutlined />
                <small> Edit</small>
              </button>
            </Link>
          </div>
        </div>
      );
    });
};

const CarCards = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [carIdForDelete, setCarIdForDelete] = useState("");
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch()
  const location = useLocation();
  const reducerCarlist = useSelector((state) => state.CarlistStateReducer)
  const filterStateReducer = useSelector((state) => state.filterStateReducer)
  // console.log(location);

  // const { car, payload } = location.state;
  // step 2 panggil dispatch
  function showAll() {
    dispatch({
      type: ACTIVITY_CARLIST_FILTER_ALL,
    })
  }
  function showSmall() {
    dispatch({
      type: ACTIVITY_CARLIST_FILTER_SMALL,
    })
  }
  function showMedium() {
    dispatch({
      type: ACTIVITY_CARLIST_FILTER_MEDIUM,
    })
  }
  function showLarge() {
    dispatch({
      type: ACTIVITY_CARLIST_FILTER_LARGE,
    })
  }

  React.useEffect(() => {
    dispatch(ActCarlist());
  }, [reducerCarlist.search]);

  const onDelete = (id) => {
    setModalOpen(true);
    setCarIdForDelete(id);
  };
  const onCancel = () => {
    setModalOpen(false);
    setCarIdForDelete("");
  };
  const onYes = async () => {
    try {
      await APIOrder.deleteCar(carIdForDelete);
      message.success("Data Berhasil Dihapus");
    } catch (error) {
      alert("failed");
    }
    setModalOpen(false);
  };

  return (
    <>
      {contextHolder}
      <div className="CarCards">
        <div className="buttons">
          <button className={filterStateReducer.filter === '' ? "active-button" : null} onClick={showAll}>
            All
          </button>
          <button className={filterStateReducer.filter === 'small' ? "active-button" : null} onClick={showSmall}>
            2 - 4 people
          </button>
          <button className={filterStateReducer.filter === 'medium' ? "active-button" : null} onClick={showMedium}>
            4 - 6 people
          </button>
          <button className={filterStateReducer.filter === 'large' ? "active-button" : null} onClick={showLarge}>
            6 - 8 people
          </button>
        </div>
        <div key="id" className="card-group">
          <Cards cars={reducerCarlist.data} filterByCategory={filterStateReducer.filter} onDelete={onDelete} />
        </div>
        <Modal className="modal" show={modalOpen} animation={true} centered>
          <ModalBody className="modal-body">
            <div className="modal-content">
              <div>
                <img src={DeleteModal} alt="deleteModal" />
              </div>
              <div>
                <h5>Menghapus Data Mobil</h5>
                <p>Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin ingin menghapus?</p>
              </div>
              <div>
                <button
                  onClick={() => {
                    onYes();
                  }}
                >
                  ya
                </button>
                <button onClick={onCancel}>tidak</button>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </div>
    </>
  );
};

export default CarCards;
