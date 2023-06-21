import './BasketItem.css';
import load from '../../images/loading.gif';
import { useDispatch } from 'react-redux';
import { increaseCount ,decreaseCount,removeOne } from '../../redux/basketSlice';
const BasketItem=(props)=>{
    const dispatch=useDispatch();
    return(
        <div className='basket-item'>
            <div className="basket-item-image">
                <img src={"http://localhost:80/server/images/"+props.item.image||load} alt="test" />
            </div>
            <div className="basket-item-infos">
                <div className='hhh-item'>
                    <h1>{props.item.name}</h1>
                    <h3>{props.item.category}</h3>
                    <div className='item-counter'>
                        <div className='decrease' onClick={()=>dispatch(decreaseCount(props.item.id))}>-</div>
                        <div className='count-value'>{props.item.count}</div>
                        <div className='increase' onClick={()=>dispatch(increaseCount(props.item.id))}>+</div>
                    </div>
                    <button onClick={()=>dispatch(removeOne(props.item.id))}>Remove</button>
                </div>
                <div className='item-price'>
                {props.item.price}$
                </div>
            </div>
        </div>
    )
}
export default BasketItem;