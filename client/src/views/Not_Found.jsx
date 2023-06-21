import { Link } from 'react-router-dom';
import image from'../images/page_err.png';
import {AiFillHome} from'react-icons/ai';
import "../styles/Not_Found.css";
const Not_Found=()=>{
    return(
        <div className="not-found-page">
            <div>
                <h1>Page Not Found</h1>
                <img src={image} alt="" />
                <Link to='/'><AiFillHome size={50} color="black"/></Link>
            </div>
        </div>
    )
}
export default Not_Found;