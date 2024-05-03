import React, {createContext, useState} from 'react';
import {Container} from "react-bootstrap";
import Login from "./components/Login";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import {AuthProvider} from "./contexts/AuthContext";

function App() {

    return (
        <AuthProvider>
            <Container className="p-3">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout/>}>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/login" element={<Login/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </Container>
        </AuthProvider>
    );
}

export default App;
