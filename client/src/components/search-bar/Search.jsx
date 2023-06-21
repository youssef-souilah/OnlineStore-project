import { useState } from "react";
import "./Search.css";
import {BiSearch} from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetList } from "../../redux/productSlice";
const Search=()=>{
    const [search,setSearch]=useState('');
    const navigation=useNavigate();
    const dispatch=useDispatch()
    const searchFor=()=>{
        if(search.trim()!==""){
            dispatch(resetList());
            setTimeout(()=>{
                //window.location.href=`/shop/products/search?search=${search}`;
                navigation(`/shop/products/search?search=${search}`);
            },[500])
            
        }
        else{
            navigation(`/shop`);
        }
    }
    return(
        <div className="search-bar">
            <input type="text" placeholder="Search..." name="searchValue" onChange={(e)=>setSearch(e.target.value)} />
            <button onClick={()=>searchFor()}>{<BiSearch size={25} />}</button>
        </div>
    )
}
export default Search ;