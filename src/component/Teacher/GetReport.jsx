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
  <div>
    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
  {/* <button className="btn btn-primary me-md-2" type="button" onClick={()=>navigate("/request")} >ADD LEAD</button> */}
  
</div>
 
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
               
                
  )
}

export default GetReport