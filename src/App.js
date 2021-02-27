import './App.css';

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
  return (
    <div className="App container">
      <div>
        <h1 className="title">Menu</h1>
        <div className="flex flex-wrap space-x-4">
          {foods.map(food => (
            <div key={food.id} className="flex flex-col space-y-2">
              <span className="text-lg font-semibold">{food.name}</span>
              <img className="w-32 h-32" src={food.img} />
              <button className="border rounded-sm p-1 bg-gray-300">
                Order
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
