import React,{useEffect,useState} from 'react';
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Base_Url } from '../../config/api';








function AddUpdate() {   
  
    const [open,setOpen]=useState(true);
    const [newUpdate, setNewUpdate] =  useState({
      title:"",
     details:"",
     date:"",
     
    });
    // const navigate = useNavigate;
    const handleSubmit = async(e) => {
        e.preventDefault(); 
        setOpen(true);
       
        const update= {...newUpdate }
        
        try {
        const token = localStorage.getItem('tokenAuth')
        const email = localStorage.getItem('email')
                console.log(token, email)
            const config = { headers : {"x-auth-token" : token}} 
        const response = await axios.post(`${Base_Url}/app/addupdate`, 
        update, config) 
        //console.log(response);
        if(response.status === 200){
            //console.log(response)
           
            setNewUpdate({
              title:"",
              details:"",
              date:"",
                
                
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
                    Create Notices
                  </h2>

                  <form onSubmit={handleSubmit}>
                    <div className="form-outline mb-2">
                      <input
                        type="text"
                        id="title"
                        className="form-control"
                        placeholder="Enter title of your request"
                        value={newUpdate.title}
                        onChange={(e) => setNewUpdate({...newUpdate, title: e.target.value})}

                      
                      />
                     
                    </div>   
                  

                   
                    <div className="form-outline mb-2">
                      <input
                        type="textarea"
                        id="details"
                        className="form-control"
                        placeholder="Enter details"
                        value={newUpdate.details}
                        onChange={(e) => setNewUpdate({...newUpdate, details: e.target.value})}
                       
                      />
                      
                    </div>
                    <div className="form-outline mb-2">
                      <input
                        type="text"
                        id="date"
                        className="form-control"
                        placeholder="Enter the date of the request"
                        value={newUpdate.date}
                        onChange={(e) => setNewUpdate({...newUpdate, date: e.target.value})}
                       
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

export default AddUpdate;