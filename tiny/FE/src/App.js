import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, Home, Login, Signup } from "./components";
import { AuthProvider } from "./components/context/AuthProvider";
import { MainProvider } from "./components/context/MainProvider";
import { useState } from "react";

function App() {



  return (
    <BrowserRouter>
      <AuthProvider>
        <MainProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
          </Routes>
        </MainProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
