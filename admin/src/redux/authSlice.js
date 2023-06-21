import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const userLoging=createAsyncThunk(
    'users/loging',async (auth)=>{
        let res
        try{
             res=await fetch("http://localhost:80/server/login_admin",{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(auth)
            })
        
            return  res.json()
        }
        catch (e){
            return  res.json()
        }
        
    }

)
const initialState={
    token:null,
    msg:null,
    err:null,
    loading:false
}
const authSlice=createSlice({
    name:"authSlice",
    initialState,
    reducers:{
        userLogout:(state,action)=>{
            document.cookie = 'token=; Max-Age=-99999999;';
            state.token=null;
        },
        getToken:(state,action)=>{
            let token="none";
            const cookie=document.cookie;
            cookie.split(';').forEach(cookie=>{
                if(cookie.includes('token')){
                    token=cookie.split('=')[1]
                }
            });
            if(token!==null){
                state.token=token;
            }
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
            else document.cookie=`token=${action.payload.token};`;
            
        });
        builder.addCase(userLoging.rejected,(state,action)=>{
            state.loading=false;
            state.err="some thing went wrong !"
        });
    }
});

export const {
    userLogout,
    getToken,
    reset
  } = authSlice.actions
  
  export default authSlice.reducer