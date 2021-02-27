import React from 'react'

export default function FoodPanel({ food, addOrder }) {
  return (
    <div className="flex flex-col space-y-2">
      <span className="text-lg font-semibold">{food.name}</span>
      <img className="w-32 h-32" src={food.img} alt={food.name} />
      <button className="border rounded-sm p-1 bg-gray-300"
              onClick={() => addOrder(food)}>
        Order
      </button>
    </div>
  )
}
