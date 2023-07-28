const WeatherCard = ({ forecast }) => {
  const currentTime = new Date(forecast.Date)
  const sunsetTime = new Date(forecast.Sun.Set)
  const sunriseTime = new Date(forecast.Sun.Rise)

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const temperature = Math.round(
    (forecast.Temperature.Maximum.Value + forecast.Temperature.Minimum.Value) /
      2
  )

  let icon = ''
  if (
    currentTime.getHours() >= sunriseTime.getHours() &&
    currentTime.getHours() <= sunsetTime.getHours()
  ) {
    icon = `${forecast.Day.Icon}.png`
  } else {
    icon = `${forecast.Night.Icon}.png`
  }

  return (
    <div
      className="flex flex-col items-center b
    
    g-gray-100 px-4 py-1 rounded-2xl shadow-lg bg-gray-100"
    >
      <p className="font-bold text-sm">{temperature}&deg;F</p>
      <div className="flex flex-col justify-center w-10 h-10 my-1">
        <img src={`../assets/${icon}`} alt="" className="w-fit h-fit" />
      </div>
      <p className="text-gray-500 text-sm">{weekDays[currentTime.getDay()]}</p>
    </div>
  )
}

export default WeatherCard
