"use client";

import React, { useState } from "react";
import { TextField } from "@material-ui/core";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [message, setMessage] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleEmailChange = (e: any) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError(!validateEmail(value));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (email && password) {
      if (
        email === "fatimaelboubakri00@gmail.com" &&
        password === "Azerty123"
      ) {
        setLoggedIn(true);
        setMessage("You are logged in");
      } else {
        setLoggedIn(false);
        setMessage("Email or password incorrect");
      }
    }
  };

  const validateEmail = (value: any) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  return (
    <div className="w-full max-w-xs">
      <h4 className="text-2xl font-bold dark:text-white text-center mb-2 text-blue-900">
        Login in
      </h4>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        {message && (
          <div
            className={
              loggedIn
                ? "text-center mb-2 text-green-500"
                : " text-center mb-2 text-red-600"
            }
          >
            {message}
          </div>
        )}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <TextField
            label="Email"
            variant="outlined"
            value={email}
            onChange={handleEmailChange}
            error={emailError}
            helperText={emailError && "Please enter a valid email"}
            type="email"
            id="email"
            placeholder="john.doe@company.com"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            required
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="******************"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
