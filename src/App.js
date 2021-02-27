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
    <div className="App">
      <header className="App-header">
        {foods.map(food => (
          <div key={food.id}>{food.name}</div>
        ))}
      </header>
    </div>
  );
}

export default App;
