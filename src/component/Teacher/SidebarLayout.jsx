import React from 'react';
import SideBar from './Sidebar';
import { CardList } from '../Admin/Card/CardList';

import { Link, useLocation, Route, Routes } from 'react-router-dom';
import AddReports from './AddReports';
import GetReport from './GetReport';
import Notice from '../Notice';
import Subject from '../Subject';

function SideBarLayout() {
  const sectionStyle = {
    backgroundImage: 'url(https://media.istockphoto.com/id/503240055/photo/chalkboard-background-xxxl.webp?b=1&s=170667a&w=0&k=20&c=3n6IikxsnUZT4VOrjD07wHdUo2Oa-ByExvJwoQ9D-RI=)', // Replace with your image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    width: '100vw'
  };
  return (
    <section style={sectionStyle} className=" d-flex justify-content-center align-items-center">
      <div className="row align-items-start w-100 h-100 ">
       
        <div className="col-md-4 w-25 align-items-start h-100">
          <SideBar />
        </div>
        {/* Routes column */}
        <div className="col-md-8 h-100 align-item-start">
          <Routes>
            <Route path="/card" element={<CardList />} />
            <Route path="/getnotice" element={<Notice/>} />
            <Route path="/addreport" element={<AddReports />} />
            <Route path="/getreport" element={<GetReport />} />
            <Route path="/getsub" element={<Subject />} />


          </Routes>
        </div>
      </div>
    </section>
  );
}

export default SideBarLayout;
