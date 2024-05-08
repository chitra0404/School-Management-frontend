import React,{useEffect,useState} from 'react';

import axios from 'axios';
import { Base_Url } from '../config/api';


function Notice() {


    const [notice, setNotice] = useState([]);
 
    useEffect(() => {
        axios.get(`${Base_Url}/app/getupdate`)
           .then(res => {
               
                 setNotice([notice,...res.data.message]);
               console.log("Use data:", res.data.message);
           })
        }, []);

        return(
            <section className="vh-100 vw-100 mt-5" >
      
            <div className="col-md-6  align-items-start   ">
 
    <table className='table table-hover '>
        <thead className='table-dark'>
            <tr>
            <th >date</th>
                            <th>title</th>
                            <th>details</th>
                            
                            
                




                <th></th>
            </tr>
        </thead>
        <tbody>
            {
 notice.map((item, index) => (
                // update===item.id?<EditList item={item} user={user} setUser={setUser} handleEdit={handleEdit}  />:
                <tr  className="table" key={index}> 
                <td>{item.date}</td>
                <td>{item.title}</td>
                <td >{item.details}</td>
                
             
                    <td></td>

                </tr>
            ))}
           
        </tbody>
    </table>

  
    
    </div>
    </section>
               
                
              )
            }
            
            export default Notice;
            