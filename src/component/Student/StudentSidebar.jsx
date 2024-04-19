import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserType } from '../../context/UserTypeContext';

function StudentSideBar() {
  const navigate=useNavigate();

  const {handleLogout}=useUserType();
  const handleLog = () => {
      handleLogout(); // Call handleLogout function to remove user session
       // Redirect the user to the homepage
    };

  return (
    <>
      
        <div className="container-fluid">
          <div className="row flex-wrap">
            <div className=" col-md-6 bg-dark">
              {/* Sidebar content */}
              <div className="d-flex flex-column align-items-center align-items text-white min-vh-100">
                <Link to="/" className="d-flex align-items-center  me-md-auto text-white text-decoration-none">
                  <span className="fs-5 d-none d-sm-inline">Menu</span>
                </Link>
                <ul className="nav nav-pills flex-column mb-0 align-items-center align-items-sm-start" id="menu">
                  <li className="nav-item">
                    <Link to="/card" className="nav-link align-middle px-0">
                      <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Home</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/getnotice" className="nav-link px-0 align-middle">
                      <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Notice</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/getsub" className="nav-link px-0 align-middle">
                      <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Subject</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/getreport" className="nav-link px-0 align-middle">
                      <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">reports</span>
                    </Link>
                  </li>
                 
                
                  <li><a className="dropdown-item" onClick={handleLog}>Sign out</a></li>

                 
                </ul>
                <div className="dropdown pb-4">
                  <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="" alt="" width="30" height="30" className="rounded-circle" />
                    
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                    
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    <li><hr className="dropdown-divider" /></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
}

export default StudentSideBar;
