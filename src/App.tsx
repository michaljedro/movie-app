import React, { useState } from "react";
import { Routes, Route } from "react-router";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";

function App() {
  const [show, setShow] = useState(false);
  return (
    <Routes>
      {show ? (
        <Route path="/" element={<HomePage />} />
      ) : (
        <Route path="/login" element={<LoginPage />} /> || (
          <Route path="/register" element={<RegisterPage />} />
        )
      )}
    </Routes>
  );
}

export default App;
