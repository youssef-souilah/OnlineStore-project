import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getProducts=createAsyncThunk(
    'products/getProducts',async ({token})=>{
        let res
        try{
             res=await fetch("http://localhost:80/server/products/",{
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
export const deleteProduct=createAsyncThunk(
    'product/deleteProduct',async ({token,id})=>{
        let res
        try{
             res=await fetch("http://localhost:80/server/products/delete/"+id,{
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
export const getProduct=createAsyncThunk(
    'product/getProduct',async ({token,id})=>{
        let res
        try{
            res=await fetch("hhttp://localhost:80/server/products/"+id,{
                method: 'GET',
                headers: {
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
const productSlice=createSlice({
    name:"productSlice",
    initialState,
    reducers:{},
    extraReducers:builder=>{
        //get
        builder.addCase(getProducts.pending,(state,action)=>{
            state.loading=true;
        });
        builder.addCase(getProducts.fulfilled,(state,action)=>{
            state.loading=false;
            state.msg=action.payload.massage;
            state.list=action.payload.data.products;
        });
        builder.addCase(getProducts.rejected,(state,action)=>{
            state.loading=false;
            state.err="some thing went wrong !"
        });
        //delete
        builder.addCase(deleteProduct.pending,(state,action)=>{
            state.loading=true;
        });
        builder.addCase(deleteProduct.fulfilled,(state,action)=>{
            state.loading=false;
            state.msg=action.payload.massage;
        });
        builder.addCase(deleteProduct.rejected,(state,action)=>{
            state.loading=false;
            state.err="some thing went wrong !"
        });
        //getProduct
        builder.addCase(getProduct.pending,(state,action)=>{
            state.loading=true;
        });
        builder.addCase(getProduct.fulfilled,(state,action)=>{
            state.loading=false;
            state.msg=action.payload.massage;
            state.list=action.payload.data.product;
        });
        builder.addCase(getProduct.rejected,(state,action)=>{
            state.loading=false;
            state.err="some thing went wrong !"
        });
    }
});

  export default productSlice.reducer