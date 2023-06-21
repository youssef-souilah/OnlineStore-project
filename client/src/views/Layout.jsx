import {Outlet}from "react-router-dom" ;
import Navbar from "../components/navbar/Navbar";
const Index=()=>{
    return(
        <div className="layout">
            <div>
                <Navbar/>
                <div className="layout-content">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}
export default Index ;
