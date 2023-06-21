import { useEffect, useState } from "react";
import "../styles/CategoryProducts.css";
//import {BiFilter}from 'react-icons/bi'
import Product from "../components/product/Product";
import { useNavigate, useSearchParams } from "react-router-dom";
//import { Link } from "react-router-dom";
import Loading from "../components/loading-page/Loading";
//import FilterSort from "../components/filter-sort/FilterSort";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryProducts } from "../redux/categorySlice";
const CategoryProducts=()=>{
    //const [filterStatus,setFilterStatus]=useState(false); // coming soon 
    const navigation=useNavigate();
    const {catProducts} =useSelector(state=>state.category);
    var [test]=useSearchParams();
    const category=test.get("category")||null;
    // const price=test.get("price")||null;
    // const brand=test.get("marque")||null;
    const catId=test.get("id")||null;
    const dispatch=useDispatch();
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        const getData=async ()=>{
            dispatch(getCategoryProducts({id:catId}));
        }
        console.log(catProducts)
        if(!catProducts){
            setTimeout(()=>{
                getData();
            },2000);
        }
        
        else{
            setLoading(false);
        }
    },[loading,dispatch,catProducts,catId]);

    useEffect(()=>{
        //console.table(search,category,price);
        if( category==null ){
            navigation('/shop')
        }
    },[category,navigation]);

    // useEffect(()=>{
    //     const arrow =document.getElementById('arrow');
    //     if (filterStatus) arrow.style.transform=`rotate(-90deg)`;
    //     else arrow.style.transform=`rotate(90deg)`;
    // },[filterStatus]);

    return(
    
        <div className="category-products-container">
            <div className="page-header">
                <div>{category||"not found"}</div>
                
                {/* coming soon ! */}
                {/* <button onClick={()=>setFilterStatus(!filterStatus)} >{<BiFilter size={25}/>}Filter <div id="arrow">{">"}</div></button> */}
                <div></div>
            </div>
            {/* { //coming soon
                filterStatus?  
                <FilterSort filterStatus={filterStatus} />: null
            } */}
            {
                loading?<Loading/>:
                <div className="products-list">
                    {
                        catProducts.map((item)=>{
                            return(
                                <Product key={item._id} obj={item} />
                            );
                        })
                        
                    }
                </div>
            }
        </div>
    )
}
export default CategoryProducts;