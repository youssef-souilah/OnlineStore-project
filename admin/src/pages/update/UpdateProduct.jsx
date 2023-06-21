import "./update.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getCategories} from '../../redux/categorySlice'


const UpdateProduct = ({pageType ,inputs, title }) => {
  const [files, setFile] = useState("");
  const [formData, setFormData] = useState(null);
  const token=useSelector(state=>state.auth.token);
  const list=useSelector(state=>state.category.list);
  const [loading,setLoading]=useState(true);
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getCategories({token}));
    if(list){
      setLoading(false);
    }
  },[loading,list,token])
  useEffect(()=>{
    const form=document.getElementById("form");
    setFormData(form);
    
  });
  const hundleSubmit=async()=>{
    //console.log(formData);
    const data=new FormData(formData);
    await fetch("http://localhost:80/server/products/add ",{
                
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
                    files
                      ? URL.createObjectURL(files[0]) 
                      : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" 
                }
                alt=""
              />
            </div>
          <div className="right">
            <form  onSubmit={()=>hundleSubmit() }id="form" encType="multipart/form-data">
              <div className="formInput">
                <label htmlFor="photos_list">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                    <input
                      type="file"
                      id="photos_list"
                      onChange={(e) => setFile(e.target.files)}
                      name="photos_list"
                      multiple
                      style={{ display: "none" }}
                    />
              </div>
              <div className="formInput" >
                <label>Name</label>
                <input type="text"  placeholder="name " name="name" />
              </div>
              <div className="formInput" >
                <label>Category</label>
                <select name="category_id" id="category_id">
                  <option>--categories--</option>
                  {
                    list.map(item=><option key={item._id} value={item._id}>{item.name}</option>)
                  }
                </select>
              </div>
              <div className="formInput" >
                <label>Price</label>
                <input type="numbre"  placeholder="price "  name="price"/>
              </div>
              <div className="formInput" >
                <label>Stock</label>
                <input type="numbre"  placeholder="stock " name="stock" />
              </div>
              <div className="formInput" >
                <label>Description</label>
                <input type="text"  placeholder=" description " name="description" />
              </div>
              <button type="submit">send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
