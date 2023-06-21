import image from '../../images/empty-card.png';
import "./EmptyBasket.css";

const EmptyBasket=()=>{
    return(
        <div className="empty-basket">
            <h1>Your basket is empty</h1>
            <div className="empty-basket-image">
                <img src={image} alt="image1" />
            </div>
        </div>
    )
}
export default EmptyBasket ;