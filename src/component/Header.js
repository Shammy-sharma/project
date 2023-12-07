import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Logo</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex justify-content-center align-items-center mx-auto" >
              <div className='login'>
                <input className="inputText" id='inn' type="search" aria-label="Search" />
                <input className="inputText2" type="search" placeholder='pincode' />
                <button className=' bg-light' style={{ border: "none",position:"absolute",top:"0",right:"0", marginRight:"10px",marginTop:"4px"}}> <i className='icon' style={{backgroundColor:"white",marginTop:"5px"}}> <SearchIcon /></i></button>
              </div>
              <Link className=" loginn text-decoration-none text-black-50 ms-2" to="/login">login</Link>
              <Link className='loginn text-decoration-none ms-2 text-black-50' to="/signup">signup</Link>
              <i className='carticon'><AddShoppingCartIcon sx={{ fontSize: "20px", cursor: "pointer" }} /></i>
            </form>

          </div>
        </div>

      </nav>
     
    </div>
  )
}

export default Header
