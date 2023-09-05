import React, { useEffect, useState } from 'react'
import { Link , useParams } from 'react-router-dom'
import axios from 'axios'

export default function ViewUser() {

    const {id}=useParams()
    
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
  })

    useEffect(()=> {
      loadUser() 
    },[])

    const loadUser = async () => {
      try {
        const result = await axios.get(`http://localhost:8080/api/user/${id}`);
        setUser(result.data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };
  return (
    <div className='container'>
        <div className='row'>
          <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow '>
            <h2 className='text-center m-4'>View User</h2>

              <div className='card'>
                <div className='card-header'>
                  Details of User ID:
                  <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                      <b>Name:</b>
                      {user.name}
                    </li>
                    <li className='list-group-item'>
                      <b>UserName:</b>
                      {user.username}
                    </li>
                    <li className='list-group-item'>
                      <b>Email:</b>
                      {user.email}
                    </li>
                  </ul>
                </div>
              </div>
              <div className='text-center align-middle'>
              <Link className='btn btn-primary mx-2 m-4 ' to={"/"}> Back to Home </Link>
              </div>
            
          </div>
  
        </div>
        
      
      </div>
  )
}
