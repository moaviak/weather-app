# Weather App

The **Weather App** is a simple web application developed using React.js that allows users to view the current weather and a 4-day forecast for a specific city. The app utilizes data from a weather API to provide real-time weather information.


## Getting Started
### Prerequisites

To run this project locally, you will need the following:

-   Node.js ([https://nodejs.org](https://nodejs.org/)) installed on your machine.
-   API key from a weather service provider (e.g., OpenWeatherMap, AccuWeather). (The app currently uses the OpenWeatherMap API by default)

### Installation
1. Clone the repository to your local machine:
`git clone https://github.com/moaviak/weather-app.git`

2. Navigate to the project directory:
`cd weather-app`

3. Install the dependencies:
`npm install`

## Usage
1. Obtain an API key from https://developer.accuweather.com/apis
3. Create a .env file in the root directory of the project and add your API key as follows:
`VIT_API_KEY=your_api_key_here`

4. Start the development server:
`npm run dev`

## Features
1.  **Search For Specific City**: Users can enter the name of a city in the search bar and view its current weather details.
    
2.  **4-Day Forecast**: The app displays the weather forecast for the next four days, giving users an overview of the upcoming weather conditions.
    
3.  **Day and Night Weather**: Depending on the time of day in the selected city, the app shows either the day weather or the night weather.

## API

The Weather App uses a weather API to fetch real-time weather data. As of the current implementation, the app is configured to use the **AccuWeather** API by default. You can replace it with any other weather service provider's API by modifying the API calls in the codebase.

## Contributing

Contributions are welcome! If you find any issues or want to add new features to the app, feel free to submit a pull request.

## License

This project is licensed under the [MIT License](https://chat.openai.com/c/LICENSE). Feel free to use and modify the code as per the terms of the license. Attribution is appreciated but not required.
