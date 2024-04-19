// Login.js
import React ,{useEffect} from 'react';

import Stuent from '../LoginPaages.jsx/Stuent';
import Teacher from '../LoginPaages.jsx/Teacher';
import Admin from '../LoginPaages.jsx/Admin';
import { useUserType } from '../../context/UserTypeContext';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const { userType, setUserType } = useUserType();
  const navigate=useNavigate();

  useEffect(() => {
    if (userType === 'admin') {
      navigate('/ad');}
      else if(userType === 'teacher') {
        navigate('/tech');
    }
    else if(userType === 'student') {
      navigate('/stud');
  }
  }, [userType]);

  return (
    <section className="vh-100 vw-100 d-flex justify-content-center align-items-center" >
      <div className="row w-100 h-100">
        <div className="col-md-6 h-100">
          <div className="h-100 d-flex justify-content-center align-items-center">
            <img
              src="https://fireprotectionblog.com/wp-content/uploads/2019/03/school-clip-art-85.jpg"
              className="img-fluid h-90"
              style={{ borderRadius: "1rem 0 0 1rem" }}
            />
          </div>
        </div>
        <div className="col-md-6 h-100 d-flex justify-content-center align-items-center">
          
          {userType === '' && (
            <div>
              <h1 className="text-center fw-bolder fixed-top ">kALVI SCHOOL MANAGEMENT</h1>
              <h2 className="text-center fw-bolder">Tell me who are you</h2>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwRMJFGVrmBYj2Dc3ywRqpsyCal2me1cju0ZpzM9GUrK2CwuvhlZtNyomfPub7F6_jAf4&usqp=CAU" className="rounded-circle w-25 h-25" alt="student"onClick={() => setUserType('student')} />
              <img src="https://cdn-icons-png.flaticon.com/512/6621/6621964.png" className="rounded-circle w-25 h-25" alt="student"onClick={() => setUserType('teacher')}/>
              <img src="https://cdn-icons-png.freepik.com/512/9619/9619263.png" className="rounded-circle w-25 h-25" alt="student"onClick={() => setUserType('admin')}/>
             

            </div>
          )}
       
        </div>
      </div>
    </section>
  );
};

export default LoginPage;

