import { useDispatch, useSelector } from 'react-redux';
import BasketItem from '../components/BasketItem/BasketItem';
import '../styles/Basket.css';
import { useEffect, useState } from 'react';
import EmptyBasket from '../components/empty-basket/EmptyBasket';
import Loading from '../components/loading-page/Loading';
import { addOrder } from '../redux/orderSlice';
import { useNavigate } from 'react-router-dom';
import { clear } from '../redux/basketSlice';

const Basket=()=>{
    const basket =useSelector(state=>state.basket.productList);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const [loading,setLoading]=useState(true);
    const [vals,setVals]=useState({
        price:0,
        count:0
    });
    const {token}=useSelector(state=>state.user)
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        },1000);
        
    },[]);

    useEffect(()=>{
        const getPrice=()=>{
            let price=0;
            let count=0;
            for (let i of basket){
                count+=i.count;
                price+=i.count*i.price;
            }
            setVals({...vals,price:price,count:count});
        }
        getPrice()
        //console.log(basket)
    },[basket])
    
    return(
        loading? <Loading/>:
        basket.length===0? <EmptyBasket/>:
        <div className='basket-page'>
            <div className="basket-items-container">
                <h1>Basket</h1>
                <hr />
                <div className="basket-items-list">
                    {
                        basket.map((itemObj)=><BasketItem key={itemObj.name}  item={itemObj} />)
                        
                    }
                </div>
            </div>
            <div className="amount-counter">
                <h1>Presentation</h1>
                <hr />
                <div>articles : <div>({vals.count})</div></div>
                <div> price : <div> {vals.price}$</div></div>
                    <hr />
                <div>total: <div> {vals.price} $</div> </div>
                    <button onClick={()=>{
                        if(token){
                            dispatch(addOrder({token,data:basket}));
                            dispatch(clear())
                        }
                        else{
                            navigate('/sign-in')
                        }
                    }}>send Order</button>
            </div>
        </div>
    )
}

export default Basket;