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

function AdminLayout() {
  return (
    <section className=" d-flex justify-content-center align-items-center ">
      <div className="row align-items-start ">
        <h1 className='text-center vw-100 bg-success'>Admin Dashboard</h1>
        {/* AdminSideBar column */}
        <div className="col-md-3  align-items-start  ">
          <AdminSideBar />
        </div>
        {/* Routes column */}
        <div className="col-md-9 h-100 align-item-start ">
          <Routes>
            <Route path="/card" element={<CardList />} />
            <Route path="/addteacher" element={<AddTeacher />} />
            <Route path="/addstudent" element={<AddStudent />} />
            <Route path="/addnotice" element={<AddUpdate />} />
            <Route path="/getclass" element={<Class />} />
            <Route path="/addsub" element={<AddSubject />} />

        

          </Routes>
        </div>
      </div>
    </section>
  );
}

export default AdminLayout;
