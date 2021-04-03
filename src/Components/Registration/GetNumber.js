import React, { useState } from "react";
import { Link } from "react-router-dom";
import RegistrationCSS from "./RegistrationCSS.css";
import { useForm } from "react-hook-form";
import axios from "axios";
// import secureAxios from "../src/Config/secureAxios/secureAxios"

export default function GetNumber(props) {
  const [inputNumber, setInputNumber] = useState("");
  const [status, setStatus] = useState("");

  const SendOtp = () => {
    axios({
      method: "GET",
      url: `http://127.0.0.1:8000/users/sendotp/${inputNumber}`,
    })
      .then((res) => setStatus(res.data.status))
      .catch((e) => console.log(e));
    console.log("This is Input Number", inputNumber);
  };

  return (
    <div className="h-100 row align-items-center">
      <div className="col form-signin">
        <h1 className="h3 mb-3 fw-normal">Enter Mobile Number</h1>

        <div className="form-floating">
          <input
            type="text"
            name="Number"
            className="form-control"
            id="floatingInput"
            onChange={(e) => {
              setInputNumber(e.target.value);
            }}
            // {...register("Number", { pattern: /^[0-9]{10}$/ })}
          />

          <label for="floatingInput">Enter Your Mobile Number</label>
        </div>

        {/* <div style={{ marginTop: "5%" }}>
            {errors.Number && <span style={style.error}>Invalid Number</span>}
          </div> */}

        <Link to="/CheckOTP">
          <button
            className="btn btn-lg btn-outline-primary  my-4 mx-5"
            type="submit"
            onClick={() => {
              SendOtp();
            }}
          >
            Get OTP
          </button>
        </Link>
      </div>
    </div>
  );
}
