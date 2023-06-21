import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import CategoryData from "../../components/datatable/CategoryData"
import ProductData from "../../components/datatable/ProductData"
import UserData from "../../components/datatable/UserData"
import OrderData from "../../components/datatable/OrderData"

const List = ({pageType,title,data,columns,actions}) => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        {
          pageType==="category"?
          <CategoryData columns={columns }/>:
          pageType==="product"?
          <ProductData columns={columns } />:
          pageType==="order"?
          <OrderData columns={columns } />:
          pageType==="user"?
          <UserData columns={columns }/>:
          null
        }
      </div>
    </div>
  )
}

export default List