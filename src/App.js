import './App.css';
import { useState } from 'react'

function App() {
  let foods = [
    {
      id: 1,
      name: "Pancakes",
      img: "/food/pancakes.png"
    },
    {
      id: 2,
      name: "Sausage",
      img: "/food/sausage.png"
    },
    {
      id: 3,
      name: "Coffee",
      img: "/food/coffee.png"
    },
    {
      id: 4,
      name: "Potato Wedges",
      img: "/food/fries.png"
    },
    {
      id: 5,
      name: "Fried Eggs",
      img: "/food/eggs.png"
    }
  ]
  const [orders, setOrders] = useState([
    {
      id: 1,
      food: {
        id: 5,
        name: "Fried Eggs",
        img: "/food/eggs.png"
      },
      state: 'ordered'
    }
  ])

  const addOrder = (food) => {
    let newOrder = {
      id: Math.random(),
      food,
      state: 'ordered'
    }
    setOrders([newOrder].concat(orders)) 
  }

  const updateOrder = (order, newState) => {
    setOrders(orders.map(o => {
      return order.id === o.id ? {...o, state: newState} : o
    }))
  }

  return (
    <div className="App container">
      <div>
        <h1 className="title">Menu</h1>
        <div className="flex flex-wrap space-x-4">
          {foods.map(food => (
            <div key={food.id} className="flex flex-col space-y-2">
              <span className="text-lg font-semibold">{food.name}</span>
              <img className="w-32 h-32" src={food.img} alt={food.name} />
              <button className="border rounded-sm p-1 bg-gray-300"
                      onClick={() => addOrder(food)}>
                Order
              </button>
            </div>
          ))}
        </div>

        <h1 className="title">Orders</h1>
        <div className="flex flex-wrap space-x-2">
          {orders.filter(o => o.state === 'ordered').map(order => (
            <div key={order.id} className="flex flex-col space-y-1">
              <span className="font-semibold">{order.food.name}</span>
              <img className="w-24 h-24" src={order.food.img} alt={order.food.name} />
              <button className="border rounded-sm p-0 bg-gray-300"
                      onClick={() => updateOrder(order, 'cooked')}>
                Cook
              </button>
              <button className="border rounded-sm p-0 bg-gray-300"
                      onClick={() => updateOrder(order, 'canceled')}>
                Cancel
              </button>
            </div>
          ))}
        </div>

        <h1 className="title">
          Cooked
        </h1>

        <div className="flex flex-col">
          {orders.filter(o => o.state === 'cooked').map(order => (
            <div key={order.id}>
              {order.food.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
