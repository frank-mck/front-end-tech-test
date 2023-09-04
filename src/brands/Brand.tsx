export default function Brand({ data, state }) {
  const { 
    id,
    fields
  } = data;
  const thumbnail = fields?.images?.[0]?.thumbnails?.full;
  const showBrand = fields.tags.includes(state?.category.toLowerCase()) || state?.category === 'ALL';
console.log(data)
  return (
    <div className={`${showBrand ? '' : 'hidden'} h-[261px] grid grid-cols-[241px,1fr] text-sm bg-white border border-black w-full rounded-[20px] overflow-hidden`}>
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
