import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";

import { useUserType } from "../../context/UserTypeContext";
import { Base_Url } from "../../config/api";

function Student() {
    const { setUserType } = useUserType();
    const [success, setSuccess] = useState(false);
    const [invalid, setInvalid] = useState(false);
    const navigate = useNavigate();

    const demoCredentials = {
        studentID: "801",
        email: "rahul@123.com",
        password: "password",
    };

    const handleLogin = async (studentID, email, password) => {
        try {
            const res = await axios.post(`${Base_Url}/app/studentlog`, { studentID, email, password });

            window.localStorage.setItem("loggedInUser", JSON.stringify(res.data.token));
            setInvalid(false);
            setSuccess(true);
            setUserType('student');
            setTimeout(() => {
                navigate("/student");
            }, 500);
        } catch (err) {
            console.log(err);
            setSuccess(false);
            setInvalid(true);
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

    const formik = useFormik({
        initialValues: {
            studentID: "",
            email: "",
            password: "",
        },
        validate,
        onSubmit: (values) => {
            handleLogin(formik.values.studentID, formik.values.email, formik.values.password);
            formik.values.studentID = "";
            formik.values.email = "";
            formik.values.password = "";
        },
    });

    const setDemoCredentials = () => {
        formik.setValues(demoCredentials);
    };

    return (
        <section className="vh-100 vw-100 justify-content-center">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                        <div className="card-body p-lg-3 text-black">
                            <form onSubmit={formik.handleSubmit}>
                            <div className="d-flex flex-column align-items-center">
                                    <i
                                        className="fas fa-cubes fa-2x me-3"
                                        style={{ color: "#ff6219" }}
                                    ></i>
                                    <span className="h1 fw-bold">Student Login</span>
                                </div>

                                <h5 className="fw-normal" style={{ letterSpacing: "1px" }}>
                                    Sign into your account
                                </h5>
                                <div className="form-outline">
                                    <label className="form-label" htmlFor="studentID">
                                        StudentID:
                                    </label>
                                    <input
                                        type="number"
                                        id="studentID"
                                        className="form-control form-control-lg"
                                        placeholder="Student ID"
                                        value={formik.values.studentID}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.studentID && formik.errors.studentID ? (
                                        <span className="fw-bold" style={{ color: "red" }}>
                                            {formik.errors.studentID}
                                        </span>
                                    ) : null}
                                </div>
                                <div className="form-outline">
                                    <label className="form-label" htmlFor="email">
                                        Email address:
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="form-control form-control-lg"
                                        placeholder="Email address"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.email && formik.errors.email ? (
                                        <span className="fw-bold" style={{ color: "red" }}>
                                            {formik.errors.email}
                                        </span>
                                    ) : null}
                                </div>
                                <div className="form-outline mb-2">
                                    <label className="form-label" htmlFor="password">
                                        Password:
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        className="form-control form-control-lg"
                                        placeholder="Enter your Password"
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.password && formik.errors.password ? (
                                        <span className="fw-bold" style={{ color: "red" }}>
                                            {formik.errors.password}
                                        </span>
                                    ) : null}
                                </div>
                                <p className="mb-1 text-center">
                                    <span className="text-primary fw-bold">
                                        {success ? "Successfully logged in" : null}
                                    </span>
                                    <span className="text-danger fw-bold">
                                        {invalid ? "Invalid user/ Activate your account through mail" : null}
                                    </span>
                                </p>

                                <div className="pt-1 mb-2">
                                    <button className="btn btn-dark btn-lg btn-block" type="submit">
                                        Login
                                    </button>
                                    <p></p>
                                    <button
                                        type="button"
                                        className="btn btn-dark btn-lg btn-block "
                                        onClick={setDemoCredentials}
                                    >
                                         Demo 
                                    </button>
                                </div>
                             

                                <Link to="/" className="small text-muted">
                                    Back
                                </Link>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Student;
