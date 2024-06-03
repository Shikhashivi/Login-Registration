import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
      <div className='p-5'>
        <h1>Home hello</h1>
        <p>Welcome , your data is stored to the DATABASE</p>
      </div>
      <div>
        <div className='d-flex flex-direction-column'>
        <Link to="/login" className='btn btn-success border w-100  rounded-5 text-decoration-none'>
            Logout
          </Link>
        </div>
       
      </div>
    </>
  )
}

export default Home
