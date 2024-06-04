import React from 'react';
import AdminSideBar from './AdminSideBar';
import { CardList } from './Card/CardList';
import AddTeacher from './AddTeacher';
import { Link, useLocation, Route, Routes } from 'react-router-dom';
import AddStudent from './AddStudent';
import Notice from '../Notice';
import AddUpdate from './AddUpdate';
import Class from '../Class';
import AddSubject from './AddSubject';
import Subject from '../Subject';

function AdminLayout() {
  const sectionStyle = {
    backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEBnb8mRD7KNH209Bg0urisEd_7seAfDEpjg&s)', // Replace with your image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    width: '100vw'
  };
  return (
    <section style={sectionStyle} className=" d-flex justify-content-center align-items-center ">
      <div className="row align-items-start h-100 w-100 ">
        {/* AdminSideBar column */}
        <div className="col-md-4 w-25 align-items-start  ">
          <AdminSideBar />
        </div>
        {/* Routes column */}
        <div className="col-md-8  h-100 align-item-start ">
          <Routes>
            <Route path="/card" element={<CardList />} />
            <Route path="/addteacher" element={<AddTeacher />} />
            <Route path="/addstudent" element={<AddStudent />} />
            <Route path="/addnotice" element={<AddUpdate />} />
            <Route path="/getclass" element={<Class />} />
            <Route path="/addsub" element={<AddSubject />} />
            <Route path="/sub" element={<Subject/>}/>

        

          </Routes>
        </div>
      </div>
    </section>
  );
}

export default AdminLayout;
