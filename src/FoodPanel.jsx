import React from 'react'

export default function FoodPanel({ food, children }) {
  return (
    <div className="flex flex-col space-y-2">
      <span className="text-lg font-semibold">{food.name}</span>
      <img className="w-32 h-32" src={food.img} alt={food.name} />
      {children}
    </div>
  )
}
