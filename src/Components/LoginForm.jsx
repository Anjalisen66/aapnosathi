import React, { useState, useRef } from "react";
import axios from "axios";

export default function LoginForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [method, setMethod] = useState("password");
  const [password, setPassword] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const otpRefs = useRef([]);

  const handleOtpChange = (index, value) => {
    if (!isNaN(value) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < 5) {
        otpRefs.current[index + 1].focus();
      }
    }
  };

  const sendOtp = async () => {
    try {
      const res = await axios.post("http://localhost:5000/send-otp", { name });
      if (res.data.successMessage) {
        alert(res.data.successMessage);
        setOtpSent(true);
      } else {
        alert(res.data.errorMessage);
      }
    } catch (err) {
      alert("Server error.");
    }
  };

  const verifyOtp = async () => {
    try {
      const joinedOtp = otp.join("");
      const res = await axios.post("http://localhost:5000/verify-login-otp", {
        name,
        otp: joinedOtp,
      });

      if (res.data.successMessage) {
        alert(res.data.successMessage);
        window.location.href = res.data.redirect;
      } else {
        alert(res.data.errorMessage);
      }
    } catch (err) {
      alert("Server error.");
    }
  };

  const loginWithPassword = async () => {
    try {
      const res = await axios.post("http://localhost:5000/login", {
        name,
        password,
      });

      if (res.data.successMessage) {
        alert(res.data.successMessage);
        window.location.href = res.data.redirect;
      } else {
        alert(res.data.errorMessage);
      }
    } catch (err) {
      alert("Server error.");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-[90%] max-w-md space-y-4">
        <h2 className="text-2xl font-semibold text-center">Login</h2>
        <input
          className="w-full border px-4 py-2 rounded-md"
          type="text"
          placeholder="Username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="w-full border px-4 py-2 rounded-md"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="flex gap-4 my-2">
          <label>
            <input
              type="radio"
              name="loginMethod"
              value="password"
              checked={method === "password"}
              onChange={() => {
                setMethod("password");
                setOtpSent(false);
              }}
            />
            <span className="ml-2">Login with Password</span>
          </label>
          <label>
            <input
              type="radio"
              name="loginMethod"
              value="otp"
              checked={method === "otp"}
              onChange={() => {
                setMethod("otp");
                setOtpSent(false);
              }}
            />
            <span className="ml-2">Login with OTP</span>
          </label>
        </div>

        {method === "password" ? (
          <>
            <input
              className="w-full border px-4 py-2 rounded-md"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              onClick={loginWithPassword}
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
            >
              Login
            </button>
          </>
        ) : (
          <>
            {!otpSent ? (
              <button
                onClick={sendOtp}
                className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
              >
                Send OTP
              </button>
            ) : (
              <>
                <div className="flex justify-between gap-2">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      type="text"
                      className="w-10 h-10 border text-center rounded-md"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      ref={(ref) => (otpRefs.current[index] = ref)}
                    />
                  ))}
                </div>
                <button
                  onClick={verifyOtp}
                  className="w-full bg-blue-600 text-white py-2 mt-2 rounded-md hover:bg-blue-700"
                >
                  Verify OTP
                </button>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
