import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

function Read() {

    const [data, setData] = useState([]);

    function getData(data) {
        var url;
        data===undefined || data ===''? url='https://localhost:44328/api/DCandidates1/' : url = `https://localhost:44328/api/DCandidates1/search/${data}`
        axios.get(url)
        .then((res) =>{
            console.log(res.data);
            setData(res.data);
        });
        
        
    }

    function handleDelete(id) {
      axios.delete(`https://localhost:44328/api/DCandidates1/${id}`
      ).then(() => {
        getData();
      })
    }

    const setToLocalStorage = (id, fullName, phoneNumber, address, company) => {
      localStorage.setItem("id",id);
      localStorage.setItem("fullName",fullName);
      localStorage.setItem("phoneNumber", phoneNumber);
      localStorage.setItem("address",address);
      localStorage.setItem("company",company);
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
      <th scope="col">id</th>
      <th scope="col">Name</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Address</th>
      <th scope="col">Company</th>
    </tr>
  </thead>
  <tbody>
    {
      data.map((eachData) => {
        return(
          <>
            
    <tr>
      <th scope="row">{eachData.id}</th>
      <td>{eachData.fullName}</td>
      <td>{eachData.phoneNumber}</td>
      <td>{eachData.address}</td>
      <td>{eachData.company}</td>
      <td>
          <Link to ="/update">
            <button className='btn-success'
            onClick={() => 
            setToLocalStorage(
              eachData.id,
              eachData.fullName,
              eachData.phoneNumber,
              eachData.address,
              eachData.company,
            )}>Edit</button>    
          </Link>
      </td>
      <td><button className='btn-danger' onClick = {() => handleDelete(eachData.id)}>Delete</button></td>
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