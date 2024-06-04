import React,{useEffect,useState} from 'react';
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Base_Url } from '../../config/api';








function AddStudent() {   
  
    const [open,setOpen]=useState(true);
    const [newStudent,setNewStudent] =  useState({
       studentID:"",
      studentName:"",
        email:"",
        password:"",
        mobile:"",
        age:"",
        gender:"",
        DOB:"",
        address:"",
        className:"",
         details:"", 
          
        
     
    });
    // const navigate = useNavigate;
    const handleSubmit = async(e) => {
        e.preventDefault(); 
        setOpen(true);
       
        const student= {...newStudent }
        
        try {
        const token = localStorage.getItem('tokenAuth')
        const email = localStorage.getItem('email')
                console.log(token, email)
            const config = { headers : {"x-auth-token" : token}} 
        const response = await axios.post(`${Base_Url}/app/teachReg`, 
        student, config) 
        //console.log(response);
        if(response.status === 200){
            //console.log(response)
           
            setNewStudent({
                studentID:"",
               studentName :"",
                email:"",
                password:"",
                mobile:"",
                age:"",
                gender:"",
                DOB:"",
                address:"",
                className:"",
            details:"",
                  
          
                 
                
                
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
    <section className="vh-100 vw-100 " >
     
            <div className="col-md-6 align-item-start   ">
             
                  <h2 className="text-uppercase text-center mb-4">
                  Add Student  
                  </h2>

                  <form onSubmit={handleSubmit}>
                    <div className="form-outline mb-2">
                      <input
                        type="number"
                        id="title"
                        className="form-control"
                        placeholder="studentID"
                        value={newStudent.studentID}
                        onChange={(e) => setNewStudent({...newStudent, studentID: e.target.value})}

                      
                      />
                     
                    </div>   
                    <div className="form-outline mb-2">
                      <input
                        type="text"
                        id="studentName"
                        className="form-control"
                        placeholder="Enter studentName"
                        value={newStudent.studentName}
                        onChange={(e) => setNewStudent({...newStudent, studentName: e.target.value})}

                      
                      />
                     
                    </div>   
                  
                    <div className="form-outline mb-2">
                      <input
                        type="text"
                        id="email"
                        className="form-control"
                        placeholder="Enter email"
                        value={newStudent.email}
                        onChange={(e) => setNewStudent({...newStudent, email: e.target.value})}

                      
                      />
                      <div className="form-outline mb-2">
                      <input
                        type="text"
                        id="password"
                        className="form-control"
                        placeholder="Enter password"
                        value={newStudent.password}
                        onChange={(e) => setNewStudent({...newStudent, password: e.target.value})}

                      
                      />
                     
                    </div>  
                    <div className="form-outline mb-2">
                      <input
                        type="number"
                        id="mobile"
                        className="form-control"
                        placeholder="Enter mobile"
                        value={newStudent.mobile}
                        onChange={(e) => setNewStudent({...newStudent, mobile: e.target.value})}

                      
                      />
                     
                    </div>   
                    <div className="form-outline mb-2">
                      <input
                        type="Number"
                        id="age"
                        className="form-control"
                        placeholder="Enter age "
                        value={newStudent.age}
                        onChange={(e) => setNewStudent({...newStudent, age: e.target.value})}

                      
                      />
                     
                    </div>   
                    <div className="form-outline mb-2">
                      <input
                        type="text"
                        id="gender"
                        className="form-control"
                        placeholder="Enter gender"
                        value={newStudent.gender}
                        onChange={(e) => setNewStudent({...newStudent, gender: e.target.value})}
 />
                    </div>  
                    <div className="form-outline mb-2">
                      <input
                        type="date"
                        id="DOB"
                        className="form-control"
                        placeholder="Enter DOB"
                        value={newStudent.DOB}
                        onChange={(e) => setNewStudent({...newStudent, DOB: e.target.value})}
 />
                    </div>  
                    <div className="form-outline mb-2">
                      <input
                        type="text"
                        id="address"
                        className="form-control"
                        placeholder="Enter address"
                        value={newStudent.address}
                        onChange={(e) => setNewStudent({...newStudent, address: e.target.value})}
 />
                    </div>  
                    <div className="form-outline mb-2">
                      <input
                        type="Number"
                        id="classname"
                        className="form-control"
                        placeholder="Enter class"
                        value={newStudent.className}
                        onChange={(e) => setNewStudent({...newStudent, className: e.target.value})}
 />
                    </div>  
                    <div className="form-outline mb-2">
                      <input
                        type="text"
                        id="details"
                        className="form-control"
                        placeholder="Enter details"
                        value={newStudent.details}
                        onChange={(e) => setNewStudent({...newStudent, details: e.target.value})}
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

export default AddStudent;