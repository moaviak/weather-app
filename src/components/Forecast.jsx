import WeatherCard from './WeatherCard'

function Forecast({ forecastData }) {
  return (
    <div className="w-96 px-4 mt-4">
      <div className="flex justify-between w-full">
        <h3 className="font-bold text-lg">Forecast</h3>
        <p className="text-gray-500">4 days</p>
      </div>

      <div className="flex justify-around my-2">
        {forecastData.map((forecast, index) => (
          <WeatherCard key={index} forecast={forecast} />
        ))}
      </div>
    </div>
  )
}

export default Forecast
