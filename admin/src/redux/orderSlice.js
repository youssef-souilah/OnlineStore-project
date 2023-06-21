import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getOrders=createAsyncThunk(
    'orders/getOrders',async ({token})=>{
        let res
        try{
             res=await fetch("http://localhost:80/server/orders/",{
                method: 'GET',
                headers: {
                    "Centent-type":"multipart/form-data",
                    "authorization": `Bearer ${token}`
                },
            });
            return  res.json()
        }
        catch (e){
            return  res.json()
        }
    }
);

export const deleteOrder=createAsyncThunk(
    'product/deleteOrder',async ({token,id})=>{
        let res
        try{
             res=await fetch("http://localhost:80/server/orders/delete/"+id,{
                method: 'POST',
                headers: {
                    "Centent-type":"multipart/form-data",
                    "authorization": `Bearer ${token}`
                },
            });
            return  res.json()
        }
        catch (e){
            return  res.json()
        }
    }
);
export const approveOrder=createAsyncThunk(
    'product/approveOrder',async ({token,id})=>{
        let res
        try{
             res=await fetch("http://localhost:80/server/orders/approve/"+id,{
                method: 'POST',
                headers: {
                    "Centent-type":"multipart/form-data",
                    "authorization": `Bearer ${token}`
                },
            });
            return  res.json()
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
        //get
        builder.addCase(getOrders.pending,(state,action)=>{
            state.loading=true;
        });
        builder.addCase(getOrders.fulfilled,(state,action)=>{
            state.loading=false;
            state.msg=action.payload.massage;
            state.list=action.payload.data.orders;
        });
        builder.addCase(getOrders.rejected,(state,action)=>{
            state.loading=false;
            state.err="some thing went wrong !"
        });
        //delete
        builder.addCase(deleteOrder.pending,(state,action)=>{
            state.loading=true;
        });
        builder.addCase(deleteOrder.fulfilled,(state,action)=>{
            state.loading=false;
            state.msg=action.payload.massage;
        });
        builder.addCase(deleteOrder.rejected,(state,action)=>{
            state.loading=false;
            state.err="some thing went wrong !"
        });
        //approve
        builder.addCase(approveOrder.pending,(state,action)=>{
            state.loading=true;
        });
        builder.addCase(approveOrder.fulfilled,(state,action)=>{
            state.loading=false;
            state.msg=action.payload.massage;
        });
        builder.addCase(approveOrder.rejected,(state,action)=>{
            state.loading=false;
            state.err="some thing went wrong !"
        });
    }
});


  
  export default orderSlice.reducer