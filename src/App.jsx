import React from "react";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="">
              <img
                src="../src/assets/Logo.png"
                className="w-auto h-auto overflow-hidden object-cover"
                alt="logo"
              />
              <SignIn />
            </div>
          }
        ></Route>
        <Route
          path="/signin"
          element={
            <div className="">
              <img
                src="../src/assets/Logo.png"
                className="w-auto h-auto overflow-hidden object-cover"
                alt="logo"
              />
              <SignIn />
            </div>
          }
        ></Route>
        <Route
          path="/signup"
          element={
            <div className="">
              <img
                src="../src/assets/Logo.png"
                className="w-auto h-auto overflow-hidden object-cover"
                alt="logo"
              />
              <SignUp />
            </div>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
