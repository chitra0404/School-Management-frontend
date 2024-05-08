import React,{useEffect,useState} from 'react';
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Base_Url } from '../../config/api';








function AddTeacher() {   
  
    const [open,setOpen]=useState(true);
    const [newTeacher, setNewTeacher] =  useState({
        teacherID:"",
        teacherName:"",
        email:"",
        password:"",
        mobile:"",
        age:"",
        gender:"",
        dob:"",
        address:"",
        className:"",
          
          teachSubject:"",
        
     
    });
    // const navigate = useNavigate;
    const handleSubmit = async(e) => {
        e.preventDefault(); 
        setOpen(true);
       
        const teacher= {...newTeacher }
        
        try {
        const token = localStorage.getItem('tokenAuth')
        const email = localStorage.getItem('email')
                console.log(token, email)
            const config = { headers : {"x-auth-token" : token}} 
        const response = await axios.post(`${Base_Url}/app/teachReg`, 
        teacher, config) 
        //console.log(response);
        if(response.status === 200){
            //console.log(response)
           
            setNewTeacher({
                teacherID:"",
                teacherName:"",
                email:"",
                password:"",
                mobile:"",
                age:"",
                gender:"",
                dob:"",
                address:"",
                className:"",
            
                  
                  teachSubject:"",
                 
                
                
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
                        type="number"
                        id="title"
                        className="form-control"
                        placeholder="teacherID"
                        value={newTeacher.teacherID}
                        onChange={(e) => setNewTeacher({...newTeacher, teacherID: e.target.value})}

                      
                      />
                     
                    </div>   
                    <div className="form-outline mb-2">
                      <input
                        type="text"
                        id="teacherName"
                        className="form-control"
                        placeholder="Enter teacherName"
                        value={newTeacher.teacherName}
                        onChange={(e) => setNewTeacher({...newTeacher, teacherName: e.target.value})}

                      
                      />
                     
                    </div>   
                  
                    <div className="form-outline mb-2">
                      <input
                        type="text"
                        id="email"
                        className="form-control"
                        placeholder="Enter email"
                        value={newTeacher.email}
                        onChange={(e) => setNewTeacher({...newTeacher, email: e.target.value})}

                      
                      />
                      <div className="form-outline mb-2">
                      <input
                        type="text"
                        id="password"
                        className="form-control"
                        placeholder="Enter password"
                        value={newTeacher.password}
                        onChange={(e) => setNewTeacher({...newTeacher, password: e.target.value})}

                      
                      />
                     
                    </div>  
                    <div className="form-outline mb-2">
                      <input
                        type="number"
                        id="mobile"
                        className="form-control"
                        placeholder="Enter mobile"
                        value={newTeacher.mobile}
                        onChange={(e) => setNewTeacher({...newTeacher, mobile: e.target.value})}

                      
                      />
                     
                    </div>   
                    <div className="form-outline mb-2">
                      <input
                        type="Number"
                        id="age"
                        className="form-control"
                        placeholder="Enter age "
                        value={newTeacher.age}
                        onChange={(e) => setNewTeacher({...newTeacher, age: e.target.value})}

                      
                      />
                     
                    </div>   
                    <div className="form-outline mb-2">
                      <input
                        type="text"
                        id="gender"
                        className="form-control"
                        placeholder="Enter gender"
                        value={newTeacher.gender}
                        onChange={(e) => setNewTeacher({...newTeacher, gender: e.target.value})}
 />
                    </div>  
                    <div className="form-outline mb-2">
                      <input
                        type="date"
                        id="dob"
                        className="form-control"
                        placeholder="Enter dob"
                        value={newTeacher.dob}
                        onChange={(e) => setNewTeacher({...newTeacher, dob: e.target.value})}
 />
                    </div>  
                    <div className="form-outline mb-2">
                      <input
                        type="text"
                        id="address"
                        className="form-control"
                        placeholder="Enter address"
                        value={newTeacher.address}
                        onChange={(e) => setNewTeacher({...newTeacher, address: e.target.value})}
 />
                    </div>  
                    <div className="form-outline mb-2">
                      <input
                        type="Number"
                        id="classname"
                        className="form-control"
                        placeholder="Enter class"
                        value={newTeacher.className}
                        onChange={(e) => setNewTeacher({...newTeacher, className: e.target.value})}
 />
                    </div>  
                    <div className="form-outline mb-2">
                      <input
                        type="text"
                        id="teachSubject"
                        className="form-control"
                        placeholder="Enter subject"
                        value={newTeacher.teachSubject}
                        onChange={(e) => setNewTeacher({...newTeacher, teachSubject: e.target.value})}
 />
                    </div>  
                  
                  
                     
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

export default AddTeacher;