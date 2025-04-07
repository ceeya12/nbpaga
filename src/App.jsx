import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from "./components/nav/NavigationBar.jsx";
import Footer from "./components/footer/Footer.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
// import axios from "axios";
// import {useEffect} from "react";

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
                    <Route path="/nbpaga/" element={<HomePage />}></Route>
                    <Route path="/nbpaga/about-us" element={<AboutPage />}></Route>
                    <Route path="/nbpaga/schedule"></Route>
                    <Route path="/nbpaga/results"></Route>
                    <Route path="/nbpaga/board-of-directors" element={<BoardMembers />}></Route>
                    <Route path="/nbpaga/articles-of-regulations"></Route>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </div>);



}

export default App
