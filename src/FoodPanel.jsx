import React from 'react'

export default function FoodPanel({ food, buttons, small }) {
  return (
    <div className="flex flex-col space-y-2">
      <span className={small ? "" : "text-lg font-semibold"}>{food.name}</span>
      <img className={small ? "w-24 h-24" : "w-32 h-32"} src={food.img} alt={food.name} />
      
      {buttons.map(btn => (
        <button className={"border rounded-sm bg-gray-300 " + (small ? 'p-0' : 'p-1')} key={btn.text}
                onClick={btn.fn}>
          {btn.text}
        </button>
      ))}
      
    </div>
  )
}
