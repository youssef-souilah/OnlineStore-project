import { useEffect } from "react";
import AppStack from "./appStacks/appStack";
import AuthStack from "./appStacks/authStack";
import {useDispatch, useSelector} from 'react-redux'
import { getToken } from "./redux/authSlice";


function App() {
  const {token}=useSelector((state)=>state.auth);
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getToken());
  })
  return (
    <div className="app">
      {
        token===null || token==="none"? 
        <AuthStack />:
        <AppStack />
      }
    </div>
  );
}

export default App;
