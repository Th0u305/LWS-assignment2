import React from "react";
import FilterIcon from "./img/FilterIcon";

const OderReports = ({orders,handleFilter,handleDeleteItem, handleStatus}) => {
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-xl font-bold mb-4">Order Reports</h2>

        <div className="flex gap-4 items-center">
          <FilterIcon />
          <select onChange={(e)=>handleFilter(e)}  className="appearance-none bg-zinc-900 accent-orange-600 border-none outline-none rounded-sm">
            <option>All</option>
            <option>Pending</option>
            <option>Delivered</option>
          </select>
        </div>
      </div>
      <div className="bg-cardbg rounded-lg p-4">
        <div className="reports-container">
          <table className="min-w-full">
            <thead>
              <tr className="text-left text-sm">
                <th className="pb-3 font-medium">ID</th>
                <th className="pb-3 font-medium">Customer Name</th>
                <th className="pb-3 font-medium">Items</th>
                <th className="pb-3 font-medium">Amount</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {orders.map((order) => (
                <tr key={order.id}  className="border-t border-gray-700">
                  <td className="py-3">{order.id}</td>
                  <td className="py-3">{order.customerName}</td>
                  <td className="py-3">{order.item}</td>
                  <td className="py-3">{order.amount}</td>
                  <td className="py-3">
                    <span className={order.status === "DELIVERED"? "text-green-500" : "text-red-500"}>{order.status}</span>
                  </td>
                  <td className="py-3">
                    <button onClick={()=>handleDeleteItem(order.id)}  className="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300">
                      Delete
                    </button>
                    <button onClick={()=>handleStatus(order.id)}  className="bg-gray-800 hover:bg-green-600 text-xs px-3 py-1 rounded-full transition-colors duration-300">
                      DELIVER
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OderReports;
