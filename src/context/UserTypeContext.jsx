// UserTypeContext.js
import React, { createContext, useContext, useState, useEffect, } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { Base_Url } from '../config/api';


const UserTypeContext = createContext();

export const useUserType = () => useContext(UserTypeContext);

export const fetchReport = async () => {
  try {
    const res = await axios.get(`${Base_Url}/app/getreport`);
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log("error occurred", err);
    return [];
  }
};
export const fetchSubject=async()=>{
  try{
  const res = await axios.get(`${Base_Url}/app/getsub`);
    console.log(res.data);
    return res.data;

  } catch (err) {
    console.log("error occurred", err);
    return [];
}
}

export const UserTypeProvider = ({ children }) => {
  const [userType, setUserType] = useState('');
  const [report, setReport] = useState([]);
  const [sub,setSub]=useState([]);
  const navigate=useNavigate();
  

  const handleLogout=()=>{
    localStorage.removeItem("tokenAuth");
   
   
   
  }
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchReport();
      setReport(data);
    };
  
    const fetchSub = async () => {
      const resdata = await fetchSubject();
      setSub(resdata);
    };
  
    fetchData();
    fetchSub();
  }, []);

  return (
    <UserTypeContext.Provider value={{ userType, setUserType, report, setReport,handleLogout,sub,setSub }}>
      {children}
    </UserTypeContext.Provider>
  );
};