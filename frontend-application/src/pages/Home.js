import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Home() {
    const [users,setUsers]=useState([])

        useEffect(()=> {
            loadUSers()
        },[])

        const loadUSers=async()=> {
            const result=await axios.get("http://localhost:8080/api/users")
            setUsers(result.data)
        }   
  
    return (
    <div className='container'>
        <div className='py-4'>
        <table className="table border shadow">
  <thead>
    <tr className='text-center align-middle'>
      <th scope="col">ID</th>
      <th scope="col">UserName</th>
      <th scope="col">name</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
   {
    users.map((user,index)=>(
        <tr className='text-center align-middle'>
            <th scope='row'>{user.id}</th>
            <td>{user.username}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
            <Link className='btn btn-secondary mx-2' to={"/viewuser"}> View </Link>
            <Link className='btn btn-outline-primary mx-2' to={`/edituser/${user.id}`}> Edit </Link>
            <Link className='btn btn-danger mx-2' to={"/deleteuser"}> Delete </Link>
            </td>
        </tr>
    ))
   }
  </tbody>
</table>
        </div>
    </div>
  )
}
