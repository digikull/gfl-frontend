import React, { useState } from "react";
import RegistrationCSS from "./RegistrationCSS.css";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import axios from "axios";
// import secureAxios from "../src/Config/secureAxios/secureAxios"

export default function CheckOTP(props) {
  const [inputotp, setOtp] = useState("");
  const [otpstatus, setOTPStatus] = useState(false);
  const [status, setStatus] = useState(false);
  const history = useHistory();

  let style = {
    error: {
      color: "red",
      marginTop: "10%",
      marginLeft: "25%",
    },
    label: {
      display: "inline",
      marginTop: "3%",
    },
    inputTag: {
      marginTop: "3%",
    },
  };

  const checkOtp = () => {
    axios({
      method: "GET",
      url: `http://127.0.0.1:8000/users/checkotp/${inputotp}`,
    })
      .then((res) => setStatus(res.data.status))
      .catch((e) => console.log(e));
    console.log("Status: ", status);

    if (status == true) {
      history.push("/Registration");
    } else {
      alert("Incorrect OTP");
    }
  };

  return (
    <div className="h-100 row align-items-center">
      <div className="col form-signin">
        <h1 className="h3 mb-3 fw-normal">Enter OTP</h1>

        <div className="form-floating">
          <input
            style={style.inputTag}
            type="text"
            name="otp"
            className="form-control"
            id="floatingInput"
            onChange={(e) => {
              setOtp(e.target.value);
            }}
            // {...register("OTP", { pattern: /^[0-9]{6}$/ })}
          />

          <label for="floatingInput">Enter Your OTP</label>
        </div>

        {/* <div style={{ marginTop: "5%" }}>
            {errors.OTP && <span style={style.error}>Enter 6 Digit OTP</span>}
          </div> */}

        <button
          style={style.inputTag}
          className="btn btn-lg btn-outline-primary  my-4 mx-5"
          onClick={() => {
            checkOtp();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
