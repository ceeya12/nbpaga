import './WeatherWidget.css';
import {useEffect, useState} from "react";
import Card from 'react-bootstrap/Card'
import {Row, Col} from "react-bootstrap";

const key = "912c495b2a4a4d50a5222836241110";

function WeatherWidget() {

    const [forecast, setForecast] = useState([]);

    useEffect(function () {
        async function getWeather() {
            try {
                const res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=29.7121855,-98.1338531&days=3&aqi=yes&alerts=no
`);
                if (!res.ok) throw new Error("Something went wrong with Fetching the data, please check double check your connectivity");

                const data = await res.json();
                console.log(data);

                // Extracting necessary data
                const forecastData = data.forecast.forecastday.map((day) => ({
                    date: day.date,
                    maxtemp_f: day.day.maxtemp_f,
                    mintemp_f: day.day.mintemp_f,
                    icon: day.day.condition.icon,
                }));

                setForecast(forecastData);

            } catch (err) {
                console.log(`Error Fetching Data logging to console: ${err}`);
            }

        }

        getWeather();
    }, [])

    return (<div className="weather-ctn">
        <WeatherTile forecastData={forecast}/>
    </div>);

}

function WeatherTile({forecastData}) {
    return (
        <>
            {
                forecastData.map((day, index) =>
                    <div className="weather-ctn" key={index}>
                        <div className="m-2">
                            <Card style={{width: '4.5rem'}} className="card-dimensions">
                                <Card.Body>
                                    <Card.Title bsPrefix="weather-title">{day.date.slice(5)}</Card.Title>
                                    <Card.Img src={day.icon} className="weather-icon"/>
                                    <Card.Text bsPrefix="weather-text text-nowrap">
                                        {Math.floor(day.mintemp_f)}&deg;F/{Math.floor(day.maxtemp_f)}&deg;F
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                )
            }
        </>
    );

}

export default WeatherWidget;