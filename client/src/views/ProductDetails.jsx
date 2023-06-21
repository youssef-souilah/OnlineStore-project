import "../styles/ProductDetails.css";
import load from "../images/loading.gif";
import Product from "../components/product/Product";
import { useParams } from "react-router-dom";
import { useEffect, useState,  } from "react";
import Loading from "../components/loading-page/Loading";
import { useDispatch, useSelector } from "react-redux";
import { insertOne } from "../redux/basketSlice";
import { getProduct } from "../redux/productSlice";
import { getCategoryProducts } from "../redux/categorySlice";
const ProductDetails=()=>{
    const {id}=useParams();
    const  product=useSelector(state=>state.product.obj);
    const  {catProducts}=useSelector(state=>state.category);
    const  [loading,setLoading]=useState(true);
    let [oldId,setOldId]=useState(null);
    const dispatch=useDispatch();


    useEffect(()=>{
        const getData=async ()=>{
            await dispatch(getProduct({id}))
            if(product) await dispatch(getCategoryProducts({id:product.category_id}));   
        }
        
        if(!catProducts||oldId!==id){
            setLoading(true);
            setTimeout(()=>{
                setLoading(true);
                setOldId(id);
                getData();
            },2000);
        }
        else{
            if(product&&catProducts)setLoading(false);
            
        }
        
        
    },[loading,catProducts,product,dispatch,id,oldId]);
    return(
        loading?<Loading />:
        <div className="product-details-container">
            <div className="product-intro">
                <div className="item-wrapper">
                    <div className="product-intro-image">
                        <img src={"http://localhost:80/server/images/"+product.photos_list[0]} alt="" />
                    </div>
                    <div>
                        <h1>{product.name}</h1>
                        <button  onClick={()=>dispatch(insertOne({
                            id:product.id,
                            name:product.name,
                            image:product.photos_list[0],
                            price:product.price
                            }))}>Add to basket</button>
                        <div className="product-infos">
                            <div>
                                <span>Price</span>
                                {product.price} DH
                            </div>
                            <div>
                                <span>Stock</span>
                                {product.stock}
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="product-details-div">
                <div className="product-images">
                    <h3>Images</h3>
                    <hr />
                    <div className="product-images-list">
                        {
                            product.photos_list.map((item)=><div key={item} ><img  src={"http://localhost:80/server/images/"+item}alt="" /></div>)
                        }
                    </div>
                </div>
                <div className="product-description">
                    <h3>Description</h3>
                    <hr />
                    <p>
                    {product.description}
                    </p>
                </div>
                {
                    catProducts.length>0 &&
                    <div className="similar-products">
                        <div className="div-header">
                            <h3>Similar Products</h3>
                        </div>
                        <hr />
                        <div className="product-similar">
                            {
                                catProducts.slice(0,4).map((item)=>{
                                    return <Product key={item._id} obj={item} _id={item._id} />
                                })
                            }
                        </div>
                    </div>  
                }
                
            </div>
        </div>
    )
}
export default ProductDetails;