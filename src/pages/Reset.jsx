import React, { useState } from "react";
import { sendPasswordReset } from "../firebase";
import { NavLink } from "react-router-dom";

const Reset = () => {
  const [email, setEmail] = useState("");
  return (
    
      <div className="flex flex-col p-4 justify-center items-center">
        <h1 className="text-3xl my-2">Reset Your Password</h1>
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=" Enter email address"
            className="mx-2 my-2 p-1 border border-gray-400 rounded-sm"
          />
          <button className="bg-black text-white p-1 rounded-md m-auto "  onClick={() => sendPasswordReset(email)}>
            Send Password Reset Email
          </button>
        </div>
        <p>
     
          Don't you have an account ?
          <NavLink to="/register" className="underline">
            Register
          </NavLink>
        </p>
      </div>
   
  );
};

export default Reset;
