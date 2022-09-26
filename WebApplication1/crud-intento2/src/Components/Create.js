import axios from 'axios';
import React, {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom';


const  Create = () => {
  const [itemCode, setItemCode] = useState("");
  const [description, setDescription] = useState("");
  var [active, setActive] = useState("");
  const [customerDescription, setCustomerDescription] = useState("");
  var [salesItem, setSalesItem] = useState("");
  var [stockItem, setStockItem] = useState("");
  var [purchasedItem, setPurchasedItem] = useState("");
  var [barcode, setBarcode] = useState("");
  const enumItem = {
    None : 1,
    Serial : 2,
    Batch : 3
  };
  const [manageItemBy, setManageItemBy] = useState(0);
  const [minimumInventory, setMinimumInventory] = useState(0);
  const [maximumInventory, setMaximumInventory] = useState(0);
  const [remarks, setRemarks] = useState("");
  const [imagePath, setImagePath] = useState("");
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
    active === "active"? active =true : active = false;
    salesItem === "salesItem"? salesItem=true : salesItem=false;
    stockItem === "stockItem"? stockItem=true : stockItem=false;
    purchasedItem === "purchasedItem"? purchasedItem=true : purchasedItem=false;
    axios.post(
        "https://localhost:44328/api/ItemMasters1/",
        {   itemCode:itemCode,
          description:description,
          active:active,
          customerDescription:customerDescription,
          salesItem:salesItem,
          stockItem:stockItem,
          purchasedItem:purchasedItem,
          barcode:barcode,
          manageItemBy:parseInt(manageItemBy),
          minimumInventory:parseInt(minimumInventory),
          maximumInventory:parseInt(maximumInventory),
          remarks:remarks,
          imagePath:imagePath,
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
    <label htmlFor="itemCode" className="form-label">ItemCode</label>
    <input  className="form-control" onChange={(e) => setItemCode(e.target.value)} id="itemCode" aria-describedby="itemCodeHelp" />
</div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">Description</label>
    <input  className="form-control" id="description" onChange={(e) => setDescription(e.target.value)} />
  </div>
  
  <div className="mb-3">
  <input className="form-check-input" type="checkbox" value="active" id="active" onChange={(e) => setActive(e.target.value)}/>
  <label className="form-check-label" htmlFor="active">
    Active
  </label>
  </div>

  <div className="mb-3">
    <label htmlFor="customerDescription" className="form-label">Customer Description </label>
    <input  className="form-control" id="customerDescription" onChange={(e) => setCustomerDescription(e.target.value)} />
  </div>


  <div className="mb-3">
  <input className="form-check-input" onChange={(e) => setSalesItem(e.target.value)} type="checkbox" value="salesItem" id="salesItem" />
  <label className="form-check-label" htmlFor="salesItem">
    Sales Item
  </label>
  </div>

  <div className="mb-3">
  <input className="form-check-input" onChange={(e) => setStockItem(e.target.value)} type="checkbox" value="stockItem" id="stockItem" />
  <label className="form-check-label" htmlFor="stockItem">
    Stock Item  
  </label>
  </div>

  <div className="mb-3">
  <input className="form-check-input" type="checkbox" onChange={(e) => setPurchasedItem(e.target.value)} value="purchasedItem" id="purchasedItem" />
  <label className="form-check-label" htmlFor="purchasedItem">
    Purchased Item
  </label>
  </div>

  
  <div className="mb-3">
    <label htmlFor="barcode" className="form-label">Barcode </label>
    <input  className="form-control" id="barcode" onChange={(e) => setBarcode(e.target.value)} />
  </div>


  <div className="mb-3">
    <label htmlFor="manageItemBy" className="form-label">Manage Item By </label>
    <select className="form-select" onChange={(e) => setManageItemBy(e.target.value)} aria-label="Manage Item By">
    
    {Object.keys(enumItem).map((eachData) => {
      return(
            <option value={enumItem[eachData]}>{eachData}</option>       
    )})}

</select>
    </div>

  <div className="mb-3">
    <label htmlFor="minimumInventory" className="form-label">Mnimum Inventory </label>
    <input  className="form-control" id="minimumInventory" onChange={(e) => setMinimumInventory(e.target.value)} type="number" />
  </div>

  <div className="mb-3">
    <label htmlFor="maximumInventory" className="form-label">Maximum Inventory </label>
    <input  className="form-control" id="maximumInventory" onChange={(e) => setMaximumInventory(e.target.value)} type="number" />
  </div>

  
  <div className="mb-3">
    <label htmlFor="remarks" className="form-label">Remarks </label>
    <input  className="form-control" id="remarks" onChange={(e) => setRemarks(e.target.value)} />
  </div>

  <div className="mb-3">
    <label htmlFor="imagePath" className="form-label">Image Path </label>
    <input  className="form-control" id="imagePath" onChange={(e) => setImagePath(e.target.value)} />
  </div>






  
  
  <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
</form>

</>
}

export default Create