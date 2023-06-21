import { useEffect, useState } from "react";
import "../styles/CategoryProducts.css";
//import {BiFilter}from 'react-icons/bi'
import Product from "../components/product/Product";
import { useNavigate, useSearchParams } from "react-router-dom";
//import { Link } from "react-router-dom";
import Loading from "../components/loading-page/Loading";
//import FilterSort from "../components/filter-sort/FilterSort";
import { useDispatch, useSelector } from "react-redux";
import { searchProducts } from "../redux/productSlice";
const SearchProducts=()=>{
    //const [filterStatus,setFilterStatus]=useState(false); // coming soon 
    const navigation=useNavigate();
   
    var {list} =useSelector(state=>state.product);
    var [test]=useSearchParams();
    const search=test.get("search")||null;
    const [oldSearch,setOldSearch]=useState(null);
    const [loading,setLoading]=useState(true);
    const dispatch=useDispatch();

    useEffect(()=>{
        const getData=async ()=>{
            if(search) await dispatch(searchProducts({search}))
        }
        if(!list||oldSearch!==search){
            setTimeout(()=>{
                setOldSearch(search);
                setLoading(true);
                getData();
            },2000);
        }
        else{
            setLoading(false);
        }

            
        
    },[search,list,dispatch,loading,oldSearch]);

    useEffect(()=>{
        if(search==null  ){
            navigation('/shop')
        }
    },[search,navigation]);

    

    return(
    
        <div className="category-products-container">
            <div className="page-header">
                <div>"{search||"not found"}"</div>
                
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
                        list.length>0?
                        list.map((item)=>{
                            return(
                                <Product key={item._id} obj={item} />
                            );
                        }):
                        <h1 style={{color:"",
                            marginTop:50
                        }} 
                        >Not Found</h1>
                        
                    }
                </div>
            }
        </div>
    )
}
export default SearchProducts;