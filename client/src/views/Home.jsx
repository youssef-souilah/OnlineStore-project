import { Link } from "react-router-dom";
import image from "../images/onlineShoping.png";

import "../styles/Home.css"
import { useEffect, useState } from "react";
import Loading from "../components/loading-page/Loading";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../redux/categorySlice";
const Home=()=>{
    //const [categories,setCategories]=useState([]);
    const [loading,setLoading]=useState(true);
    const {list}=useSelector(state=>state.category);
    const dispatch=useDispatch();
    useEffect(()=>{
        const getData=async ()=>{
            dispatch(getCategories()); 
        }
        if(!list){
            setTimeout(()=>{
                getData();
            },2000);
        }
        else{
            setLoading(false);
        }
    },[list,dispatch]);
    return(
        <div className="home">
            <div className="presentation">
                <div className="left-side">
                    <h1>Online Shopping</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quam id eligendi dolorum aut. Sint ex nostrum quis, 
                        eveniet maiores rerum veritatis possimus dolores officia at voluptates iusto deleniti qui.
                    </p>
                    <button>
                        <Link to='/shop'>Shop Now {"->"} </Link>
                    </button>
                </div>
                <img src={image} alt="image1" />
            </div>
            {
                loading?<Loading/>:
                <div className="over-view">
                    <h1>Categories</h1>
                    <div className="home-categories" width={`${window.screen.width-200}px`}>
                        {
                            list.map((item)=>{
                                return (
                                    <div key={item.id} className="home-category">
                                        <img src={"http://localhost:80/server/images/"+item.photo} alt="img" />
                                        <h1>{item.name}</h1>
                                        <button><Link to={`/shop/products?category=${item.name}&&id=${item._id}`}>Discover</Link></button>
                                    </div>
                                )
                            })
                        }
                    </div>
            </div>
            }
            
        </div>
    )
}
export default Home;