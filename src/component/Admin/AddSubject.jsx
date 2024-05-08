import React,{useEffect,useState} from 'react';
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Base_Url } from '../../config/api';








function AddSubject() {   
  
    const [open,setOpen]=useState(true);
    const [newUpdate, setNewUpdate] =  useState({
      subcode:"",
     subname:"",
     sessions:"",
     className:"",
     teacherName:""
     
    });
    // const navigate = useNavigate;
    const handleSubmit = async(e) => {
        e.preventDefault(); 
        setOpen(true);
       
        const update= {...newUpdate }
        
        try {
        const token = localStorage.getItem('loggedInUser')
       
                console.log(token, email)
            const config = { headers : {"x-auth-token" : token}} 
        const response = await axios.post(`${Base_Url}/app/createsub`, 
        update, config) 
        //console.log(response);
        if(response.status === 200){
            //console.log(response)
           
            setNewUpdate({
                subcode:"",
                subname:"",
                sessions:"",
                className:"",
                teacherName:""
                
                
            })
            
        }
        else{
            window.alert('Error occured')
        }
      }
      catch(error){
        console.log(error);
  
    //     if( error.response.status === 403) {
    //       window.alert("Session expired. Login again to continue")
    //     //   navigate('/')
    //   }
    }
}

    // useEffect(() => {
    //      axios.post(`${Base_Url}/ad/createRequest`)
    //         .then(res => {
                
    //             setOrder([order,...res.data.ordersList]);
    //             console.log("Use data:",order);
    //             localStorage.setItem("data",JSON.stringify(res.data));
    //         })
    // }, []);


  return (
    <div>
    <div>
    <section className="vh-100 vw-100 mt-5" >
      
    <div className="col-md-6  align-items-start   ">
             
                
             <h2 className="text-uppercase text-center mb-4">
                   
                  </h2>

                  <form onSubmit={handleSubmit}>
                    <div className="form-outline mb-2">
                      <input
                        type="text"
                        id="subcode"
                        className="form-control"
                        placeholder="Enter subcode"
                        value={newUpdate.subcode}
                        onChange={(e) => setNewUpdate({...newUpdate, subcode: e.target.value})}

                      
                      />
                     
                    </div>   
                  

                   
                    <div className="form-outline mb-2">
                      <input
                        type="textarea"
                        id="subname"
                        className="form-control"
                        placeholder="Enter subname"
                        value={newUpdate.subname}
                        onChange={(e) => setNewUpdate({...newUpdate, subname: e.target.value})}
                       
                      />
                      </div>
                      <div className="form-outline mb-2">
                      <input
                        type="textarea"
                        id="sessions"
                        className="form-control"
                        placeholder="Enter session"
                        value={newUpdate.sessions}
                        onChange={(e) => setNewUpdate({...newUpdate, sessions: e.target.value})}
                       
                      />
                      
                    </div>
                  
                       
                    

                      <div className="form-outline mb-2">
                      <input
                        type="textarea"
                        id="subname"
                        className="form-control"
                        placeholder="Enter subname"
                        value={newUpdate.teacherName}
                        onChange={(e) => setNewUpdate({...newUpdate, teacherName: e.target.value})}
                       
                      />
                      
                    </div>
                    <div className="form-outline mb-2">
                      <input
                        type="text"
                        id="date"
                        className="form-control"
                        placeholder="Enter  classname"
                        value={newUpdate.className}
                        onChange={(e) => setNewUpdate({...newUpdate, className: e.target.value})}
                       
                      />
                      </div>

                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-dark btn-lg btn-block"
                      >
                       create
                      </button>
                    </div>

                  
                  </form>
                </div>
              
            
         
    </section> 
    </div>
    </div>  

  )
}

export default AddSubject;