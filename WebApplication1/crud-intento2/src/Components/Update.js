import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

function Update() {
    const [id, setId] = useState(0);
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [company, setCompany] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setFullName(localStorage.getItem("fullName"));
    setPhoneNumber(localStorage.getItem("phoneNumber"));
    setAddress(localStorage.getItem("address"));
    setCompany(localStorage.getItem("company"));
  }, []);
  
  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Id...", id);
    axios.put(`https://localhost:44328/api/DCandidates1/${id}`,
    {
        fullName: fullName,
            phoneNumber: phoneNumber,
            address: address,
            company: company,
    }).then(() => {
        navigate("/read");
    });

    
  };

    return (<>
    
    <h2>Update</h2>
    <form>
  <div className="mb-3">
    <label htmlFor="fullName" className="form-label">Full Name</label>
    <input  className="form-control" 
    value= {fullName}
    onChange={(e) => setFullName(e.target.value)}
     id="fullName" aria-describedby="fullNameHelp" />
</div>
  <div className="mb-3">
    <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
    <input  
    value = {phoneNumber}
    className="form-control" id="phoneNumber" 
    onChange={(e) => setPhoneNumber(e.target.value)} 
    />
  </div>
  
  <div className="mb-3">
    <label htmlFor="address" className="form-label">Address</label>
    <input  className="form-control" id="address"  
    value = {address}
    onChange={(e) => setAddress(e.target.value)}
    />
  
    </div>
  
  <div className="mb-3">
    <label htmlFor="company" className="form-label">Company </label>
    <input  className="form-control" id="company" 
    value = {company}
    onChange={(e) => setCompany(e.target.value)} 
    />
  </div>
  <button type="submit" 
    onClick={handleUpdate}
   className="btn btn-primary mx-2">
    Update</button>

    <Link to ="/read">
    <button className = "btn btn-secondary mx-2">Back</button>
    </Link>
</form>
  </>
  )
}

export default Update