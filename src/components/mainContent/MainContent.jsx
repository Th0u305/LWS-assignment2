import CreateOrder from "./CreateOrder";
import OrderSummary from "./OrderSummary";
import OderReports from "./OderReports";
import { useState } from "react";
import { foodList } from "./data/Foodlists";
import { oderReports } from "./data/OrderReports";


const MainContent = () => {
    const [itemLists, setItemLists] = useState(foodList) /// All item lists 
    const [totalPrice, setTotalPrice] = useState(0) /// Total items price
    const [selectedItem , setSelectedItem] = useState([]) 
    const [initialOrders, setInitialOrders] = useState(oderReports)
    const [filteredOrders, setFilteredOrders] = useState(oderReports);
    const [itemNumber, setItemNumber] = useState(Math.max(...filteredOrders.map((item)=> item.id)))
    const [name , setName] = useState("")

    /// Take orders
    const handleAddItem = (id, isAdd) => {
        const filtered = itemLists.map((item) => item.id === id ? { ...item, addItem: !isAdd ? true : false } : item);
        setItemLists(filtered);
    
        const price = filtered.find((item) => item.id === id);
               
        if (price.addItem) {
            setSelectedItem( filtered.filter((item) => item.addItem))
            return setTotalPrice(totalPrice + price.price);
        } else {
            return setTotalPrice(totalPrice - price.price);
        }
    };


   /// Add items to orders reports
    const handlePlaceOrder = () =>{

        setItemNumber(itemNumber + 1)
        
        const newItem = {
            id :  itemNumber + 1,
            customerName : name,
            item : selectedItem.length,
            amount : totalPrice,
            status : "PENDING"
        }
        setInitialOrders([...initialOrders,newItem])
        setFilteredOrders([...filteredOrders,newItem])
    }

    ///// Delete item from order report lists
    const handleDeleteItem = (id) =>{
        const deleted = filteredOrders.filter((item)=> item.id !== id)
        setFilteredOrders(deleted)
        setInitialOrders(deleted)
    }


    /// Updating status in order reports
    const handleStatus = (id) =>{
        const filtered = (initialOrders , filteredOrders).map((item) => item.id === id ? { ...item, status : "DELIVERED" } : item);
        setInitialOrders(filtered);
        setFilteredOrders(filtered);
    }


    //// Filter orders by status 
    const handleFilter = (e) =>{
        const value = (e.target.value);    
        if (value.toLocaleLowerCase() === "all") {
            return setFilteredOrders(initialOrders)
        }   
        const filtered = initialOrders.filter((item)=> item.status.toLocaleLowerCase() === value.toLocaleLowerCase()) 
        setFilteredOrders(filtered)
    }


    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
        <CreateOrder itemLists={itemLists} handleAddItem={handleAddItem} totalPrice={totalPrice} setName={setName} handlePlaceOrder={handlePlaceOrder} />
        <div className="md:col-span-2 h-[calc(100vh_-_130px)]">
          <OrderSummary filteredOrders={filteredOrders}/>
          <OderReports filteredOrders={filteredOrders} handleFilter={handleFilter} handleDeleteItem={handleDeleteItem} handleStatus={handleStatus} />
        </div>
      </div>
    );
};

export default MainContent;
