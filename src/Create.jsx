import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

export default function Create() {
    const [values, setvalues] = useState({
        name: '',
        email: '',
        Phone: ''
    })
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        axios.post('http://localhost:3000/users', values)
            .then(res => {
                console.log(res);
                navigate('/')
            })
            .catch(err => console.log(err));
    }
    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
            <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
                <h1>Add a user</h1>
                <form onSubmit={handleSubmit}>
                    <div className='mb-2'>
                        <lable htmlFor="name">Name:</lable>
                        <input type="text" name='name' className='form-control' placeholder='Enter Name'
                            onChange={e => setvalues({
                                ...values,
                                name: e.target.value
                            })} />
                    </div>
                    <div className='mb-2'>
                        <lable htmlFor="email">Email:</lable>
                        <input type="email" name='email' className='form-control' placeholder='Enter Email'
                            onChange={e => setvalues({
                                ...values,
                                email: e.target.value
                            })} />
                    </div>
                    <div className='mb-3'>
                        <lable htmlFor="email">Phone:</lable>
                        <input type="text" name='phone' className='form-control' placeholder='Enter Phone'
                            onChange={e => setvalues({
                                ...values,
                                Phone: e.target.value
                            })} />
                    </div>
                    <button className='btn btn-success'>Submit</button>
                    <Link to="/" className='btn btn-primary ms-3'>Back</Link>
                </form>
            </div>
        </div>
    )
}
