import { useDispatch } from 'react-redux';
import '../styles/sign-up.css';
import { useEffect, useState } from 'react';
import { register } from '../redux/userSlice';

const SignUp=()=>{
    const [formData,setFormData]=useState();
    const dispatch=useDispatch();

    useEffect(()=>{
        const form=document.getElementById("form");
        setFormData(form);
    },[formData]);
    const hundleSubmit=async()=>{
    const data=new FormData(formData);
    await fetch("http://localhost:80/server/register",{
                method: 'POST',
                headers: {
                    "Centent-type":"multipart/form-data",
                },
                body: data
            }).then((res)=>{
                console.log(res.json())
            })  
    }
    return(
        <div className='sign-up-page'>
            <div className="form-sign-up">
                <h1>Sign Up</h1>
                <a href="/sign-in">Sign-In</a>
                <form id='form' onSubmit={()=>hundleSubmit() }>
                    <div className='display-flex'>
                        <div className='form-sign-up-left'>
                            <label htmlFor="first_name">first name</label>
                            <input type="text" id="first_name" placeholder='enter your first name' name='first_name' />
                            <label htmlFor="last_name">last name</label>
                            <input type="text" id="last_name" placeholder='enter your last name' name='last_name'  />
                            <label htmlFor="city">city</label>
                            <input type="text" id="city" placeholder='enter your city' name='city' />
                            <label htmlFor="address">address</label>
                            <input type="text" id="address" placeholder='enter your address' name='address' />
                            <input type="hidden" value={false} name='is_admin'/>
                        </div>
                        <div>
                            <label htmlFor="address">postal code</label>
                            <input type="text" id="postal_code" placeholder='enter your postal code' name='postal_code'  />
                            <label htmlFor="email">email</label>
                            <input type="email" id="email" placeholder='enter your email'  name='email' />
                            <label htmlFor="username">username</label>
                            <input type="text" id="username" placeholder='enter your username ' name='username' />
                            <label htmlFor="pass">Password</label>
                            <input type="password" id='pass' placeholder='enter your password' name='password' />
                        </div>
                    </div>
                    <button type='submit' >Done</button>     
                </form>
            </div>
        </div>

    )
}
export default SignUp