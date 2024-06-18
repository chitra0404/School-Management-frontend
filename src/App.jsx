import { useState,useEffect } from 'react'
import React from "react"
import './App.css'
import {Route,Routes,useLocation } from 'react-router-dom'
import { UserTypeProvider } from './context/UserTypeContext'
import LoginPage from './Pages/MainLoginPAge/LoginPage'
import AddUpdate from './component/Admin/AddUpdate'
import AddTeacher from './component/Admin/AddTeacher'
import AddStudent from './component/Admin/AddStudent'
import AddReports from './component/Teacher/AddReports'
import GetReport from './component/Teacher/GetReport'
import Notice from './component/Notice'
import Admin from './Pages/LoginPaages.jsx/Admin'
import AdminSideBar from './component/Admin/AdminSideBar'
import Sidebar from './component/Teacher/Sidebar'
import { CardList } from './component/Admin/Card/CardList'
import AdminLayout from './component/Admin/AdminLayout'
import SideBarLayout from './component/Teacher/SidebarLayout'
import StudentLayou from './component/Student/StudentLayou'
import Teacher from './Pages/LoginPaages.jsx/Teacher'
import Stuent from './Pages/LoginPaages.jsx/Stuent'
import Class from './component/Class'
import Subject from './component/Subject'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
     
   
      <Routes>
      
<Route path="/" element={<LoginPage/>}/>
<Route path="/ad" element={<Admin/>}/>
<Route path="/tech" element={<Teacher/>}/>
<Route path="/stud" element={<Stuent/>}/>
<Route path="/admin/*" element={<AdminLayout/>}/>
<Route path="/teacher/*" element={<SideBarLayout/>}/>
<Route path="/student/*" element={<StudentLayou/>}/>
{/* <Route path="/card" element={<CardList />} />
                  <Route path="/getnotice" element={<Notice />} />
                  <Route path="/getreport" element={<GetReport />} />
                  <Route path="/getsub" element={<Subject />} /> */}






  </Routes>
   
    
    </>
  )
}
// function Navbar() {
//   const [userRole, setUserRole] = useState('');

//   const location = useLocation();

//   // useEffect(() => {
//   //   const path = location.pathname;

//   //   if (path.startsWith('/admin')) {
//   //     setUserRole('admin');
//   //   } else if (path.startsWith('/teacher')) {
//   //     setUserRole('teacher');
//   //   } else if (path.startsWith('/student')) {
//   //     setUserRole('student');
//   //   }
//   //   console.log(path);
//   // }, [location]);

//   return (
//     <>
//      {/* {userRole === 'admin' ? (
//         <AdminLayout />
//       ) : userRole === 'teacher' ? (
//         <SideBarLayout/>)
//        :userRole === 'student' ? (
//         <StudentLayou/>):null } */}
//     </>
//   );
// }

export default App
