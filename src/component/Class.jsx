import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { Base_Url } from '../config/api';

function Class() {
    const [clas, setClas] = useState([]);

    useEffect(() => {
        axios.get(`${Base_Url}/app/getclass`)
            .then(res => {
                setClas([...res.data]);
                console.log("Use data:", res.data);
            });
    }, []);

    return (
        <section className=" mt-5 pt-5 d-flex justify-content-center align-items-center">
            <div className="col-md-8">
                <table className="table table-bordered">
                    <thead className="table-dark">
                        <tr>
                            <th>Class</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clas.map((item, index) => (
                            <tr key={index}>
                                <td>{item.className}</td>
                                <td>
                                    <button className="btn btn-primary">
                                        <Link to="/admin/addsub" className="text-white text-decoration-none">Add Subject</Link>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default Class;
