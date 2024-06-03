import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register', { name, email, password })
            .then(result => {
                console.log(result)

                axios.post('http://localhost:3001/login', { email, password })
                    .then(result => {
                        console.log(result)
                        if (result.data === "success") {
                            
                            navigate('/home')
                            alert("Successfully Registered Your Data Is Stored On The MongoDB. ")

                        }
                    })

                // navigate('/login')
                // alert("Successfully Registered Your Data Is Stored On The MongoDB ")


            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <div className="d-flex justify-content-center align-items-center bg-secondary m-4">
                <div className="bg-secondary p-3 mx-4 rounded w-95">
                    <h2>Register</h2>
                    <form onSubmit={handleSubmit}
                        className='mx-4'>
                        <div className="mb-3">
                            <label htmlFor="email">
                                <strong>Name</strong>
                            </label>
                            <input
                                type="text"
                                placeholder='Enter name'
                                autoComplete='off'
                                name='name'
                                className='form-control rounded-10'
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email">
                                <strong>Email</strong>
                            </label>
                            <input
                                type="text"
                                placeholder='Enter email'
                                autoComplete='off'
                                name='email'
                                className='form-control rounded-10'
                                onChange={(e) => setEmail(e.target.value)}

                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email">
                                <strong>Password</strong>
                            </label>
                            <input
                                type="password"
                                placeholder='Enter Password'
                                autoComplete='off'
                                name='Password'
                                className='form-control rounded-10'
                                onChange={(e) => setPassword(e.target.value)}

                            />
                        </div>
                        <button type='submit' className='btn btn-success w-100 rounded-5'>
                            Register
                        </button>
                    </form>
                    <p>Already have and account</p>
                    <Link to="/login" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>
                        Login
                    </Link>

                </div>
            </div>
        </>
    )
}

export default Signup
