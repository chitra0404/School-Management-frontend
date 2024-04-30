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
    <div className="container-fluid vh-100">
      <div className="row flex-wrap">
        <div className=" col-md-6  bg-success">
          {/* Sidebar content */}
          <div className="d-flex flex-column align-items-center align-items text-white min-vh-100">
            <Link to="/admin" className="d-flex align-items-center  me-md-auto text-dark text-decoration-none">
              <span className="fs-5 d-none d-sm-inline">Menu</span>
            </Link>
            <ul className="nav nav-pills flex-column  mb-0 align-items-center align-items-sm-start" id="menu">
              <li className="nav-item">
                <Link to="/admin/card" className="nav-link align-middle text-dark px-0">
                  <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Home</span>
                </Link>
              </li>
              <li>
                <Link to="/admin/addteacher" className="nav-link px-0 text-dark align-middle">
                  <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Add Teacher</span>
                </Link>
              </li>
              <li>
                <Link to="/admin/addstudent" className="nav-link px-0 text-dark align-middle">
                  <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Add Student</span>
                </Link>
              </li>
              <li>
             
                <Link to="/admin/addnotice" className="nav-link px-0 text-dark align-middle">
                  <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Add Notice</span>
                </Link>
                
                  </li>
                  <li>
             
             <Link to="/admin/getclass" className="nav-link px-0 text-dark align-middle">
               <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">class</span>
             </Link>
             
               </li>
               <li>
             
             <Link to="/admin/sub" className="nav-link px-0 text-dark align-middle">
               <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">subject</span>
             </Link>
             
               </li>

           
            
                  <li><a className="dropdown-item" onClick={handleLog}>Sign out</a></li>


            </ul>
            <div className="dropdown pb-4">
              <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="" alt="" width="30" height="30" className="rounded-circle"/>

     
        
              <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                <li><a className="dropdown-item" href="#"></a></li>
               
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li><hr className="dropdown-divider"/></li>
              </ul>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default AdminSideBar;
