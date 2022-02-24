import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";



function App( props: any) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path={"/profile"} element={<Profile obj={props.obj}/>}/>
                        <Route path={"/dialogs"} element={<Dialogs/>}/>
                        <Route path={"/news"}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
