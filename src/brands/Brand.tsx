export default function Brand({ data, state }) {
  const { 
    id,
    fields
  } = data;
  const thumbnail = fields?.images?.[0]?.thumbnails?.full;

  const showBrand = fields.tags.includes(state?.category.toLowerCase()) || state?.category === 'ALL';

  return (
    <div className={`${showBrand ? '' : 'hidden'} h-[261px] flex text-sm bg-white border border-black w-full rounded-[20px] overflow-hidden`}>
    <div className="w-[241px] h-[261px] overflow-hidden">
      <img className="w-full h-full object-cover" src={thumbnail?.url} alt="Thumbnail" />
    </div>
    <div className="p-5 flex">
      {fields?.tags?.map((tag) => {
        return <div className="px-2 flex font-medium text-base items-center justify-center rounded-full h-[22px] border border-black">{tag}</div>
      })}
    </div>
  </div>
  )
}
