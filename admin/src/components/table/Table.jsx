import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getUsers } from "../../redux/userSlice";

const List = () => {
  const {list}=useSelector((state)=>state.user);
  const [pgLoading,setLoading]=useState(true);

  const {token}=useSelector((state)=>state.auth)
  const dispatch=useDispatch()


  useEffect(()=>{
    const getData=async ()=>{
      await dispatch(getUsers({token}));
    }
    if(!list){
        setTimeout(()=>{
            getData();
        },2000);
    }
    else{
        setLoading(false);
    }
  },[list,pgLoading,dispatch]);
  return (!pgLoading&&
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">username</TableCell>
            <TableCell className="tableCell">email</TableCell>
            <TableCell className="tableCell">city</TableCell>
            <TableCell className="tableCell">address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">{row.username}</TableCell>
              <TableCell className="tableCell">{row.email}</TableCell>
              <TableCell className="tableCell">{row.city}</TableCell>
              <TableCell className="tableCell">{row.address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
