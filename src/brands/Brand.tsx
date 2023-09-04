export default function Brand({ data }) {
  const { 
    id,
    fields: description,
    fields: images,
    fields: name,
    fields: status,
    fields: website,
    fields: tags
  } = data;

  return (
    <div className="h-[261px] text-sm bg-white border border-black w-full rounded-[20px]">
      {data?.id}
    </div>
  )
}
