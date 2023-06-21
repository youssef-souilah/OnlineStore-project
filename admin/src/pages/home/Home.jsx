import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
// import Featured from "../../components/featured/Featured";
// import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import { useEffect, useState } from "react";
//import { Table } from "@mui/material";

const Home = () => {
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },2000)
  })
  return ( !loading&&
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="products" />
          <Widget type="categories" />
        </div>
        {/* <div className="charts">
          <Featured />
          <Chart title="Earning(Revenue)" aspect={2 / 1} />
        </div> */}
        <div className="listContainer">
          <div className="listTitle">users</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
