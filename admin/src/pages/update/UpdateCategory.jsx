import "./update.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../redux/categorySlice";


const UpdateCategory = ({pageType ,inputs, title }) => {
  const {categoryId}=useParams();
  const {obj}=useSelector(state=>state.category);
  const {token}=useSelector(state=>state.auth);
  const [loading,setLoading]=useState(true);
  const [file, setFile] = useState("");
  const [name, setName] = useState("");
  const [formData, setFormData] = useState(null);
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getCategory({token,id:categoryId}));
    if(obj) setLoading(false);
   
  },[obj])
  useEffect(()=>{
    const form=document.getElementById("form");
    setFormData(form);
  });
  const hundleSubmit=async()=>{
    const data=new FormData(formData);
    await fetch("http://localhost:80/server/categories/add ",{
                
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
  return ( !loading&&
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
                      : obj.photo
                }
                alt=""
              />
            </div>
          <div className="right">
            <form onSubmit={()=>hundleSubmit() }id="form">
              <div className="formInput">
                <label htmlFor="photo">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                    <input
                      type="file"
                      id="photo"
                      onChange={(e) => setFile(e.target.files[0])}
                      name="photo"
                      style={{ display: "none" }}
                    />
              </div>
              <div className="formInput" >
                <label>Name</label>
                <input type="text" onChange={(e)=>setName(prompt("enter new name "))}  placeholder="name " name="name" value={name?name:obj.name} />
              </div>
              <button type="submit">send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateCategory;
