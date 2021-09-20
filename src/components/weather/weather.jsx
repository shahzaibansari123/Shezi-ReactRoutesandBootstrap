import "./../../css/weather.css"
import css from "../../App.css"
import { useState, useEffect, useRef } from "react";
import axios from 'axios';
import { Form, Button, FormControl, Container, Row, Col } from 'react-bootstrap'

function App() {
    const [weather, setweather] = useState(null)
    // const [cityName, setCityName] = useState("karachi")
    const cityName = useRef("london");
    const [location, setLocation] = useState(null)
    const [submit, setSubmit] = useState(false)

    useEffect(() => {
        let name = "";
        if (cityName.current.value) {
            name = `q=${cityName.current.value}`
        }
        // else if (location) {
        // if (!location) {
        // } 
        else if (location === "fail") {
            alert('please turn on your loaction')
        } else if (location && location.latitude) {
            name = `lat=${location.latitude}&lon=${location.longitude}`
        }

        console.log("name: ", name)
        if (name) {
            axios.get(`https://api.openweathermap.org/data/2.5/weather?${name}&&appid=0c702b3dffad340f5e1890bd9eeb5d0f&units=metric`)
                .then(res => {
                    const newWeather = res.data;
                    // console.log("newWeather: ", newWeather);
                    setweather(newWeather);
                });
        }

    }, [submit, location]);

    useEffect(() => {
        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    console.log("position got: ", position.coords.latitude);
                    // console.log("position got: ", position.coords.longitude);
                    setLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    })

                }, function (error) {

                    setLocation("fail")

                });
            } else {
                console.log("Geolocation is not supported by this browser.");
            }
        }
        getLocation()
    }, []);

    return (
        <div>
            {/* <h1>City Name:</h1> */}
            {/* <input onChange={(e) => {
        console.log("e: ", e.target.value)
        setCityName(e.target.value)
      }} /> */}
            {/* <input ref={cityName} />
      <button onClick={() => {
        console.log("name: ", cityName.current.value)
        setSubmit(!submit)
      }} >Submit</button> */}
            <br />
            {/* <h1>{weather?.main?.temp}</h1> */}
            {
                (weather !== null) ?
                    <>
                        <div className={weather?.weather[0].main}>
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="mr-2"
                                    aria-label="Search"
                                    ref={cityName}
                                />
                                <Button variant="dark" onClick={() => {
                                    console.log("name: ", cityName.current.value)
                                    setSubmit(!submit)
                                }}>Search</Button>
                            </Form>
                            {/* <input ref={cityName} />
      <button onClick={() => {
        console.log("name: ", cityName.current.value)
        setSubmit(!submit)
      }} >Submit</button> */}
                            <br />
                            <h1 className="text-center m-1">{weather.name}</h1>
                            <h2 className="text-center m-1">{weather?.weather[0].main}</h2>
                            <h1 className="text-center m-1">{weather?.main?.temp} <span id="degree">°C</span></h1>
                            <br></br><br></br>
                            {/* {weather.name} Weather
            <h1>{weather?.main?.temp}</h1>
            <h2>{weather?.weather[0].main}</h2> */}
                            {/* <h2>{weather?.weather[0].description}</h2> */}
                            <div class="detail">
                                <Container fluid>
                                    <Row>
                                        <Col className="text-center m-1">Humidity: {weather?.main?.humidity} g/kg</Col>
                                        <Col className="text-center m-1">Wind Speed: {weather?.wind.speed} m/s</Col>
                                        <Col className="text-center m-1">Wind Direction : {weather.wind.deg} °</Col>
                                    </Row>
                                    <br></br>
                                    <Row>
                                        <Col className="text-center m-1">Min Temperature : {weather.main.temp_min}°C</Col>
                                        <Col className="text-center m-1">Latitude: {weather.coord.lat}</Col>
                                        <Col className="text-center m-1">Country : {weather.sys.country}</Col>
                                    </Row>
                                    <br></br>
                                    <Row>
                                        <Col className="text-center m-1">Max Temperature : {weather.main.temp_max}°C</Col>
                                        <Col className="text-center m-1">Longitude: {weather.coord.lon}</Col>
                                        <Col className="text-center m-1">Feels Like : {weather.main.feels_like}°C</Col>
                                    </Row>
                                </Container></div>
                        </div>
                    </>
                    :
                    <center>
                        <h1>Loading...</h1>
                    </center>
            }
        </div>
    );
}

export default App;