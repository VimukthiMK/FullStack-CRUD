import React from 'react'

export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">FullStack-CRUD</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <button type="button" class="btn btn-outline-light">Add User</button>
           
            </div>
        </nav>
    </div>
  
  )
}
