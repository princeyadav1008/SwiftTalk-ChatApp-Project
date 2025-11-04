import React, { useContext, useState } from "react";
import assets from "../assets/assets";
import { AuthContext } from "../../context/AuthContext";

const LoginPage = () => {
  const [currState, setCurrState] = useState("Sign up");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [isDataSubmitted, setIsDataSubmitted] = useState(false);

  const { login } = useContext(AuthContext);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (currState === "Sign up" && !isDataSubmitted) {
      setIsDataSubmitted(true);
      return;
    }

    login(currState === "Sign up" ? "signup" : "login", {
      fullName,
      email,
      password,
      bio,
    });
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center gap-8 sm:justify-evenly max-sm:flex-col">
      {/*-----Left-----*/}
      <img src={assets.logo_big} alt="" className="w-[min(30vw,250px)]" />

      {/*---Right----*/}

      <form
        onSubmit={onSubmitHandler}
        className="border border-slate-700 bg-slate-800/50 text-white p-6 flex flex-col gap-6 rounded-lg shadow-lg"
      >
        <h2 className="fond-medium text-2xl flex justify-between items-center">
          {currState}
          {isDataSubmitted && (
            <img
              onClick={() => setIsDataSubmitted(false)}
              src={assets.arrow_icon}
              alt=""
              className="w-5 cursor-pointer"
            />
          )}
        </h2>

        {currState === "Sign up" && !isDataSubmitted && (
          <input
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
            type="text"
            className="w-full p-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-white placeholder-slate-400"
            placeholder="Full Name"
            required
          />
        )}

        {!isDataSubmitted && (
          <>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Email Address"
              required
              className="w-full p-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-white placeholder-slate-400"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
              required
              className="w-full p-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-white placeholder-slate-400"
            />
          </>
        )}

        {currState === "Sign up" && isDataSubmitted && (
          <textarea
            onChange={(e) => setBio(e.target.value)}
            value={bio}
            rows={4}
            className="w-full p-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-white placeholder-slate-400"
            placeholder="Tell us about yourself..."
            required
          ></textarea>
        )}

        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg font-semibold hover:from-violet-700 hover:to-purple-700 transition-all duration-200"
        >
          {currState === "Sign up" ? "Create Account" : "Login Now"}
        </button>

        <div className="flex items-center gap-3 text-sm text-slate-400">
          <input
            type="checkbox"
            className="w-4 h-4 rounded border-slate-600 bg-slate-700/50 focus:ring-violet-500"
          />
          <p>Agree to the terms of use & privacy policy</p>
        </div>

        <div className="flex flex-col gap-2">
          {currState === "Sign up" ? (
            <p className="text-sm text-slate-400">
              Already have an account?{" "}
              <span
                onClick={() => {
                  setCurrState("Login");
                  setIsDataSubmitted(false);
                }}
                className="font-medium text-violet-400 hover:text-violet-300 cursor-pointer transition-colors"
              >
                Login here
              </span>
            </p>
          ) : (
            <p className="text-sm text-slate-400">
              Create an account{" "}
              <span
                onClick={() => setCurrState("Sign up")}
                className="font-medium text-violet-400 hover:text-violet-300 cursor-pointer transition-colors"
              >
                Click here
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
