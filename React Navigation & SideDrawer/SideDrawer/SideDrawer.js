import React from "react";
import "./SideDrawer.css";
import {NavLink} from "react-router-dom";

const sideDrawer = (props) => {
  let classes = ["Sidedrawer"];
  if (props.show) {
    classes = ["Sidedrawer", "Open"];
  }
  return (
    <nav className={classes.join(" ")}>
      <div className="Info__Box">
  <div className="Name__Box">{!props.loggedIn ? "Name": props.userInfo.name}</div>
  <div className="Email__Box">{!props.loggedIn?"Email": props.userInfo.email}</div>
      </div>
      <div className="Options">
        <div className="Options__Home">
          <NavLink to="/">Home</NavLink>
        </div>
        <div className="Options__Shop">
          <div className="dropdown">
            <button className="dropbtn">
            <NavLink to="/clothings">Shop</NavLink>
            </button>
            <div className="dropdown-content">
              <a href="/">Link 1</a>
              <a href="/">Link 2</a>
              <a href="/">Link 3</a>
              <a href="/">Link 4</a>
            </div>
          </div>
        </div>
        <div className="Options__Cart">
        <NavLink to="/cart">Cart</NavLink>
        </div>
        <div className="Options__Orders">
        <NavLink to="/user">My Orders</NavLink>
        </div>
        <div className="Options__Account">
        <NavLink to="/user">My Account</NavLink>
        </div>
        <div className="Options__Log">
        <NavLink onClick={props.loggedIn?logout:()=>{}} to={props.loggedIn?"logout":"login"}>{props.loggedIn?"Log out":"Log in"}</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default sideDrawer;

