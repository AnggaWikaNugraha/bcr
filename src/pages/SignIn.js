import React, { useState } from "react";
import "../styles/SigninStyle.css";
import { useLocation, useNavigate } from "react-router-dom";
import APIAuth from "../apis/APIAuth";
import { Alert } from "react-bootstrap";
import LoginLogo from "../assets/Logo.png";
import LoginImg from "../assets/login.jpg"
// import SigninImg from "../assets/SigninImg.png";
// import SigninImage from "../assets/SigninImg.png";

const SignIn = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  // const [alert, setAlert] = useState(false);
  const [alertFail, setAlertFail] = useState(false);

  // if (alert) {
  //   return (
  //     <Alert
  //       style={{ width: "500px", float: "right" }}
  //       show={alert}
  //       variant="success"
  //       onClose={() => setAlert(false)}
  //       dismissible
  //     >
  //       <p>Successfully logged in</p>
  //     </Alert>
  //   );
  // }
  // if (alertFail) {
  //   return (
  //     <Alert
  //       style={{ width: "500px", float: "right" }}
  //       show={alertFail}
  //       variant="danger"
  //       onClose={() => setAlertFail(false)}
  //       dismissible
  //     >
  //       <small>Masukkan username dan password yang benar. Perhatikan penggunaan huruf kapital.</small>
  //     </Alert>
  //   );
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      await APIAuth.login(Object.fromEntries(formData));
      // setAlert(true);
      let returnTo = "/";
      const params = new URLSearchParams(search);
      const redirectTo = params.get("return_To");
      if (redirectTo) returnTo += `${redirectTo}`;
      setTimeout(() => {
        navigate(returnTo);
      }, 3000);
      // navigate(returnTo);
    } catch (error) {
      setAlertFail(true);
      return null;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center h-screen w-full">
      <div className="xl:w-2/3 hidden xl:block">
        <img className="w-full h-full object-cover" src={LoginImg} alt="LoginImg" />
      </div>

      <div className="flex flex-col xl:w-1/3 lg:w-full justify-center">
        <form onSubmit={handleSubmit} className="max-w-[500px] w-full mx-auto lg:p-0 p-8 px-8 rounded-lg">
          <img src={LoginLogo} alt="LoginLogo" />
          <h2 className="text-4xl dark:text-black font-bold pt-4 pb-6">Welcome, Admin BCR!</h2>
          <Alert
            style={{ width: "auto", float: "right" }}
            show={alertFail}
            variant="danger"
            onClose={() => setAlertFail(false)}
            dismissible
          >
            <small>Masukkan username dan password yang benar. Perhatikan penggunaan huruf kapital.</small>
          </Alert>
          <div className="flex flex-col text-black-900 py-2">
            <label className="font-medium text-lg">Email</label>
            <input
              className="text-center text-lg rounded-xl border mt-2 p-2 focus:bg-indigo-50"
              type="email"
              name="email"
              placeholder="Contoh: johndee@gmail.com"
            />
          </div>

          <div className="flex flex-col text-black-900 py-2">
            <label className="font-medium text-lg">Password</label>
            <input
              className="text-center text-lg rounded-xl border mt-2 p-2 focus:bg-indigo-50"
              type="password"
              name="password"
              placeholder="6+ Karakter"
            />
          </div>

          <button
            className="w-full my-5 py-2 rounded-xl bg-blue-700 shadow-xl shadow-blue-200 hover:bg-blue-600 transition duration-300 dark:text-white font-medium text-lg"
            type="submit"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
