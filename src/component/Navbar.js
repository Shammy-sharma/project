import React from 'react'

const Navbar = () => {
  return (
    <div className='pt-2 pb-2' style={{ backgroundColor: "gray", color: "white" }}>
      <ul className="nav">
        <li style={{float:"left"}} >
          <a className="text-white text-decoration-none" href="tel:731 4014800">+91 731 4014800,9826050161</a>
        </li>
        <li className="ms-5">
          <a className="ms-5 text-white text-decoration-none" href="mailto:info@indorepublicschool.org" style={{ fontWeight: "700" }}> info@indorepublicschool.org</a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
