import '../styles/sign-up.css';
import { useDispatch, useSelector } from "react-redux";
import image from '../images/login.png'
import { useEffect, useState } from 'react';
import { userLoging } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';

const SignIn=()=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const {token}=useSelector(state=>state.user)
    const dispatch=useDispatch();
    const navigate=useNavigate()
    useEffect(()=>{
        if(token){
            navigate('/');
        }
        
    })
    return(
        <div className='sign-in-page'>
            <div className="form-sign-in">
                <img src={image} alt="" />
                <form>
                    <h1>Sign In</h1>
                    <label htmlFor="email">email</label>
                    <input type="email" id="email" placeholder='enter your email' name='email' onChange={(e)=>setEmail(e.target.value)}/>
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' placeholder='enter your password' name='password' onChange={(e)=>setPassword(e.target.value)}/>
                    <button type='button' onClick={()=>dispatch(userLoging({password,email}))}>Done</button>
                    <a href="/sign-up">Sign-Up</a>
                </form>
            </div>
        </div>
    )
}
export default SignIn