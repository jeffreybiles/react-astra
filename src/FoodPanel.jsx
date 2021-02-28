import React from 'react'

export default function FoodPanel({ food, buttons }) {
  return (
    <div className="flex flex-col space-y-2">
      <span className="text-lg font-semibold">{food.name}</span>
      <img className="w-32 h-32" src={food.img} alt={food.name} />
      
      {buttons.map(btn => (
        <button className="border rounded-sm p-1 bg-gray-300" key={btn.text}
                onClick={() => btn.fn(food) }>
          {btn.text}
        </button>
      ))}
      
    </div>
  )
}
