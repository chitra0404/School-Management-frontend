import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CardList } from '../Admin/Card/CardList';
import GetReport from '../Teacher/GetReport';
import Notice from '../Notice';
import StudentSideBar from './StudentSidebar';
import Subject from '../Subject';

function StudentLayout() {
  const sectionStyle = {
    backgroundImage: 'url(https://img.freepik.com/free-vector/watercolor-back-school-background-with-white-space_52683-41450.jpg)', // Replace with your image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    width: '100vw'
  };

  return (
    <section style={sectionStyle} className="d-flex justify-content-center align-items-center">
      <div className="row align-items-start h-100 w-100">
       
        <div className="col-md-4 w-25 align-items-start">
          <StudentSideBar />
        </div>
        <div className="col-md-8 h-100 align-item-start">
          <Routes>
            <Route path="/card" element={<CardList />} />
            <Route path="/getnotice" element={<Notice />} />
            <Route path="/getreport" element={<GetReport />} />
            <Route path="/getsub" element={<Subject />} />
          </Routes>
        </div>
        <div className="col-md-3">
          {/* Additional content */}
        </div>
      </div>
    </section>
  );
}

export default StudentLayout;
