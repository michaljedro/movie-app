import React, { useState } from "react";
import { Routes, Route } from "react-router";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";

function App() {
  const [show, setShow] = useState(true);
  return (
    <Routes>
      {/* {show ? (
        <Route path="/" element={<HomePage />} />
      ) : (
        // <Route path="/register" element={<RegisterPage />} /> || (
        //   <Route path="/login" element={<LoginPage />} />
        // )
        <Route path="/login" element={<LoginPage />} /> || (
          <Route path="/register" element={<RegisterPage />} />
        )
      )} */}
      <Route path="/register" element={<RegisterPage />} />
      {/* <Route path="/login" element={<LoginPage />} /> */}
    </Routes>
  );
}

export default App;
