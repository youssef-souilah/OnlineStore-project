import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState } from "react";
const NewUser = ({pageType ,inputs, title }) => {
  const [file,setFile]=useState(null);
  const [formData, setFormData] = useState(null);
  useEffect(()=>{
    const form=document.getElementById("form");
    setFormData(form);
  },[formData]);
  const hundleSubmit=async()=>{
    const data=new FormData(formData);
    await fetch("http://localhost:80/server/register ",{
                
                method: 'POST',
                headers: {
                    "Centent-type":"multipart/form-data",
                    "authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MDhiNDBmMTc1OWQ3Zjk4ZTAxODc3YyIsImlzX2FkbWluIjp0cnVlLCJpYXQiOjE2Nzg4MTE3MjZ9.2QcSppXL5TbJc_8Wy9sma1Syi0Mc94C6R9TlUcLMKKE`
                },
                body: data
            }).then((res)=>{
              console.log(res.json())
            })  
  }
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
              <img
                src={
                    file
                      ? URL.createObjectURL(file) 
                      : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                }
                alt=""
              />
            </div>
          <div className="right">
            <form onSubmit={()=>hundleSubmit() }id="form">
              <div className="formInput">
                <label htmlFor="profile">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                    <input
                      type="file"
                      id="profile"
                      onChange={(e) => setFile(e.target.files[0])}
                      name="profile"
                      style={{ display: "none" }}
                    />
              </div>
              <div className="formInput" >
                <label>Username</label>
                <input type="text"  placeholder="Username " name="username" />
              </div>
              <div className="formInput" >
                <label>First Name</label>
                <input type="text"  placeholder="Username " name="first_name"/>
              </div>
              <div className="formInput" >
                <label>Last Name</label>
                <input type="text"  placeholder="Username "  name="last_name"/>
              </div>
              <div className="formInput" >
                <label>Email</label>
                <input type="email"  placeholder="Email " name="email" />
              </div>
              <div className="formInput" >
                <label>Password</label>
                <input type="password"  placeholder=" ******* " name="password" />
              </div>
              <div className="formInput" >
                <label>City</label>
                <input type="text"  placeholder="city" name="city" />
              </div>
              <div className="formInput" >
                <label>Postal Code</label>
                <input type="text"  placeholder="Postal Code " name="postal_code" />
              </div>
              <div className="formInput" >
                <label>Address</label>
                <input type="text"  placeholder="Address" name="address" />
              </div>
              <div className="formInput" >
                <label>Role</label>
                <select name="is_admin" id="is_admin">
                  <option value={true}>Admin</option>
                  <option value={false}>Customer</option>
                </select>
              </div>
              <button type="submit">send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewUser;
