import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

function Update() {
  const [itemCode, setItemCode] = useState("");
      const [description, setDescription] = useState("");
      const [active, setActive] = useState("");
      const [customerDescription, setCustomerDescription] = useState("");
      const [salesItem, setSalesItem] = useState("");
      const [stockItem, setStockItem] = useState("");
      const [purchasedItem, setPurchasedItem] = useState("");
      const [barcode, setBarcode] = useState("");
      const [manageItemBy, setManageItemBy] = useState("");
      const [minimumInventory, setMinimumInventory] = useState("");
      const [maximumInventory, setMaximumInventory] = useState("");
      const [remarks, setRemarks] = useState("");
      const [imagePath, setImagePath] = useState("");

      const enumItem = {
        None : 1,
        Serial : 2,
        Batch : 3
      };
  const navigate = useNavigate();

  useEffect(() => {
    setItemCode(localStorage.getItem(itemCode));
    setDescription(localStorage.getItem(description));
    setActive(localStorage.getItem(active));
    setCustomerDescription(localStorage.getItem(customerDescription));
    setSalesItem(localStorage.getItem(salesItem));
    setStockItem(localStorage.getItem(stockItem));
    setPurchasedItem(localStorage.getItem(purchasedItem));
    setBarcode(localStorage.getItem(barcode));
    setManageItemBy(localStorage.getItem(manageItemBy));
    setMinimumInventory(localStorage.getItem(minimumInventory));
    setRemarks(localStorage.getItem(remarks));
    setImagePath(localStorage.getItem(imagePath));
  }, []);
  
  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Id...", itemCode);
    axios.put(`https://localhost:44328/api/ItemMasters1/${itemCode}`,
    {
      itemCode:itemCode,
      description:description,
      active:active,
      customerDescription:customerDescription,
      salesItem:salesItem,
      stockItem:stockItem,
      purchasedItem:purchasedItem,
      barcode:barcode,
      manageItemBy:manageItemBy,
      minimumInventory:minimumInventory,
      maximumInventory:maximumInventory,
      remarks:remarks,
      imagePath:imagePath,
    }).then(() => {
        navigate("/read");
    });

    
  };

    return (<>
    
    <h2>Update</h2>
    <form>
  <div className="mb-3">
    <label htmlFor="itemCode" className="form-label">Item Code</label>
    <input  className="form-control" 
    value= {itemCode}
    onChange={(e) => setItemCode(e.target.value)}
     id="itemCode" aria-describedby="itemCodeHelp" />
</div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">Description</label>
    <input  
    value = {description}
    className="form-control" id="description"
    onChange={(e) => setDescription(e.target.value)} 
    />
  </div>

  
  <div className="mb-3">
  <input className="form-check-input" type="checkbox" id="active" checked ={active} onChange={(e) => setActive(e.target.value)}/>
  <label className="form-check-label" htmlFor="active">
    Active
  </label>
  </div>

  
  <div className="mb-3">
    <label htmlFor="customerDescription" className="form-label">Customer Description </label>
    <input  className="form-control" value= {customerDescription} id="customerDescription" onChange={(e) => setCustomerDescription(e.target.value)} />
  </div>


  <div className="mb-3">
  <input className="form-check-input" onChange={(e) => setSalesItem(e.target.value)} checked ={salesItem} type="checkbox" value="salesItem" id="salesItem" />
  <label className="form-check-label" htmlFor="salesItem">
    Sales Item
  </label>
  </div>

  <div className="mb-3">
  <input className="form-check-input" onChange={(e) => setStockItem(e.target.value)} checked ={stockItem} type="checkbox" value="stockItem" id="stockItem" />
  <label className="form-check-label" htmlFor="stockItem">
    Stock Item  
  </label>
  </div>

  <div className="mb-3">
  <input className="form-check-input" type="checkbox" onChange={(e) => setPurchasedItem(e.target.value)} checked ={purchasedItem} value="purchasedItem" id="purchasedItem" />
  <label className="form-check-label" htmlFor="purchasedItem">
    Purchased Item
  </label>
  </div>

  <div className="mb-3">
    <label htmlFor="barcode" className="form-label">Barcode </label>
    <input  className="form-control" value={barcode} id="barcode" onChange={(e) => setBarcode(e.target.value)} />
  </div>

  <div className="mb-3">
    <label htmlFor="manageItemBy" className="form-label">Manage Item By </label>
    <select className="form-select" onChange={(e) => setManageItemBy(e.target.value)} aria-label="Manage Item By" >
    
    {Object.keys(enumItem).map((eachData) => {
            if(manageItemBy === enumItem[eachData]){
              return<option selected value={enumItem[eachData]}>{eachData}</option>  
            } else {
              return <option value={enumItem[eachData]}>{eachData}</option>  
            }     
    })}

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
    <input  className="form-control" id="remarks" value = {remarks} onChange={(e) => setRemarks(e.target.value)} />
  </div>

  <div className="mb-3">
    <label htmlFor="imagePath" className="form-label">Image Path </label>
    <input  className="form-control" id="imagePath" onChange={(e) => setImagePath(e.target.value)} />
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