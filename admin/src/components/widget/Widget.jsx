import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { useEffect } from "react";
import {useSelector,useDispatch}from 'react-redux'
import { getUsers } from "../../redux/userSlice";
import { getOrders } from "../../redux/orderSlice";
import { getProducts } from "../../redux/productSlice";
import { getCategories } from "../../redux/categorySlice";
import { useState } from "react";


const Widget = ({ type }) => {

  const {token}=useSelector(state=>state.auth);
  const users=useSelector(state=>state.user.list);
  const orders=useSelector(state=>state.order.list);
  const products=useSelector(state=>state.product.list);
  const categories=useSelector(state=>state.category.list);
  const dispatch=useDispatch();
  const[loading,setLoading]=useState(true);
  let data;

  useEffect(()=>{
    if(token){
      dispatch(getUsers({token}));
      dispatch(getProducts({token}));
      dispatch(getOrders({token}));
      dispatch(getCategories({token}));
    }
  },[dispatch])
  useEffect(()=>{
    if(users&&products&&categories&&orders) setLoading(false);
  },[users,products,categories,orders,loading])
  //temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        count:users?users.length:amount,
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        count:orders?orders.length:amount,
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "products":
      data = {
        title: "PRODUCTS",
        isMoney: false,
        link: "View net earnings",
        count:products?products.length:amount,
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "categories":
      data = {
        title: "CATEGORIES",
        isMoney: false,
        link: "See details",
        count:categories?categories.length:amount,
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    !loading&&
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {data.count}
        </span>
        
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
