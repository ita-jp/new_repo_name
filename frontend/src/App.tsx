import React from 'react';
import {Container} from "react-bootstrap";
import Login from "./components/Login";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import {AuthProvider} from "./contexts/AuthContext";
import Register from "./components/Register";
import Logout from "./components/Logout";

function App() {

    return (
        <AuthProvider>
            <Container className="p-3">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout/>}>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/register" element={<Register/>}/>
                            <Route path="/logout" element={<Logout/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </Container>
        </AuthProvider>
    );
}

export default App;

// TODO: WARNING in ./node_modules/@react-aria/ssr/dist/SSRProvider.mjs
// Module Warning (from ./node_modules/source-map-loader/dist/cjs.js):
// Failed to parse source map from '/Users/i/ghq/github.com/ita-jp/spring-react-integration-cookie/frontend/node_modules/@react-aria/ssr/dist/SSRProvider.mjs.map' file: Error: ENOENT: no such file or directory, open '/Users/i/ghq/github.com/ita-jp/spring-react-integration-cookie/frontend/node_modules/@react-aria/ssr/dist/SSRProvider.mjs.map'