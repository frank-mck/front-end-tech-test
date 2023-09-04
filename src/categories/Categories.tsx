import React from 'react'

export default function Categories({ state, updateCategory}) {
  const Button = ({title}) => {
    return <button onClick={() => updateCategory(title)} className={`${state?.category === title ? 'bg-[#9EFF70]' : ''} border font-medium text-[20px] border-black rounded-full px-2 h-[35px]`}>
      {title}
    </button>
  }

  return (
    <div className="gap-x-4 gap-y-2 flex flex-wrap mb-[42px] mt-4">
      <Button title="ALL" />
      <Button title="FASHION" />
      <Button title="DRINKS" />
      <Button title="FOOD" />
      <Button title="SPORTS" />
    </div>
  )
}
