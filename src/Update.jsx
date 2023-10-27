import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

export default function Update() {
  const [values, setvalues] = useState({
    name: '',
    email: '',
    Phone: ''
  })

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/users/' + id)
      .then(res => {
        setvalues(res.data)
      })
      .catch(err => console.log(err));
  }, [])

  function handleUpdate(e) {
    e.preventDefault();
    axios.put('http://localhost:3000/users/' + id, values)
      .then(res => {
        console.log(res);
        navigate('/')
      })
      .catch(err => console.log(err));
  }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h1>Update user</h1>
        <form onSubmit={handleUpdate}>
          <div className='mb-2'>
            <lable htmlFor="name">Name:</lable>
            <input type="text" name='name' className='form-control' placeholder='Enter Name'
              value={values.name}
              onChange={e => setvalues({
                ...values,
                name: e.target.value
              })} />
          </div>
          <div className='mb-2'>
            <lable htmlFor="email">Email:</lable>
            <input type="email" name='email' className='form-control' placeholder='Enter Email'
              value={values.email}
              onChange={e => setvalues({
                ...values,
                email: e.target.value
              })} />
          </div>
          <div className='mb-3'>
            <lable htmlFor="email">Phone:</lable>
            <input type="text" name='phone' className='form-control' placeholder='Enter Phone'
              value={values.Phone}
              onChange={e => setvalues({
                ...values,
                Phone: e.target.value
              })} />
          </div>
          <button className='btn btn-success'>Update</button>
          <Link to="/" className='btn btn-primary ms-3'>Back</Link>
        </form>
      </div>
    </div>
  )
}
