import { createSlice } from "@reduxjs/toolkit";


const localData=JSON.parse(localStorage.getItem('localstorage_2022_2023'));
const initialState={
    productList:localData||[]
}

const basketSlice=createSlice({
    name:"basket",
    initialState,
    reducers:{
        clear:(state,action)=>{
            localStorage.clear();
            state.productList=[];
        },
        removeOne:(state,action)=>{
            for(let i in state.productList ){
                if (state.productList[i].id===action.payload){
                    state.productList.splice(i,1);
                }
            }
            localStorage.setItem('localstorage_2022_2023',JSON.stringify(state.productList));
        },
        insertOne:(state,action)=>{
            if(action.payload ){
                let exist =false;
                for(let i of state.productList){
                    if(i.id === action.payload.id){
                        exist=true;
                        break;
                    }
                }
                if (!exist) {
                    state.productList.push({
                        id:action.payload.id,
                        name:action.payload.name,
                        image:action.payload.image,
                        price:action.payload.price,
                        count:1
                    });
                    localStorage.setItem('localstorage_2022_2023',JSON.stringify(state.productList));
                    alert('item added !');
                }
                else alert('already exist !');
            }
        },
        increaseCount:(state,action)=>{
            for(let i of state.productList ){
                if (i.id===action.payload){
                    const count=i.count
                    i.count=count+1;
                }
            }
            localStorage.setItem('localstorage_2022_2023',JSON.stringify(state.productList));
        },
        decreaseCount:(state,action)=>{
            for(let i of state.productList ){
                if (i.id===action.payload){
                    i.count-=1;
                }
            }
            localStorage.setItem('localstorage_2022_2023',JSON.stringify(state.productList));
        }
    }
});
export const  {increaseCount,decreaseCount,removeOne,clear,insertOne}= basketSlice.actions;
export default basketSlice.reducer;