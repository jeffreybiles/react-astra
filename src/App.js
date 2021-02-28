import './App.css';
import { useState } from 'react'
import FoodPanel from './FoodPanel'

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

  const addOrder = function(food){
    let newOrder = {
      id: Math.random(),
      food,
      state: 'ordered'
    }
    setOrders([newOrder].concat(orders)) 
  }

  const updateOrder = function(order, state) {
    setOrders(orders.map(o => {
      return order.id === o.id ? {...o, state} : o
    }))
  }

  return (
    <div className="App container">
      <div>
        <h1 className="title">Menu</h1>
        <div className="flex flex-wrap space-x-4">
          {foods.map(food => (
            <FoodPanel key={food.id}
                       food={food}
                       buttons={ [{text: 'Order', fn: () => addOrder(food) }] } />
          ))}
        </div>

        <h1 className="title">Orders</h1>
        <div className="flex flex-wrap space-x-2">
          {orders.filter(o => o.state === 'ordered').map(order => (
            <FoodPanel key={order.id}
                       food={order.food}
                       small={true}
                       buttons={ [{text: 'Cook', fn: () => updateOrder(order, 'cooked') },
                                  {text: 'Cancel', fn: () => updateOrder(order,'cancelled') } ]} />
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
