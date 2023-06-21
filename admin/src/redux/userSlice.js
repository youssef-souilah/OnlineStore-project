import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getUsers=createAsyncThunk(
    'users/getUsers',async ({token})=>{
        let res
        try{
             res=await fetch("http://localhost:80/server/users/",{
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
export const deleteUser=createAsyncThunk(
    'user/deleteUser',async ({token,id})=>{
        let res
        try{
             res=await fetch("http://localhost:80/server/users/delete/"+id,{
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
const userSlice=createSlice({
    name:"userSlice",
    initialState,
    reducers:{},
    extraReducers:builder=>{
        //get
        builder.addCase(getUsers.pending,(state,action)=>{
            state.loading=true;
        });
        builder.addCase(getUsers.fulfilled,(state,action)=>{
            state.loading=false;
            state.msg=action.payload.massage;
            state.list=action.payload.data.users;
        });
        builder.addCase(getUsers.rejected,(state,action)=>{
            state.loading=false;
            state.err="some thing went wrong !"
        });
        //delete
        builder.addCase(deleteUser.pending,(state,action)=>{
            state.loading=true;
        });
        builder.addCase(deleteUser.fulfilled,(state,action)=>{
            state.loading=false;
            state.msg=action.payload.massage;
        });
        builder.addCase(deleteUser.rejected,(state,action)=>{
            state.loading=false;
            state.err="some thing went wrong !"
        });
    }
});


  
  export default userSlice.reducer