import "./Navbar.css";
import img from "../../images/cat1.png";
import { BiHomeAlt, BiMenuAltLeft, BiStore } from "react-icons/bi"
import { MdOutlineLocalGroceryStore } from "react-icons/md" ;
import { AiOutlinePoweroff } from "react-icons/ai" ;
import { Link } from "react-router-dom";
const Navbar=()=>{
    return(
        <div className="profile-navbar">
            <h1><BiMenuAltLeft color="white"/> WEBSITE</h1>
            <ul>
                <li><Link to="/">{<BiHomeAlt size={25}/>} <div>HOME</div></Link></li>
                <li><Link to="/shop">{<BiStore size={25}/>} <div>SHOP</div></Link></li>
                <li><Link to="/shop/basket">{<MdOutlineLocalGroceryStore size={25}/>} <div>BASKET</div></Link></li>
            </ul>
            <div className="other-links">
                <button style={{backgroundColor:"transparent",border:0,marginRight:10,cursor:"pointer"}}><AiOutlinePoweroff size={25} color="white" /></button>
                <div className="account-image">
                    <img src={img} alt="" />    
                </div>
            </div>
        </div>
    )
}
export default Navbar;