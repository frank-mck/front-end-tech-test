import { useState } from "react";
import ThumbDown from "../icons/ThumbDown";
import ThumbUp from "../icons/ThumbUp";

export default function Brand({ data, state }) {
  const { 
    id,
    fields
  } = data;
  const [onHover, setOnHover] = useState(false);
  const [rating, setRating] = useState(localStorage.getItem(id));
  const thumbnail = fields?.images?.[0]?.thumbnails?.full;
  const showBrand = fields.tags.includes(state?.category.toLowerCase()) || state?.category === 'ALL';

  const likeBrand = () => {
    localStorage.setItem(id, "liked")
    setRating("liked")
  }

  const dislikeBrand = () => {
    localStorage.setItem(id, "disliked")
    setRating("disliked")
  }

  return (
    <div onMouseOut={() => setOnHover(false)} onMouseOver={() => setOnHover(true)} className={`${showBrand ? '' : 'hidden'} h-[261px] relative grid grid-cols-[241px,1fr] text-sm bg-white border border-black w-full rounded-[20px] overflow-hidden`}>
      {onHover ? (<div className="absolute top-0 right-0 flex">
        <button className={`${rating === "disliked" ? 'bg-[#9EFF70]' : ''}`} onClick={dislikeBrand}><ThumbDown /></button>
        <button className={`${rating === "liked" ? 'bg-[#9EFF70]' : ''}`} onClick={likeBrand}><ThumbUp /></button>
      </div>) : null}
    <div className="h-[261px] overflow-hidden">
      <img className="w-full h-full object-cover" src={thumbnail?.url} alt="Thumbnail" />
    </div>
    <div className="p-5">
      <div className="flex gap-2">
        {fields?.tags?.map((tag) => {
          return <div key={id + tag} className="px-2 flex font-medium text-base items-center justify-center rounded-full h-[22px] border border-black">{tag}</div>
        })}
      </div>
      <h2 className="font-normal text-[40px] my-3">{fields?.name}</h2>
      <p className="w-full">{fields?.description}</p>
    </div>
  </div>
  )
}
