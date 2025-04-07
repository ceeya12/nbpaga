import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from "./components/nav/NavigationBar.jsx";
import Footer from "./components/footer/Footer.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import axios from "axios";
import {useEffect} from "react";

//Pages
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx"
import BoardMembers from "./pages/BoardMembers.jsx";

function App() {

    return (
        <div>
            <NavigationBar/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/about-us" element={<AboutPage />}></Route>
                    <Route path="/schedule"></Route>
                    <Route path="/results"></Route>
                    <Route path="/board-of-directors" element={<BoardMembers />}></Route>
                    <Route path="/articles-of-regulations"></Route>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </div>);



}

export default App
