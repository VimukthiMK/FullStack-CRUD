import React, { useCallback, useEffect, useState } from 'react'
import { Link ,useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

export default function EditUser() {

    let navigate=useNavigate()

    const {id}=useParams()
    
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
  })
  
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

    const onSubmit = async (e)=> {
      e.preventDefault();
      await axios.put(`http://localhost:8080/api/user/${id}`,user)
      navigate("/")
    }



    const loadUser = useCallback(async()=>{
      const result= await axios.get(`http://localhost:8080/api/user/${id}`)
      setUser(result.data)
    }, [id])
    
    useEffect(() => {
      loadUser(); // Call loadUser here
    }, [loadUser]);
  
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow '>
            <h2 className='text-center m-4'>Edit User</h2>
  
           <form onSubmit={(e)=>onSubmit(e)}>
           <div className="mb-3">
                    <label for="name" className="form-label" >Name</label>
                    <input type={"text"} name='name' className="form-control" value={user.name} onChange={onInputChange} placeholder="Enter Your Name"required/>
            </div>
            <div className="mb-3">
                    <label for="username" className="form-label" >Username</label>
                    <input type={"text"} name='username' className="form-control" value={user.username} onChange={onInputChange} placeholder="Enter a username" required/>
            </div>
  
            <div className="mb-3">
                    <label for="email" className="form-label">Email address</label>
                    <input type={"email"} name='email' value={user.email} onChange={onInputChange} className="form-control"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className='text-center align-middle'>
            <button type="submit" className='btn btn-primary mx-2'> Submit </button>
            <Link className='btn btn-outline-danger mx-2' to={"/"}> Cancel </Link>
            
            
            </div>
           </form>
            
          </div>
  
        </div>
        
      
      </div>
    )
  }
  
