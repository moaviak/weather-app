import { useEffect, useState } from 'react'
import Header from './components/Header'
import CurrentWeather from './components/CurrentWeather'
import Forecast from './components/Forecast'
import SearchBox from './components/SearchBox'
import Warning from './components/Warning'

const API_KEY = import.meta.env.VITE_API_KEY
const API_URL_FOR_CITY_SEARCH = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}`
const API_URL_FOR_FORECAST =
  'http://dataservice.accuweather.com/forecasts/v1/daily/5day'

function App() {
  const [city, setCity] = useState()
  const [cityData, setCityData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [searchingCity, setSearchingCity] = useState(false)
  const [notFound, setNotFound] = useState(false)

  const searchCity = async (cityName) => {
    setIsLoading(true)
    cityName = cityName.replace(/\s+/g, '%20')
    const response = await fetch(`${API_URL_FOR_CITY_SEARCH}&q=${cityName}`)
    const data = await response.json()
    if (data.length === 0) {
      setNotFound(true)
      setIsLoading(false)
    } else {
      setCity({ name: data[0].EnglishName, key: data[0].Key })
    }
  }

  useEffect(() => {
    searchCity('Islamabad')
  }, [])

  useEffect(() => {
    const getCityData = async () => {
      const response = await fetch(
        `${API_URL_FOR_FORECAST}/${city.key}?apikey=${API_KEY}&details=true`
      )
      const data = await response.json()
      setCityData(data.DailyForecasts)
      setIsLoading(false)
    }

    if (city) getCityData()
  }, [city])

  return (
    <div className="app">
      {isLoading ? (
        <h1>Page Loading...</h1>
      ) : (
        <div className="flex flex-col items-center m-5">
          {notFound && <Warning setNotFound={setNotFound} />}
          {searchingCity ? (
            <SearchBox
              searchCity={searchCity}
              setSearchingCity={setSearchingCity}
            />
          ) : (
            <Header city={city.name} setSearchingCity={setSearchingCity} />
          )}
          <CurrentWeather weatherData={cityData[0]} />
          <Forecast forecastData={cityData.slice(1, cityData.length)} />
        </div>
      )}
    </div>
  )
}

export default App
