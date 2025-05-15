import PlusIcon from "./img/PlusIcon";
import MinusIcon from "./img/MinusIcon";

const CreateOrder = ({itemLists,handleAddItem,totalPrice, setName, handlePlaceOrder}) => {

  return (
    <div className="bg-cardbg rounded-lg p-6 h-[calc(100vh_-_130px)]">
      <h2 className="text-xl font-bold mb-1">CREATE ORDER</h2>
      <p className="text-gray-400 text-sm mb-4">
        Accurately fulfill customer orders based on a precise understanding of
        their requirements.
      </p>

      {/* <!-- Customer Name Input --> */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Customer Name</label>
        <input
          type="text"
          onChange={(e)=>setName(e.target.value)}
          className="w-full bg-gray-700 bg-opacity-50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
        />
      </div>

      {/* <!-- Choose Items --> */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Choose Items</label>
        <div className="items-container">
          {itemLists.map((food) => (
            <div
              key={food.id}
              className="bg-gray-700 bg-opacity-30 rounded-md p-3 mb-3 flex justify-between items-center hover:bg-opacity-40 transition-all duration-300"
            >
              <div className="flex items-center">
                <div className="w-12 h-12   flex items-center justify-center mr-3">
                  <img src={food.img} alt={food.name} className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="font-medium">{food.name}</h3>
                  <p className="text-xs text-gray-400">BDT {food.price}</p>
                </div>
              </div>
              <button
                onClick={() => handleAddItem(food.id, food.addItem)}
                className="w-8 h-8 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300"
              >
                {food.addItem ? <PlusIcon /> : <MinusIcon />}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* <!-- Place Order Button --> */}
      <button onClick={handlePlaceOrder} className="w-full bg-primary hover:bg-opacity-90 text-white font-medium py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
        Place Order (BDT {totalPrice || 0})
      </button>
    </div>
  );
};

export default CreateOrder;
