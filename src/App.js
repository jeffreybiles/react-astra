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

  const addOrder = function(){
    let newOrder = {
      id: Math.random(),
      food: this.food,
      state: 'ordered'
    }
    setOrders([newOrder].concat(orders)) 
  }

  const updateOrder = function() {
    let {order, state} = this;
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
            // I'm just playing around - function binding like this may not be the best idea
            <FoodPanel key={food.id} food={food} buttons={ [{text: 'Order', fn: addOrder.bind({food: food}) }] } />
          ))}
        </div>

        <h1 className="title">Orders</h1>
        <div className="flex flex-wrap space-x-2">
          {orders.filter(o => o.state === 'ordered').map(order => (
            <FoodPanel key={order.id}
                       food={order.food}
                       small={true}
                       buttons={ [{text: 'Cook', fn: updateOrder.bind({order: order, state: 'cooked'})},
                                  {text: 'Cancel', fn: updateOrder.bind({order: order, state: 'cancelled'}) }]} />
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
