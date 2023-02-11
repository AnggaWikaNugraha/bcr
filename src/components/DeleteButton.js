import React, { useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { Alert, Modal, ModalBody } from "react-bootstrap";
import DeleteModal from "../assets/DeleteModal.png";
import "../styles/DeleteButton.css";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
// import { Alert } from "antd";

const DeleteButton = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);

  const onDelete = () => {
    setModalOpen(true);
  };
  const onYes = () => {
    setModalOpen(false);
    toast.info("yooooooooooooo", {
      position: "top-center",
      autoClose: "5000",
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    // setAlertOpen(true);
  };
  const onCancel = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <div className="delete-button">
        <button className="on-delete" onClick={onDelete}>
          <DeleteOutlined />
          <small> Delete</small>
        </button>

        <Modal className="modal" show={modalOpen} animation={true} centered>
          <ModalBody className="modal-body">
            <div className="modal-content">
              <div>
                <img src={DeleteModal} />
              </div>
              <div>
                <h5>Menghapus Data Mobil</h5>
                <p>Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin ingin menghapus?</p>
              </div>
              <div>
                <button onClick={onYes}>ya</button>
                <button onClick={onCancel}>tidak</button>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </div>
      {/* <Alert message="berhasil" type="success" /> */}
      {/* <Alert variant="dark" show={alertOpen} onClose={() => setAlertOpen(false)}>
        <p>berhasil</p>
      </Alert> */}
      {/* <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      /> */}
    </div>
  );
};

export default DeleteButton;
