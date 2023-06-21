import '../styles/Contact.css';
import {FaFacebook,FaLinkedinIn,FaInstagram}from 'react-icons/fa'
import image from '../images/contact-us.png'
const Contact_us=()=>{
    const setAlert=()=>{
        alert('Oops! this action not working now')
    }
    return(
        <div className='contact-page'>
            <div className='contact-content'>
                <img src={image} alt="" />
                <div>
                    <h1>Contact-Us</h1>
                    <form>
                        <div className='inputs'>
                            <label htmlFor="email">Email :</label>
                            <input type="email" id='email' placeholder='enter your email...' />
                        </div>
                        <div className='inputs'>
                            <label htmlFor="tel">Phone Number :</label>
                            <input type="number" id='tel' placeholder='enter your phone number...' />
                        </div>
                        <textarea name="massage" id="massage" cols="30" rows="10"  placeholder='Write your message here ...'></textarea><br />
                        <button type='button' onClick={()=>setAlert()}>Send</button
                        >
                        
                    </form>
                    <div>
                        <FaFacebook size={30} color="#2196F3" cursor="pointer"/>
                        <FaInstagram size={30} color="black" cursor="pointer"/>
                        <FaLinkedinIn size={30} color="#2196F3" cursor="pointer"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact_us