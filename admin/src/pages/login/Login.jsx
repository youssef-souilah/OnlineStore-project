import { useDispatch, useSelector } from "react-redux";
import "./login.scss";
import { reset, userLoging } from "../../redux/authSlice";
import { useEffect, useState } from "react";
import {HiOutlineMail,HiLockClosed} from "react-icons/hi"
import Swal from 'sweetalert2'

const Login = () => {
  const {msg,err}=useSelector((state)=>state.auth);
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const dispatch=useDispatch();
  useEffect(()=>{
    if(err){
      Swal.fire({
        title: 'Oops',
        text: 'some thing went wrong , try later',
        icon: 'error',
        confirmButtonText: 'done'
      })
    }
  })
  return (
    <section>
        <div className="form-box">
            <div className="form-value">
                <>
                  {
                    msg&&
                    <h3 style={{color:"red",padding:15,backgroundColor:"white",borderRadius:20,textAlign:"center"}}>{msg }</h3>
                  }
                  
                    
                    <h2>Login</h2>
                    <div className="inputbox">
                        <HiOutlineMail color="#fff" size={30} />
                        <input type="email" required  onChange={(e)=>setEmail(e.target.value)}/>
                        <label htmlFor="">Email</label>
                    </div>
                    <div className="inputbox">
                        <HiLockClosed color="#fff" size={30}/>
                        <input type="password" required onChange={(e)=>setPassword(e.target.value)}/>
                        <label htmlFor="">Password</label>
                    </div>
                    <button onClick={()=>{
                      dispatch(reset());
                      dispatch(userLoging({email,password}))}
                      }>Log in</button>
                </>
            </div>
            
        </div>
    </section>
    
  )
}

export default Login