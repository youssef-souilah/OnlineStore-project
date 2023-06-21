import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const addOrder=createAsyncThunk(
    'orders/addOrder',async ({token,data})=>{
        let res
        try{
             res=await axios.post("http://localhost/server/orders/add",data,{
                headers:{
                    "authorization":`Bearer ${token}`
                }
             });
            //console.log(data);
            return  res.data
        }
        catch (e){
            return  res.json()
        }
    }
);
const initialState={
    list:null,
    msg:null,
    err:null,
    loading:false
}
const orderSlice=createSlice({
    name:"orderSlice",
    initialState,
    reducers:{},
    extraReducers:builder=>{
        //Post
        builder.addCase(addOrder.pending,(state,action)=>{
            state.loading=true;
        });
        builder.addCase(addOrder.fulfilled,(state,action)=>{
            state.loading=false;
            state.msg=action.payload.massage;
        });
        builder.addCase(addOrder.rejected,(state,action)=>{
            state.loading=false;
            state.err="some thing went wrong !"
        });
        
    }
});


  
  export default orderSlice.reducer