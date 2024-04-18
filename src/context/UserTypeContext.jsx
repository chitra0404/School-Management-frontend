// UserTypeContext.js
import React, { createContext, useContext, useState, useEffect, } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";


const UserTypeContext = createContext();

export const useUserType = () => useContext(UserTypeContext);

export const fetchReport = async () => {
  try {
    const res = await axios.get("http://localhost:3000/app/getreport");
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log("error occurred", err);
    return [];
  }
};

export const UserTypeProvider = ({ children }) => {
  const [userType, setUserType] = useState('');
  const [report, setReport] = useState([]);
  

  const handleLogout=()=>{
    localStorage.removeItem('loggedin');
   
  }
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchReport();
      setReport(data);
    };
    fetchData();
  }, []);

  return (
    <UserTypeContext.Provider value={{ userType, setUserType, report, setReport,handleLogout }}>
      {children}
    </UserTypeContext.Provider>
  );
};