import React from "react";
import Player from "./Player.css";

function EditPlayer() {
  return (
    <div className="wrapper bg-white mt-sm-5">
      <h4 className="pb-4 border-bottom">Update MyProfile</h4>
      <div className="d-flex align-items-start py-3 border-bottom">
        <img
          src="https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          className="img"
          alt=""
        />
        <div className="pl-sm-4 pl-2 mx-3" id="img-section">
          <b>Profile Photo</b> <br></br>
          <button className="btn button border">
            <b>Upload</b>
          </button>
        </div>
      </div>
      <div className="py-2">
        <div className="row py-2">
          <div className="col-md-6">
            {" "}
            <label htmlFor="firstname">First Name</label>{" "}
            <input
              type="text"
              className="bg-light form-control"
              placeholder="Sachin"
            />{" "}
          </div>
          <div className="col-md-6 pt-md-0 pt-3">
            {" "}
            <label htmlFor="lastname">Last Name</label>{" "}
            <input
              type="text"
              className="bg-light form-control"
              placeholder="Tendulkar"
            />{" "}
          </div>
        </div>
        <div className="row py-2">
          <div className="col-md-6">
            {" "}
            <label htmlFor="email">Email Address</label>{" "}
            <input
              type="text"
              className="bg-light form-control"
              placeholder="sachin@tendulkar.com"
            />{" "}
          </div>
          <div className="col-md-6 pt-md-0 pt-3">
            {" "}
            <label htmlFor="phone">Phone Number</label>{" "}
            <input
              type="tel"
              className="bg-light form-control"
              placeholder="+91 9123235601"
            />{" "}
          </div>
        </div>
        <div className="row py-2">
          <div className="col-md-6">
            {" "}
            <label htmlFor="expertise">Expertise</label>{" "}
            <select name="country" id="country" className="bg-light">
              <option value="allrounder" defaultValue>
                All Rounder
              </option>
              <option value="bowler">Bowler</option>
              <option value="batsman">Batsman</option>
              
            </select>{" "}
          </div>
          <div className="col-md-6 pt-md-0 pt-3" id="lang">
            {" "}
            <label htmlFor="language">City</label>
            <div className="arrow">
              <input
                type="text"
                className="bg-light form-control"
                placeholder="Mumbai"
              />
            </div>
          </div>
        </div>
        <div className="py-3 pb-4 border-bottom">
          {" "}
          <button className="btn btn-primary mr-3">Save Changes</button>{" "}
          <button className="btn border button">Cancel</button>{" "}
        </div>
      </div>
    </div>
  );
}

export default EditPlayer;
