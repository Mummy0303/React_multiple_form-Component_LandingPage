import React, { useState } from "react";
import { HiArrowSmLeft } from "react-icons/hi";
import { HiArrowSmRight } from "react-icons/hi";

import RegisterInfo from "./RegisterInfo";
import PersonalInfo from "./PersonalInfo";
import Login from "./Login";

function LandingRegister() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    userName: "",
    firstName: "",
    lastName: "",
  });

  const FormTitles = [
    "Create An Account",
    "Create An Account",
    "Welcome Back Human!",
  ];

  const [loginData, setLoginData] = useState({
    loginEmail: "",
    loginPassword: "",
  });

  const PageDisplay = () => {
    if (page === 0) {
      return <RegisterInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <Login loginData={loginData} setLoginData={setLoginData} />;
    }
  };

  return (
    <div className="box">
      <div className="box_layer">
        <div className="header-container">
          <div className="logo_box"></div>
        </div>
        <div
          style={{
            justifyContent: page === 2 ? "center" : "space-evenly",
          }}
          className="form-card"
        >
          <div className="progress-bar">
            <div
              className="percentage"
              hidden={page === 2}
              style={{
                width: page === 0 ? "50%" : page === 1 ? "100%" : "50%",
              }}
            ></div>
          </div>
          <h1 className="greeting">{FormTitles[page]}</h1>
          <div
            style={{
              padding: page === 2 ? "30px" : "none",
            }}
            className="body"
          >
            {PageDisplay()}
          </div>
          <div className="footer">
            <button
              style={{
                width: page === 2 ? "400px" : "auto",
                marginRight: page === 2 ? "auto" : "20px",
              }}
              className="progress-button"
              disabled={page === 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              <HiArrowSmLeft
                style={{
                  display: "inline",
                  height: "100%",
                  width: "60%",
                }}
              />
            </button>
            <button
              style={{ width: page === 1 ? "150px" : "50px" }}
              hidden={page === 2}
              className="progress-button"
              onClick={() => {
                if (page === 1) {
                  console.log(formData);
                } else {
                  setPage((currPage) => currPage + 1);
                }
              }}
            >
              {page === 0 ? (
                <HiArrowSmRight
                  style={{ display: "inline", height: "100%", width: "60%" }}
                />
              ) : page === 1 ? (
                "Sign Up"
              ) : (
                "Sign In"
              )}
            </button>
          </div>
          <p hidden={page === 2}>
            Already Have An Account?
            <button
              onClick={() => {
                setPage((currPage) => (currPage = +2));
              }}
              className="login-button"
            >
              Sign In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LandingRegister;
