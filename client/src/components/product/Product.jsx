import { Link } from "react-router-dom";
import "./Product.css";
import {AiOutlinePlusCircle}from "react-icons/ai";
import load from "../../images/loading.gif";
import { useDispatch } from "react-redux";
import { insertOne } from "../../redux/basketSlice";
const Product=(props)=>{
    const dispatch=useDispatch();
    return(
        <div className="product-container">
            <div className="product-img">
                <img src={"http://localhost:80/server/images/"+props.obj.photos_list[0]} alt="" />
            </div>
            <h2>{props.obj.name}</h2>
            <p>{props.obj.description}</p>
            <div>{props.obj.price} $</div>
            <div className="product-options">
                <button><Link to={`/shop/products/${props.obj._id}`}>See Details</Link></button>
                <button onClick={()=>dispatch(insertOne({
                    id:props.obj._id,
                    name:props.obj.name,
                    image:props.obj.photos_list[0],
                    price:props.obj.price

                    }))}><AiOutlinePlusCircle size={25}/></button>
            </div>
        </div>
    )
}
export default Product;