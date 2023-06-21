import { useEffect, useState } from 'react';
import './FilterSort.css';
import { useNavigate } from 'react-router-dom';

const FilterSort=()=>{
    const navigation=useNavigate();
    const [options,setOptions]=useState({
        category:"",
        marque:"",
        price:""
    });
    const setOptionsValues=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        console.log(name);
        setOptions({...options,[name]:value});
    }
    
    return(
        <div className="filter-bar">
            <div>
                <select name="marque" id="" onChange={(e)=>setOptionsValues(e)} required>
                    <option value="">marque</option>
                    <option value="test">test</option>
                </select>
                <select name="category" id="" onChange={(e)=>setOptionsValues(e)} required>
                <option value="">category</option>
                    <option value="test">test</option>
                </select>
                <select name="price" id="" onChange={(e)=>setOptionsValues(e)} required>
                    <option value="">price</option>
                    <option value="1200">1200</option>
                </select>
            </div>
            <button onClick={()=>options.category===""||options.price==="" || options.marque===""? alert('please all the fields are required :') : navigation(`/shop/products?category=${options.category}&?marque=${options.marque}&?price=${options.price}`)}>
                Filter
            </button>
        </div>
    )
}
export default FilterSort;