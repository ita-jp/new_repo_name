import React from 'react';
import {Container} from "react-bootstrap";
import Login from "./components/Login";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";

function App() {
    return (
        <Container className="p-3">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Routes>
            </BrowserRouter>
        </Container>
    );
}

export default App;
