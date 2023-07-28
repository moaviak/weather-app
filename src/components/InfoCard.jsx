const InfoCard = ({ type, value }) => {
  return (
    <div className="flex flex-col items-center justify-center w-24 h-20 rounded-2xl shadow-lg">
      <img src={`../assets/${type.toLowerCase()}.png`} alt="" className="h-6" />
      <p className="font-bold text-sm leading-5 mt-2">{value}</p>
      <p className="text-gray-500 text-sm leading-none">{type}</p>
    </div>
  )
}

export default InfoCard
