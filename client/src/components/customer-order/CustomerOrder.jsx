import "./CustomerOrder.css";
import img from "../../images/cat1.png";

const CustomerOrder=()=>{
    return(
        <div className="customer-order">
            <div className="order-image">
                <img src={img} alt="" />
            </div>
            <div className="order-infos">
                <div className="primary-infos">
                    <h3>name</h3>
                    <h4>category</h4>
                    <p>5 items</p>
                    <p className="order-price">300$</p>
                </div>
                <div className="status-infos">
                <div className="order-status-proccess">
                        Proccessing
                    </div>
                    <div className="order-status-shiped">
                        Shiped
                    </div>
                    <div className="order-status-rejected">
                        Rejected
                    </div>
                </div>
            </div>
        </div>
    )

}
export default CustomerOrder;