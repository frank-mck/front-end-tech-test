import React from 'react'

export default function Categories() {
  const Button = ({title}) => {
    return <button className="border font-medium text-[20px] border-black rounded-full px-2 h-[35px]">
      {title}
    </button>
  }
  return (
    <div className="gap-x-4 gap-y-2 flex flex-wrap mb-[42px] mt-4">
      <Button title="ALL" />
      <Button title="FASHION" />
      <Button title="VEGAN" />
      <Button title="SPORTS" />
    </div>
  )
}
