import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const searchProducts=createAsyncThunk(
    'products/searchProducts',async ({search})=>{
        let res
        try{
             res=await fetch(`http://localhost:80/server/products?search=${search}`,{
                method: 'GET',
                headers: {
                    "Centent-type":"multipart/form-data",
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
    'product/getProduct',async ({id})=>{
        let res
        try{
            res=await fetch("http://localhost:80/server/products/"+id,{
                method: 'GET',
                headers: {
                    "Centent-type":"multipart/form-data",
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
    obj:null,
    err:null,
    loading:false
}
const productSlice=createSlice({
    name:"productSlice",
    initialState,
    reducers:{
        resetList:(state,payload)=>{
            state.list=[]
        },
        resetObj:(state,payload)=>{
            state.obj=null;
        }
    },
    extraReducers:builder=>{
        //search Products
        builder.addCase(searchProducts.pending,(state,action)=>{
            state.loading=true;
        });
        builder.addCase(searchProducts.fulfilled,(state,action)=>{
            state.loading=false;
            state.msg=action.payload.massage;
            state.list=action.payload.data.products;
        });
        builder.addCase(searchProducts.rejected,(state,action)=>{
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
            state.obj=action.payload.data.product;
        });
        builder.addCase(getProduct.rejected,(state,action)=>{
            state.loading=false;
            state.err="some thing went wrong !"
        });
    }
});

export const {resetList,resetObj} =productSlice.actions
  export default productSlice.reducer