import React from 'react';

import { CardList } from '../Admin/Card/CardList';
import GetReport from '../Teacher/GetReport';
import Notice from '../Notice';
import { Link, useLocation, Route, Routes } from 'react-router-dom';
import StudentSideBar from './StudentSidebar';


function StudentLayou() {
  return (
    <section className="vh-100 vw-100 d-flex justify-content-center align-items-center">
      <div className="row align-items-start w-100 h-100">
        <div ><h1 className='text-start'>Student Dashboard</h1></div>
        {/* AdminSideBar column */}
        <div className="col-md-3  align-items-start h-100">
          <StudentSideBar/>
        </div>
        {/* Routes column */}
        <div className="col-md-9 h-100 align-item-start">
          <Routes>
            <Route path="/card" element={<CardList />} />
            <Route path="/getnotice" element={<Notice />} />
            <Route path="/getreport" element={<GetReport />} />

          </Routes>
        </div>
      </div>
    </section>
  );
}

export default StudentLayou;
