// import MaterialIcon from 'react-google-material-icons';
import React from 'react';
import styles from "./Nav.css"
import osoul from './osoul.PNG'


const Nav =() => (
    <navbar className="navbar">
        <div className="left-section">
          <i className="material-icons">menu</i>
          <a href="">
            <img src={osoul} alt='' />
          </a>
        </div>
        <div className="mid-section">
          <form action="">
            <input type="text" placeholder="Search" />
            <button>
              <i className="material-icons">search</i>
            </button>
          </form>
        </div>
        <div className="right-section">
          <a href="">
            <i className="material-icons">upload</i>
          </a>
          <a href="">
            <i className="material-icons">apps</i>
          </a>
          <a href="">
            <i className="material-icons">notifications</i>
          </a>
          <a href="">
            <i className="material-icons">account_circle</i>
          </a>
          <div className="name" >
            <img src="" alt="" />
            <span>user.username</span>
          </div>
          <div className="name" >
            <img src="" alt="" />
            <span> تسجيل دخول</span>
          </div>
        </div>
  </navbar>
  );


export default Nav;
