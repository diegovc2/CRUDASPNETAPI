import axios from 'axios';
import React, {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom';


const  Create = () => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [company, setCompany] = useState("");
  const history = useNavigate();

  const header = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Credentials': 'true'
  };
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
    axios.post(
        "https://localhost:44328/api/DCandidates1/",
        {   fullName: fullName,
            phoneNumber: phoneNumber,
            address: address,
            company: company,
        header,})
          
        .then(() =>{
          
          history("/read");
  
        })
      };

  return <>
   <div className='d-flex justify-content-between m-2'>
      <h2>Create</h2>
      <Link to ="/read">
      <button className = "btn btn-primary">Show Data</button>
      </Link>
   </div>
    <form>
  <div className="mb-3">
    <label htmlFor="fullName" className="form-label">Full Name</label>
    <input  className="form-control" onChange={(e) => setFullName(e.target.value)} id="fullName" aria-describedby="fullNameHelp" />
</div>
  <div className="mb-3">
    <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
    <input  className="form-control" id="phoneNumber" onChange={(e) => setPhoneNumber(e.target.value)} />
  </div>
  
  <div className="mb-3">
    <label htmlFor="address" className="form-label">Address</label>
    <input  className="form-control" id="address"  onChange={(e) => setAddress(e.target.value)}/>
  </div>
  
  <div className="mb-3">
    <label htmlFor="company" className="form-label">Company </label>
    <input  className="form-control" id="company" onChange={(e) => setCompany(e.target.value)} />
  </div>
  <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
</form>

</>
}

export default Create