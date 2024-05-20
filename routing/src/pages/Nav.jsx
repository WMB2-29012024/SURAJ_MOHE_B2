import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Nav = () => {
     const navigate = useNavigate();
     // useEffect(() =>{
     //      setTimeout(() =>{
     //           navigate("/contact")
     //      },3000)
     // },[])
  return (
    <div>
     <nav>
          <h1>Logo</h1>
          <div className="section">
               <div className="section">
                    <Link to="/home">Home</Link>
                    <button  onClick={() => navigate("/contact" ,{state:" Akshu bkl"})}> Go to Contact Page</button>
                    <Link to="/contact">Contact</Link>
                    <Link to="/Project">Project</Link>
                    <Link to="/about">About</Link>
                    
               </div>
          </div>
     </nav>
    </div>
  )
}

export default Nav