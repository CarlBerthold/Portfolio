import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react'


export default function Weather() {

    
    const [search, setSearch]=useState("");

    const [city, setCity]=useState("")
    const [current, setCurrent]=useState("")
    const [icon, setIcon]= useState("")

     
    // trying t pass a variable (setSearch) from the Input field to (searchQuery)

    useEffect(() => {
        
        const API_URL1 = "https://api.weatherapi.com/v1/current.json?key=49b0dbf2206a4b6b859104808221201&q="
        const API_URL2 = "&aqi=no"
        //let searchQuery = search
        const getWeatherData = () => {
            axios.get(`${API_URL1}${search}${API_URL2}`)
            //axios.get(`https://api.weatherapi.com/v1/current.json?key=49b0dbf2206a4b6b859104808221201&q=${search}&aqi=no`)
            .then((response)=>{
                console.log(response)
                //console.log(response.data.current.condition.icon)
                setCity(response.data.location)
                setCurrent(response.data.current)
                setIcon(response.data.current.condition.icon)
            })
            .catch((err)=>console.log(err))
        }
        getWeatherData();  
    }, [search])


    function handleChange(e){
        setSearch(e.target.value)
        console.log(e.target.value)
        //console.log(setSearch)
    }
    

    return (
        <div>
            <div className="WeatherInput">

                <div className="search">
                    <form>
                    
                        <input 
                        type="text" 
                        name="search" 
                        value={search} 
                        onChange={handleChange} 
                        placeholder="enter your city" id="search">
                        </input>
                        
                        {/* <button onClick={}>see my weather </button> */}
                       
                    </form>
                </div>
                
            </div>


            <h1>Current WEATHER</h1>
            <h3>In {city.name}</h3>
            <h3>Current:{city.text}</h3>
            <img src={icon} alt=""/>
            <h3>Temperature:{current.temp_c}</h3>
            <h3>feels like: {current.feelslike_c}</h3>
            
            

        </div>
    )
}
