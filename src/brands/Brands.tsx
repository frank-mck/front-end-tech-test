import Brand from "./Brand"

export default function Brands({ data }) {
  return (
    <div className="w-full">
      {data?.map((brand) => {
        return <Brand key={brand?.id} data={brand} />
      })}
    </div>
  )
}
