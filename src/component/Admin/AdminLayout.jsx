import React from 'react';
import AdminSideBar from './AdminSideBar';
import { CardList } from './Card/CardList';
import AddTeacher from './AddTeacher';
import { Link, useLocation, Route, Routes } from 'react-router-dom';
import AddStudent from './AddStudent';
import Notice from '../Notice';
import AddUpdate from './AddUpdate';

function AdminLayout() {
  return (
    <section className="vh-100 vw-100 d-flex justify-content-center align-items-center">
      <div className="row align-items-start w-100 h-100">
        <div ><h1 className='text-start'>Admin Dashboard</h1></div>
        {/* AdminSideBar column */}
        <div className="col-md-3  align-items-start h-100">
          <AdminSideBar />
        </div>
        {/* Routes column */}
        <div className="col-md-9 h-100 align-item-start">
          <Routes>
            <Route path="/card" element={<CardList />} />
            <Route path="/addteacher" element={<AddTeacher />} />
            <Route path="/addstudent" element={<AddStudent />} />
            <Route path="/addnotice" element={<AddUpdate />} />

          </Routes>
        </div>
      </div>
    </section>
  );
}

export default AdminLayout;
