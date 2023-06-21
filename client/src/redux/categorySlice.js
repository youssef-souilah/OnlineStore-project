import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCategories=createAsyncThunk(
    'categories/getCategories',async ()=>{
        let res
        try{
             res=await fetch("http://localhost/server/categories/",{
                method: 'GET',
                headers: {
                    "Centent-type":"multipart/form-data",              
                },
            });
            //console.log(res.json())
            return  res.json()
        }
        catch (e){
            return  res.json()
        }
    }
);

export const getCategory=createAsyncThunk(
    'category/getCategory',async ({id})=>{
        let res
        try{
            res=await fetch(`http://localhost/server/categories/${id} `,{
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
export const getCategoryProducts=createAsyncThunk(
    'category/getCategoryProducts',async ({id})=>{
        let res
        try{
            res=await fetch(`http://localhost/server/categories/${id}/products `,{
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
    obj:null,
    msg:null,
    err:null,
    catProducts:null,
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
            //console.log(state.list);
                //console.log(action.payload.data )
        });
        builder.addCase(getCategories.rejected,(state,action)=>{
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
        //getCategoryProducts
        builder.addCase(getCategoryProducts.pending,(state,action)=>{
            state.loading=true;
        });
        builder.addCase(getCategoryProducts.fulfilled,(state,action)=>{
            state.loading=false;
            state.msg=action.payload.massage;
            state.catProducts=action.payload.data.products;
        });
        builder.addCase(getCategoryProducts.rejected,(state,action)=>{
            state.loading=false;
            state.err="some thing went wrong !"
        });
    }
});


  
  export default categorySlice.reducer