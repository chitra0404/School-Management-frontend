import React from 'react';
import SideBar from './Sidebar';
import { CardList } from '../Admin/Card/CardList';

import { Link, useLocation, Route, Routes } from 'react-router-dom';
import AddReports from './AddReports';
import GetReport from './GetReport';
import Notice from '../Notice';

function SideBarLayout() {
  return (
    <section className="vh-100 vw-100 d-flex justify-content-center align-items-center">
      <div className="row align-items-start w-100 h-100">
        <div ><h1 className='text-start'>Teacher Dashboard</h1></div>
        {/* AdminSideBar column */}
        <div className="col-md-3  align-items-start h-100">
          <SideBar />
        </div>
        {/* Routes column */}
        <div className="col-md-9 h-100 align-item-start">
          <Routes>
            <Route path="/card" element={<CardList />} />
            <Route path="/getnotice" element={<Notice/>} />
            <Route path="/addreport" element={<AddReports />} />
            <Route path="/getreport" element={<GetReport />} />

          </Routes>
        </div>
      </div>
    </section>
  );
}

export default SideBarLayout;
