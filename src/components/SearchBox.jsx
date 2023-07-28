import { useState } from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6'

const SearchBox = ({ searchCity, setSearchingCity }) => {
  const [cityName, setCityName] = useState()

  function handleSubmit(e) {
    e.preventDefault()
    setSearchingCity(false)
    searchCity(cityName)
  }

  return (
    <div>
      <form
        className="w-96 flex items-center justify-evenly border shadow-md h-12 px-4"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          type="text"
          placeholder="Search City"
          className="h-full w-full focus:outline-none"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
        <button type="submit">
          <FaMagnifyingGlass className="rounded-full text-orange-500 w-10 h-10 p-2 cursor-pointer" />
        </button>
      </form>
    </div>
  )
}

export default SearchBox
