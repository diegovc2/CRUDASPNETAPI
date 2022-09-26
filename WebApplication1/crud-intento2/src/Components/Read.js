import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

function Read() {

    const [data, setData] = useState([]);

    function getData(data) {
        var url;
        data===undefined || data ===''? url='https://localhost:44328/api/ItemMasters1/' : url = `https://localhost:44328/api/ItemMasters1/search/${data}`
        axios.get(url)
        .then((res) =>{
            console.log(res.data);
            setData(res.data);
        });
        

    }

    function handleDelete(id) {
      axios.delete(`https://localhost:44328/api/ItemMasters1/${id}`
      ).then(() => {
        getData();
      })
    }

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
 <div className='search'>
  
    <div className="input-group rounded">
  <input type="search" className="form-control rounded" onChange={(e) =>  getData(e.target.value)} placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
  <span className="input-group-text border-0" id="search-addon">
    <i className="fas fa-search"></i>
  </span>
</div>

  </div>
    <table className="table">
  <thead>
    <tr>
    <th scope ="col">itemCode</th>
      <th scope ="col">description</th>
      <th scope ="col">active</th>
      <th scope ="col">customerDescription</th>
      <th scope ="col">salesItem</th>
      <th scope ="col">stockItem</th>
      <th scope ="col">purchasedItem</th>
      <th scope ="col">barcode</th>
      <th scope ="col">manageItemBy</th>
      <th scope ="col">minimumInventory</th>
      <th scope ="col">maximumInventory</th>
      <th scope ="col">remarks</th>
      <th scope="col">imagePath</th>
    </tr>
  </thead>
  <tbody>
    {
      data.map((eachData) => {
        return(
          <>
            
    <tr key={eachData.itemCode}>
    <th scope='row' >{eachData.itemCode}</th>
      <td>{eachData.description}</td>
      <td>{eachData.active.toString()}</td>
      <td>{eachData.customerDescription}</td>
      <td>{eachData.salesItem.toString()}</td>
      <td>{eachData.stockItem.toString()}</td>
      <td>{eachData.purchasedItem.toString()}</td>
      <td>{eachData.barcode}</td>
      <td>{eachData.manageItemBy}</td>
      <td>{eachData.minimumInventory}</td>
      <td>{eachData.maximumInventory}</td>
      <td>{eachData.remarks}</td>
      <td>{eachData.imagePath}</td>
      <td>
          <Link to ="/update">
            <button className='btn btn-success'
            onClick={() => 
            setToLocalStorage(
              eachData.itemCode,
      eachData.description,
      eachData.active,
      eachData.customerDescription,
      eachData.salesItem,
      eachData.stockItem,
      eachData.purchasedItem,
      eachData.barcode,
      eachData.manageItemBy,
      eachData.minimumInventory,
      eachData.maximumInventory,
      eachData.remarks,
      eachData.imagePath
      )}>Edit</button>    
          </Link>
      </td>
      <td><button className='btn btn-danger' onClick = {() => handleDelete(eachData.itemCode)}>Delete</button></td>
    </tr>     
          </>
        )
      })
    }
  </tbody>
</table>
</>
  )
}

export default Read