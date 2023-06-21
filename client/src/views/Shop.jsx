import { Link    } from "react-router-dom";
import "../styles/Shop.css";
import Product from "../components/product/Product";
import { useEffect, useState } from "react";
import Loading from "../components/loading-page/Loading";

import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../redux/categorySlice";
import { searchProducts } from "../redux/productSlice";


const Shop=()=>{
    const [loading,setLoading]=useState(true);
    let  categoryList=useSelector(state=>state.category.list);
    let {list} =useSelector(state=>state.product);
    const dispatch=useDispatch();
    
    useEffect(()=>{
        const getData=async ()=>{
            await dispatch(getCategories());
            await dispatch(searchProducts({search:""}));
        }
        if(!list||!categoryList){
            setTimeout(()=>{
                getData();
            },2000);
        }
        else{
            setLoading(false);
        }
    },[loading,dispatch,categoryList,list]);
    return(
        <div className="shop">
            {
                loading?<Loading/>:categoryList.length>0?
                <div className="categories">
                    {
                        categoryList.map((item)=>{
                            
                            return(list.filter((prd)=>prd.category_id===item._id).length>0&&
                                <div className="show-category" key={item._id}>
                                    <div className="category-head">
                                        <h1>{item.name}</h1>
                                        <Link to={`/shop/products?category=${item.name}&&id=${item._id}`}>See all</Link>
                                    </div>
                                    <div className="show-category-products">
                                        {
                                            list.filter((prd)=>prd.category_id===item._id).slice(0,4)
                                            .map((i)=><Product key={i._id} id={i._id}  obj={i}/>)
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>:
                <h1 style={{marginLeft:"45%",marginTop:"20%"}}>Empty</h1>
            
            }
            
        </div>
    )
}
export default Shop;
