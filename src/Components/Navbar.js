import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

export const Navbar = (props) => {
  return (

    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          {/* <a className="navbar-brand" href="#">{props.title}</a> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.aboutText}</Link>
                {/* <a className="nav-link" href="/about">{props.aboutText}</a> */}
              </li>
            </ul>
            {/* <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
              <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode === "light" ? "dark" : "light"} Mode</label>
            </div> */}
            <div className="d-flex">
              <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')}} style={{border:'1px solid gray',height:'30px',width:'30px',cursor:'pointer'}}></div>
              <div className="bg-secondary rounded mx-2" onClick={()=>{props.toggleMode('secondary')}} style={{border:'1px solid gray',height:'30px',width:'30px',cursor:'pointer'}}></div>
              <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode('success')}} style={{border:'1px solid gray',height:'30px',width:'30px',cursor:'pointer'}}></div>
              <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}} style={{border:'1px solid gray',height:'30px',width:'30px',cursor:'pointer'}}></div>
              <div className="bg-light rounded mx-2" onClick={()=>{props.toggleMode('light')}} style={{border:'1px solid gray',height:'30px',width:'30px',cursor:'pointer'}}></div>
              <div className="bg-dark rounded mx-2" onClick={()=>{props.toggleMode('dark')}} style={{border:'1px solid gray',height:'30px',width:'30px',cursor:'pointer'}}></div>
            </div>
          </div>

        </div>
      </nav>

    </>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
}
// isRequired means it must have a value otherwise it will show error 

Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "Set about here"
}
