import InfoCard from './InfoCard'

function CurrentWeather({ weatherData }) {
  const currentTime = new Date(weatherData.Date)
  const sunsetTime = new Date(weatherData.Sun.Set)
  const sunriseTime = new Date(weatherData.Sun.Rise)

  let icon = ''
  let description = ''
  let windSpeed = ''
  let rainProbability = ''

  const temperature = Math.round(
    (weatherData.Temperature.Maximum.Value +
      weatherData.Temperature.Minimum.Value) /
      2
  )

  if (
    currentTime.getHours() >= sunriseTime.getHours() &&
    currentTime.getHours() <= sunsetTime.getHours()
  ) {
    icon = `${weatherData.Day.Icon}.png`
    description = weatherData.Day.IconPhrase
    windSpeed = weatherData.Day.Wind.Speed.Value + 'mi/h'
    rainProbability = weatherData.Day.RainProbability + '%'
  } else {
    icon = `${weatherData.Night.Icon}.png`
    description = weatherData.Night.IconPhrase
    windSpeed = weatherData.Night.Wind.Speed.Value + 'mi/h'
    rainProbability = weatherData.Night.RainProbability + '%'
  }

  return (
    <div className="w-96 flex items-center justify-center flex-col mt-4">
      <img src={`../assets/${icon}`} alt="" className="w-44" />
      <h1 className="text-8xl font-bold leading-none">{temperature}&deg;F</h1>
      <p className="text-gray-500 text-xl">{description}</p>

      <div className="my-4 flex justify-evenly w-full">
        <InfoCard type="Wind" value={windSpeed} />
        <InfoCard type="Rain" value={rainProbability} />
      </div>
    </div>
  )
}

export default CurrentWeather
