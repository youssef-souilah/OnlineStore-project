import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const userLoging=createAsyncThunk(
    'users/loging',async (auth)=>{
        let res;
        try{
             res=await fetch("http://localhost:80/server/login",{
                method:'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(auth)
            })
            return  res.json()
        }
        catch (e){
            console.log(e);
        }
    }
)
export const register=createAsyncThunk(
    'users/register',async (auth)=>{
        let res
        try{
             res=await fetch("http://localhost:80/server/register",{
                method:'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body:auth
            })
            return  res.json();
        }
        catch (e){
            console.log(e);
        }
    }
)
const initialState={
    token:null,
    msg:null,
    err:null,
    loading:false
}
const userSlice=createSlice({
    name:"userSlice",
    initialState,
    reducers:{
        userLogout:(state,action)=>{
            state.token=null;
        },
        reset:(state,action)=>{
            userLogout();
            state.msg=null;
            state.err=null;
        }
    },
    extraReducers:builder=>{
        builder.addCase(userLoging.pending,(state,action)=>{
            state.loading=true;
        });
        builder.addCase(userLoging.fulfilled,(state,action)=>{
            state.loading=false;
            state.token=action.payload.token;
            if(action.payload.message!=="done"){
                state.msg=action.payload.message;
            }
            alert(action.payload.message)   
            
        });
        builder.addCase(userLoging.rejected,(state,action)=>{
            state.loading=false;
            state.err="some thing went wrong !"
        });
        //register
        builder.addCase(register.pending,(state,action)=>{
            state.loading=true;
            //  alert('loading')
        });
        builder.addCase(register.fulfilled,(state,action)=>{
            state.loading=false;
            state.token=action.payload.token;
            alert('ttttt')
            if(action.payload.message!=="done"){
                state.msg=action.payload.message;
            }
        });
        builder.addCase(register.rejected,(state,action)=>{
            state.loading=false;
            state.err="some thing went wrong !";
            alert('errrroooor')
        });
    }
});

export const {
    userLogout,
    reset
  } = userSlice.actions
  
  export default userSlice.reducer