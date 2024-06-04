import React,{useEffect,useState} from 'react';

import axios from 'axios';
import { Base_Url } from '../config/api';


function Subject() {


    const [notice, setNotice] = useState([]);
 
    useEffect(() => {
        axios.get(`${Base_Url}/app/getsub`)
           .then(res => {
               
                 setNotice([notice,...res.data]);
               console.log("Use data:", res.data);
           })
        }, []);

        return(
            <section className="vh-100 vw-100 mt-5" >
      <h4 className='text-start'>subjects:</h4>
            <div className="col-md-6  align-items-start   ">
 
    <table className='table table-bordered '>
        <thead className='table-dark'>
            <tr>
            <th >subcode</th>
                            <th>subname</th>
                            <th>sessions</th>
                            <th>class</th>
                            <th>teacherName</th>
                            
                            
                



            </tr>
        </thead>
        <tbody>
            {
 notice.map((item, index) => (
                // update===item.id?<EditList item={item} user={user} setUser={setUser} handleEdit={handleEdit}  />:
                <tr  className="table" key={index}> 
                <td>{item.subcode}</td>
                <td>{item.subname}</td>
                <td >{item.sessions}</td>
                <td >{item.className}</td>
                <td >{item.teacherName}</td>
                
             
          

                </tr>
            ))}
           
        </tbody>
    </table>

  
    
    </div>
    </section>
               
                
              )
            }
            
            export default Subject;
            