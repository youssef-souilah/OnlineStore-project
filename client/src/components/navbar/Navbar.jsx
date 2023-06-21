import {BiMenuAltLeft,BiStore,BiHomeAlt,BiHeadphone} from "react-icons/bi";
import {CgLogIn,CgBell} from 'react-icons/cg';
import {MdOutlineLocalGroceryStore} from 'react-icons/md';
import "./Navbar.css";
import { Link } from "react-router-dom";
import Search from "../search-bar/Search";
import {useSelector} from 'react-redux';
const Navbar=()=>{
    const {token}=useSelector(state=>state.user);
    return(
        <nav>
            <div className="head-nav">
                <h1><BiMenuAltLeft color="black" /> ONLINE STORE</h1>
                <ul>
                    <li><Link to="/">{<BiHomeAlt size={25}/>} <div>HOME</div></Link></li>
                    <li><Link to="/shop">{<BiStore size={25}/>} <div>SHOP</div></Link></li>
                    <li><Link to="/shop/basket">{<MdOutlineLocalGroceryStore size={25}/>} <div>Basket</div></Link></li>
                    <li><Link to="/contact-us">{<BiHeadphone size={25}/>} <div>CONTACT</div></Link></li>
                </ul>
            </div>
            <div className="foot-nav">
                <Search />  
                <div className="foot-nav-div">
                    {
                        !token&&
                        <Link to='/sign-in'>
                            <CgLogIn size={25}/>
                            
                        </Link>
                    }
                    <div id="notifications" className="list-items" style={{display:"flex",cursor:"pointer" ,flexDirection:"column",alignItems:"center"}}>
                        <CgBell size={25}/>
                        
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;