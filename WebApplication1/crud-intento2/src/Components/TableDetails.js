import * as React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Link } from "react-router-dom";

function Row(props, deleteFunc, editFunc) {

    
    const { row } = props;
  const [open, setOpen] = React.useState(false);


  

  


  





  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.itemCode}
        </TableCell>
        <TableCell align="right">{row.description}</TableCell>
        <TableCell align="right"><Link to ="/update">
            <button className='btn btn-success'
            onClick={() => 
            editFunc(row)}>Edit</button>    
          </Link></TableCell>
        <TableCell align="right">
        <button className='btn btn-danger' onClick = {() => deleteFunc(row.itemCode)}>Delete</button>
    </TableCell>
    </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                <TableRow>
                        <TableCell>active</TableCell>
                        <TableCell>customerDescription</TableCell>
                        <TableCell>salesItem</TableCell>
                        <TableCell>stockItem</TableCell>
                        <TableCell>purchasedItem</TableCell>
                        <TableCell>barcode</TableCell>
                        <TableCell>manageItemBy</TableCell>
                        <TableCell>minimumInventory</TableCell>
                        <TableCell>maximumInventory</TableCell>
                        <TableCell>remarks</TableCell>
                        <TableCell>imagePath</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                  
                    <TableRow key={row.itemCode}>
                      <TableCell component="th" scope="row">
                        {row.active.toString()}
                      </TableCell>
                      <TableCell>{row.customerDescription}</TableCell>
                      <TableCell align="right">{row.salesItem.toString()}</TableCell>
                      <TableCell align="right">{row.stockItem.toString()}</TableCell>
                      <TableCell align="right">{row.purchasedItem.toString()}</TableCell>
                      <TableCell align="right">{row.barcode}</TableCell>
                      <TableCell align="right">{row.manageItemBy}</TableCell>
                      <TableCell align="right">{row.minimumInventory}</TableCell>
                      <TableCell align="right">{row.maximumInventory}</TableCell>
                      <TableCell align="right">{row.remarks}</TableCell>
                      <TableCell align="right">{row.imagePath}</TableCell>
                    </TableRow>
                  
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CollapsibleTable() {

    const [data, setData] = useState([]);

    
    
    function pickRandom() {
        var randPick = data[Math.floor(Math.random() * data.length)];
        setToLocalStorage(randPick.itemCode,
                          randPick.description,
                          randPick.active,
                          randPick.customerDescription,
                          randPick.salesItem,
                          randPick.stockItem,
                          randPick.purchasedItem,
                          randPick.barcode,
                          randPick.manageItemBy,
                          randPick.minimumInventory,
                          randPick.maximumInventory,
                          randPick.remarks,
                          randPick.imagePath,
                          );
    }

    function handleDelete(id) {
        axios.delete(`https://localhost:44328/api/ItemMasters1/${id}`
        ).then(() => {
          getData();
        })
      }
    
    const setToLocalStorage = (itemCode,
        description,
        active,
        customerDescription,
        salesItem,
        stockItem,
        purchasedItem,
        barcode,
        manageItemBy,
        minimumInventory,
        maximumInventory,
        remarks,
        imagePath) => {
          localStorage.setItem("itemCode",itemCode);
        localStorage.setItem("description",description);
        localStorage.setItem("active",active);
        localStorage.setItem("customerDescription",customerDescription);
        localStorage.setItem("salesItem",salesItem);
        localStorage.setItem("stockItem",stockItem);
        localStorage.setItem("purchasedItem",purchasedItem);
        localStorage.setItem("barcode",barcode);
        localStorage.setItem("manageItemBy",manageItemBy);
        localStorage.setItem("minimumInventory",minimumInventory);
        localStorage.setItem("maximumInventory",maximumInventory);
        localStorage.setItem("remarks",remarks);
        localStorage.setItem("imagePath",imagePath);
      }
  
  


    function getData(data) {
        var url;
        data===undefined || data ===''? url='https://localhost:44328/api/ItemMasters1/' : url = `https://localhost:44328/api/ItemMasters1/search/${data}`
        axios.get(url)
        .then((res) =>{
            console.log(res.data);
            setData(res.data);
        });
        

    }

    

  useEffect(() => {
    getData();
  }, []);
  





    return (
        <>
        <div className='d-flex justify-content-between m-2'>
        <h2>Read Operation</h2>
        <Link to ="/">
        <button className = "btn btn-secondary">Create</button>
        </Link>
        <Link to ="/update">
                <button className='btn btn-success'
                onClick={() => 
                
                pickRandom()
                  
                }>Random Entry</button>    
              </Link>
     </div>
    
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Item Code</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Edit</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <Row key={row.itemCode} row={row} deleteFunc= {handleDelete} editFunc= {setToLocalStorage}  />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>

  );
}