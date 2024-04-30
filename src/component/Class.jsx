import React,{useEffect,useState} from 'react';
import { useNavigate ,Link} from 'react-router-dom';

import axios from 'axios';


function Class() {


    const [clas, setClas] = useState([]);
 
    useEffect(() => {
        axios.get("http://localhost:3000/app/getclass")
           .then(res => {
               
                 setClas([clas,...res.data]);
               console.log("Use data:", res.data);
           })
        }, []);

        return(
            <section classNameName="vh-100 vw-100 mt-5" >
      
            <div classNameName="col-md-6  align-items-start   ">
 
    <table classNameName='table table-hover '>
        <thead classNameName='table-dark'>
            <tr>
            <th >class</th>
            <th>Action</th>
                          
                
            </tr>
        </thead>
        <tbody>
            {
clas.map((item, index) => (
                // update===item.id?<EditList item={item} user={user} setUser={setUser} handleEdit={handleEdit}  />:
                <tr  classNameName="table" key={index}> 
                <td>{item.className}</td>
                
                
             
                    <td>
 <button><Link to="/admin/addsub">addsub</Link></button>

  
  </td>

                </tr>
            ))}
           
        </tbody>
    </table>

  
    
    </div>
    </section>
               
                
              )
            }
            
            export default Class;
            