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
      <h2 className="font-normal text-[40px] my-4">{fields?.name}</h2>
      <p className="w-full">{fields?.description}</p>
      <div className="flex items-center gap-4 mt-[17px]">
        <div className="cursor-pointer flex items-center justify-center w-48 h-[34px] bg-lime-300 rounded-[50px] border border-black">
          SEE DETAILS
          <svg className="ml-2" width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.938782 8.36956L18.4069 8.36956M18.4069 8.36956C12.6678 8.36956 10.9939 1.43478 10.9939 7.31026e-07M18.4069 8.36956C12.6678 8.36956 10.9939 13.8696 10.9939 16.5" stroke="black" strokeWidth="2"/>
          </svg>
        </div>
         <a className="italic text-[#004D43] font-medium" href={fields?.website}>{fields?.website.match(/(\w+)\.\w{2,}(\/|\?|$)/)[1].toUpperCase()}</a>
      </div>
    </div>
  </div>
  )
}
