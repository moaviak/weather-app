import { FaLocationDot, FaMagnifyingGlass } from 'react-icons/fa6'

const Header = ({ city, setSearchingCity }) => {
  return (
    <div className="flex items-center justify-between w-96 px-4">
      <div className="flex items-center">
        <FaLocationDot className="text-orange-500 h-6" />
        <h3 className="ml-2 text-lg font-bold font-sans">{city}</h3>
      </div>
      <FaMagnifyingGlass
        className="rounded-full text-orange-500 w-10 h-10 p-2 cursor-pointer"
        onClick={(e) => {
          setSearchingCity(true)
        }}
      />
    </div>
  )
}

export default Header
