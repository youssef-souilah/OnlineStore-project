import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {getCategories,deleteCategory} from '../../redux/categorySlice';
import { useDispatch, useSelector } from 'react-redux';



const CategoryData = ({columns}) => {
  const {list}=useSelector((state)=>state.category);
  const [pgLoading,setLoading]=useState(true);
  const {token}=useSelector((state)=>state.auth)
  const dispatch=useDispatch()


  useEffect(()=>{
    const getData=async ()=>{
      await dispatch(getCategories({token}));
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
  
   const categoryActions = [
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
                dispatch(deleteCategory({token,id:params.row._id}));
                window.location.reload();
              }}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (  !pgLoading&&
      <div className="datatable">
        
          
            <div className="datatableTitle">
              Categories
              
                <Link to="/categories/new" className="link">
                  Add New
                </Link>
            
           </div>
        
        
        <DataGrid
          className="datagrid"
          rows={list}
          columns={columns.concat(categoryActions)}
          pageSize={9}
          rowsPerPageOptions={[9]}
          
        />  
      </div>
  );
}

export default CategoryData;
