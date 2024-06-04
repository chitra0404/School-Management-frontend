import React, { useEffect, useState } from "react";
 import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";

import { useUserType } from "../../context/UserTypeContext";
import { Base_Url } from "../../config/api";

function Stuent() {
    const { setUserType } = useUserType();
  const [success, setSuccess] = useState(false);
  const [invalid, setInvaild] = useState(false);
//   const Navigate = useNavigate();
const navigate = useNavigate();


  const HandleLogin = async (studentID,email, password) => {
    try {
      const res = await axios.post(`${Base_Url}/app/studentlog`, {studentID, email, password });

      window.localStorage.setItem("loggedInUser", JSON.stringify(res.data.token));
      setInvaild(false);
      setSuccess(true);
      setUserType('student');
      setTimeout(() => {
        navigate("/student");
      }, 500);
    } catch (err) {
      console.log(err);
      setSuccess(false);
      setInvaild(true);
    }
  };

  const validate = (values) => {
    const errors = {};
    if (!values.studentID) {
        errors.studentID = "*Required";
      }
    if (!values.email) {
      errors.email = "*Required";
    }
    if (!values.password) {
      errors.password = "*Required";
    }
    return errors;
  };

  const Formik = useFormik({
    initialValues: {
        studentID:"",
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      HandleLogin( Formik.values.studentID,Formik.values.email, Formik.values.password);
      Formik.values.studentID="";
      Formik.values.email = "";
      Formik.values.password = "";
    },
  });
 

  return (
    <section className="vh-100 vw-100 justify-content-center" >
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          
                
                
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-lg-3 text-black">
                    <form onSubmit={Formik.handleSubmit}>
                      <div className="d-flex align-items-center ">
                        <i
                          className="fas fa-cubes fa-2x me-3"
                          style={{ color: "#ff6219" }}
                        ></i>
                        <span className="h1 ">Student Login</span>
                      </div>

                      <h5
                        className="fw-normal"
                        style={{ letterSpacing: "1px" }}
                      >
                        Sign into your account
                      </h5>
                      <div className="form-outline">
                        <label className="form-label" htmlFor="loginemail">
                          StudentID :
                        </label>
                        <input
                          type="Number"
                          id="studentID"
                          className="form-control form-control-lg"
                          placeholder="studentID address"
                          value={Formik.values.studentID}
                          onChange={Formik.handleChange}
                          onBlur={Formik.handleBlur}
                        />
                        {Formik.touched.studentID && Formik.errors.studentID ? (
                          <span className="fw-bold" style={{ color: "red" }}>
                            {Formik.errors.studentID}
                          </span>
                        ) : null}
                      </div>
                      <div className="form-outline">
                        <label className="form-label" htmlFor="loginemail">
                          Email address :
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="form-control form-control-lg"
                          placeholder="Email address"
                          value={Formik.values.email}
                          onChange={Formik.handleChange}
                          onBlur={Formik.handleBlur}
                        />
                        {Formik.touched.email && Formik.errors.email ? (
                          <span className="fw-bold" style={{ color: "red" }}>
                            {Formik.errors.email}
                          </span>
                        ) : null}
                      </div>
                      <div className="form-outline mb-2">
                        <label className="form-label" htmlFor="loginpassword">
                          Password :
                        </label>
                        <input
                          type="password"
                          id="password"
                          className="form-control form-control-lg"
                          placeholder="Enter your Password"
                          value={Formik.values.password}
                          onChange={Formik.handleChange}
                          onBlur={Formik.handleBlur}
                        />
                        {Formik.touched.password && Formik.errors.password ? (
                          <span className="fw-bold" style={{ color: "red" }}>
                            {Formik.errors.password}
                          </span>
                        ) : null}
                      </div>
                      <p className="mb-1 text-center">
                        <span className="text-primary fw-bold">
                          {success ? "Successfully loggedin" : null}
                        </span>
                        {/* <span className="text-danger fw-bold">
                          {invalid ? "Invalid user/ Activate your account through mail" : null}
                        </span> */}
                      </p>

                      <div className="pt-1 mb-2">
                        <button
                          className="btn btn-dark btn-lg btn-block"
                          type="submit"
                        >
                          Login
                        </button>
                      </div>
                      <Link
                        to="/"
                        className="small text-muted"
                      >
                     back
                      </Link>
                    
                      <p className="small text-muted">
                        Terms of use. Privacy policy
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
      
    </section>
  );
}

export default Stuent;