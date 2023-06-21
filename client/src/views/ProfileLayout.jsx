import Navbar from "../components/Profile-NavBar/Navbar";
import CustomerInfos from "../components/customer-infos/CustomerInfos";
import CustomerOrder from "../components/customer-order/CustomerOrder";
import "../styles/ProfileLayout.css"
const ProfileLayout=()=>{
    return(
        <div className="profile-layout">
            <Navbar />
            <h1>Welcome {"SkySsef"} !</h1>
            <div className="customer-infos-side">
                <CustomerInfos />
                <div className="customer-order-list">
                    <h1>Your Orders</h1>
                    <CustomerOrder />
                </div>
            </div>
        </div>
    )
}
export default ProfileLayout;   