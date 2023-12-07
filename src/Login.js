import React, { useState } from 'react'

const Login = () => {
    const [userInput, setuuserInput] = useState({
        email: "",
        password: ""
    })
    const handleChange = (e) => {
        setuuserInput({ ...userInput, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(userInput);
    }
    return (
        <div className=' d-flex justify-content-center mb-5 mt-5'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3 mt-3 ">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input type="email" className=" logininput form-control" id="email" placeholder="Enter email" name="email" onChange={handleChange} />
                </div>
                <div className="mb-3 ">
                    <label htmlFor="pwd" className="form-label">Password:</label>
                    <input type="password" className=" logininput form-control" id="pwd" placeholder="Enter password" name="password" onChange={handleChange} />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login
