import React,{useEffect,useState} from 'react';

import axios from 'axios';


function Notice() {


    const [notice, setNotice] = useState([]);
 
    useEffect(() => {
        axios.get("http://localhost:3000/app/getupdate")
           .then(res => {
               
                 setNotice([notice,...res.data.message]);
               console.log("Use data:", res.data.message);
               localStorage.setItem("data",JSON.stringify(res.data));
           })
        }, []);

        return(
            <div>
    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
  
</div>
 
    <table className='table table-hover'>
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
               
                
              )
            }
            
            export default Notice;
            