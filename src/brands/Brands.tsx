import Brand from "./Brand"

export default function Brands({ data, state }) {
  return (
    <div className="w-full flex flex-col gap-9">
      {data?.map((brand) => {
        return <Brand key={brand?.id} data={brand} state={state} />
      })}
    </div>
  )
}
