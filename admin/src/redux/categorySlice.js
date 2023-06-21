import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCategories=createAsyncThunk(
    'categories/getCategories',async ({token})=>{
        let res
        try{
             res=await fetch("http://localhost:80/server/categories/",{
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
export const deleteCategory=createAsyncThunk(
    'product/deleteCategory',async ({token,id})=>{
        let res
        try{
             res=await fetch("http://localhost:80/server/categories/delete/"+id,{
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
export const getCategory=createAsyncThunk(
    'category/getCategory',async ({token,id})=>{
        let res
        try{
            res=await fetch(`http://localhost:80/server/categories/${id} `,{
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
    obj:null,
    msg:null,
    err:null,
    loading:false
}
const categorySlice=createSlice({
    name:"categorySlice",
    initialState,
    reducers:{},
    extraReducers:builder=>{
        //get
        builder.addCase(getCategories.pending,(state,action)=>{
            state.loading=true;
        });
        builder.addCase(getCategories.fulfilled,(state,action)=>{
            state.loading=false;
            state.msg=action.payload.massage;
            state.list=action.payload.data.categories;
                //console.log(action.payload.data )
        });
        builder.addCase(getCategories.rejected,(state,action)=>{
            state.loading=false;
            state.err="some thing went wrong !"
        });
        //delete
        builder.addCase(deleteCategory.pending,(state,action)=>{
            state.loading=true;
        });
        builder.addCase(deleteCategory.fulfilled,(state,action)=>{
            state.loading=false;
            state.msg=action.payload.massage;
        });
        builder.addCase(deleteCategory.rejected,(state,action)=>{
            state.loading=false;
            state.err="some thing went wrong !"
        });
        //getCategory
        builder.addCase(getCategory.pending,(state,action)=>{
            state.loading=true;
        });
        builder.addCase(getCategory.fulfilled,(state,action)=>{
            state.loading=false;
            state.msg=action.payload.massage;
            state.obj=action.payload.data.category;
        });
        builder.addCase(getCategory.rejected,(state,action)=>{
            state.loading=false;
            state.err="some thing went wrong !"
        });
    }
});


  
  export default categorySlice.reducer