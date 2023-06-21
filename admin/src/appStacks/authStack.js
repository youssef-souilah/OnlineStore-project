import Login from "../pages/login/Login";
import {BrowserRouter, Route, Routes } from "react-router-dom";
const AuthStack=()=>{
    
    return(
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Login/>} />
                <Route path={"*"} element={<Login/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default AuthStack;