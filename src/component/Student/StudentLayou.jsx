import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CardList } from '../Admin/Card/CardList';
import GetReport from '../Teacher/GetReport';
import Notice from '../Notice';
import StudentSideBar from './StudentSidebar';
import Subject from '../Subject';

function StudentLayout() {
  return (
    <section className="vh-100 vw-100 d-flex justify-content-center align-items-center">
      <div className="container-fluid h-100">
        <h1 className='text-center bg-warning'>STUDENT DASHBOARD</h1>
        <div className="row align-items-start h-100">
          {/* Sidebar column */}
          <div className="col-sm-3 h-100">
            <StudentSideBar />
          </div>
          {/* Main content column */}
          <div className="col-sm-9 h-100">
            <div className="row align-items-start">
              <div className="col-md-9 align-items-start"> {/* 3/4 width */}
                <Routes>
                  <Route path="/card" element={<CardList />} />
                  <Route path="/getnotice" element={<Notice />} />
                  <Route path="/getreport" element={<GetReport />} />
                  <Route path="/getsub" element={<Subject />} />

                </Routes>
              </div>
              <div className="col-md-3"> {/* 1/4 width */}
                {/* Additional content */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StudentLayout;
