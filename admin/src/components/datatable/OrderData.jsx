import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {getOrders,deleteOrder, approveOrder} from '../../redux/orderSlice';
import { useDispatch, useSelector } from 'react-redux';



const OrderData = ({columns}) => {
  const {list}=useSelector((state)=>state.order);
  const [pgLoading,setLoading]=useState(true);
  const {token}=useSelector((state)=>state.auth)
  const dispatch=useDispatch()


  useEffect(()=>{
    const getData=async ()=>{
      await dispatch(getOrders({token}));
    }
    if(!list){
        setTimeout(()=>{
            getData();
        },2000);
    }
    else{
        setLoading(false);
    }
  },[list,pgLoading,dispatch]);
  
   const productActions = [
    {
      field: "action",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div
              className="deleteButton"
              onClick={() => {
                dispatch(deleteOrder({token,id:params.row._id}))
                window.location.reload();
              }}
            >
              Delete
            </div>
            {
              params.row.status==="proccessing"&&
              <div 
                className="updateButton"
                onClick={() => {
                  dispatch(approveOrder({token,id:params.row._id}))
                  window.location.reload();
                }}
                
              >
                approve
              </div>
            }
          </div>
        );
      },
    },
  ];

  return (  !pgLoading&&
      <div className="datatable">
        
          
            <div className="datatableTitle">
              Orders
            
           </div>
        
        
        <DataGrid
          className="datagrid"
          rows={list}
          columns={columns.concat(productActions)}
          pageSize={9}
          rowsPerPageOptions={[9]}
          
        />  
      </div>
  );
}

export default OrderData;
