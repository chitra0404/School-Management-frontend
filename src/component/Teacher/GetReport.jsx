import React, { useState, useEffect } from 'react';
import { useUserType, fetchReport } from '../../context/UserTypeContext';

const GetReport = () => {
  const { report, setReport } = useUserType();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchReport();
      setReport(data);
    };
    fetchData();
  }, [setReport]);
  return(

     <section className="vh-100 vw-100 mt-5" >
      
      <div className="col-md-6  align-items-start   ">
               
                  
              
 
    <table className='table table-hover'>
        <thead className='table-dark'>
            <tr>
            <th >name</th>
                            <th>age</th>
                            <th>email</th>
                            <th>mobile</th>
                            <th>date</th>
                            <th>class</th>
                            <th>subjectName</th>
                            <th>score</th>
                            <th>total</th>
                            
                




                <th></th>
            </tr>
        </thead>
        <tbody>
            {
    report.map((item, index) => (
       
                <tr  className="table" key={index}>
                   
                <td >{item.name}</td>
                <td>{item.age}</td>
                <td>{item.email}</td>
                <td>{item.date}</td>
                
                <td>{item.mobile}</td>
                <td>{item.className}</td>
                <td>{item.subjectName}</td>
                <td>{item.score}</td>
                <td>{item.total}</td>
                    
                    <td>{item.lead_status}</td>
             
                    <td></td>

                </tr>
            ))}
           
        </tbody>
    </table>

  
    
    
   
    </div>
    </section>
               
                
  )
}

export default GetReport