import React,{useEffect,useState} from 'react';

import axios from 'axios';


function Subject() {


    const [notice, setNotice] = useState([]);
 
    useEffect(() => {
        axios.get("http://localhost:3000/app/getsub")
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
            <th >subcode</th>
                            <th>subname</th>
                            <th>sessions</th>
                            <th>class</th>
                            <th>teacherName</th>
                            
                            
                




                <th></th>
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
                
             
                    <td></td>

                </tr>
            ))}
           
        </tbody>
    </table>

  
    
    </div>
    </section>
               
                
              )
            }
            
            export default Subject;
            