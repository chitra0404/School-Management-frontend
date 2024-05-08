import React,{useEffect,useState} from 'react';
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Base_Url } from '../../config/api';








function AddReports() {   
  
    const [open,setOpen]=useState(true);
    
    const [marks,setMarks]=useState({subjectName:"",score:"",total:""});
    const [newReport, setNewReport] =  useState({
     name:"",
        email:"",
     mobile:"",
        age:"",
    className:"",
         date:"" ,
      });
    // const navigate = useNavigate;
    
     
    const handleSubmit = async(e) => {
        e.preventDefault(); 
        setOpen(true);
       
        const report= {...newReport ,marks}
        
        try {
        const token = localStorage.getItem('tokenAuth')
        const email = localStorage.getItem('email')
                console.log(token, email)
            const config = { headers : {"x-auth-token" : token}} 
        const response = await axios.post(`${Base_Url}/app/addreport`, 
        report, config) 
        //console.log(response);
        if(response.status === 200){
            //console.log(response)
           
            setNewReport({
               
                name:"",
                email:"",
               mobile:"",
                age:"",
                className:"",
             date:"",
                 
                
                
            })
            setMarks({subjectName:"",score:"",total:""});
            
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
                    Report
                  </h2>

                  <form onSubmit={handleSubmit}>
                      
                    <div className="form-outline mb-2">
                      <input
                        type="text"
                        id="name"
                        className="form-control"
                        placeholder="Enter name"
                        value={newReport.name}
                        onChange={(e) => setNewReport({...newReport, name: e.target.value})}

                      
                      />
                     
                    </div>   
                  
                    <div className="form-outline mb-2">
                      <input
                        type="text"
                        id="email"
                        className="form-control"
                        placeholder="Enter email"
                        value={newReport.email}
                        onChange={(e) => setNewReport({...newReport, email: e.target.value})}

                      
                      />
                      <div className="form-outline mb-2">
                      <input
                        type="number"
                        id="mobile"
                        className="form-control"
                        placeholder="Enter mobile"
                        value={newReport.mobile}
                        onChange={(e) => setNewReport({...newReport, mobile: e.target.value})}

                      
                      />
                     
                    </div>   
                    <div className="form-outline mb-2">
                      <input
                        type="Number"
                        id="age"
                        className="form-control"
                        placeholder="Enter age "
                        value={newReport.age}
                        onChange={(e) => setNewReport({...newReport, age: e.target.value})}

                      
                      />
                     
                    </div>   
                   
                    <div className="form-outline mb-2">
                      <input
                        type="date"
                        id="date"
                        className="form-control"
                        placeholder="Enter dob"
                        value={newReport.date}
                        onChange={(e) => setNewReport({...newReport, date: e.target.value})}
 />
                    </div>  
                    
                    <div className="form-outline mb-2">
                      <input
                        type="Number"
                        id="classname"
                        className="form-control"
                        placeholder="Enter class"
                        value={newReport.className}
                        onChange={(e) => setNewReport({...newReport, className: e.target.value})}
 />
                    </div>  
                    
                  
                  
                     
                    </div>   
                    <div className="form-outline mb-2">
                      <input
                        type="text"
                        id="subject"
                        className="form-control"
                        placeholder="Enter subject"
                        value={marks.subjectName}
                        onChange={(e) => setMarks({...marks, subjectName: e.target.value})} />
                    </div>
                    <div className="form-outline mb-2">
                      <input
                        type="Number"
                        id="score"
                        className="form-control"
                        placeholder="Enter score"
                        value={marks.score}
                        onChange={(e) => setMarks({...marks, score: e.target.value})} />
                    </div>      
                    <div className="form-outline mb-2">
                      <input
                        type="Number"
                        id="total"
                        className="form-control"
                        placeholder="Enter total"
                        value={marks.total}
                                              onChange={(e) => setMarks({...marks, total: e.target.value})}
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

export default AddReports;