import React, { useEffect, useState } from 'react';
import { Link, useNavigate,useLocation, Route, Routes } from 'react-router-dom';
import { CardList } from './Card/CardList';
import AddTeacher from './AddTeacher';
import AddStudent from './AddStudent';
import { useUserType } from '../../context/UserTypeContext';

function AdminSideBar() {
    const navigate=useNavigate();
    const {handleLogout}=useUserType();
    const handleLog = () => {
        handleLogout(); // Call handleLogout function to remove user session
        navigate("/"); // Redirect the user to the homepage
      };
  return (
    <div className="container-fluid">
      <div className="row flex-wrap">
        <div className=" col-md-6   bg-dark">
          {/* Sidebar content */}
          <div className="d-flex flex-column align-items-center align-items text-white min-vh-100">
            <Link to="/" className="d-flex align-items-center  me-md-auto text-white text-decoration-none">
              <span className="fs-5 d-none d-sm-inline">Menu</span>
            </Link>
            <ul className="nav nav-pills flex-column  mb-0 align-items-center align-items-sm-start" id="menu">
              <li className="nav-item">
                <Link to="/card" className="nav-link align-middle px-0">
                  <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Home</span>
                </Link>
              </li>
              <li>
                <Link to="/addteacher" className="nav-link px-0 align-middle">
                  <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Add Teacher</span>
                </Link>
              </li>
              <li>
                <Link to="/addstudent" className="nav-link px-0 align-middle">
                  <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Add Student</span>
                </Link>
              </li>
              <li>
             
                <Link to="/addnotice" className="nav-link px-0 align-middle">
                  <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Add Notice</span>
                </Link>
                <ul className="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                  <li className="w-100">
                    <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 1</a>
                  </li>
                  <li>
                    <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 2</a>
                  </li>
                  <li>
                    <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 3</a>
                  </li>
                  <li>
                    <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 4</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" className="nav-link px-0 align-middle">
                  <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Customers</span>
                </a>
              </li>
            </ul>
            <div className="dropdown pb-4">
              <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="" alt="hugenerd" width="30" height="30" className="rounded-circle"/>
                <span className="d-none d-sm-inline mx-1">loser</span>
              </a>
              <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                <li><a className="dropdown-item" href="#">New project...</a></li>
                <li><a className="dropdown-item" href="#">Settings</a></li>
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item bg-success" onClick={handleLog}>Sign out</a></li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default AdminSideBar;
