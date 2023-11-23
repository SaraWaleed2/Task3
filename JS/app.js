const request = require("request")

//geocode
const geocode = require("./allData/geocode")

//forecast
const forecast = require("./allData/forecast")

//country
const country = process.argv[2]

geocode(country, (error, data) => {
    console.log("ERROR: " , error);
    console.log("Data: " , data);

    if (data) {
        forecast(data.longtitude, data.latitude, (error, data) => {
            console.log("ERROR: " , error);
            console.log("Data: " ,  data);
        })
    } else {
        console.log("ERROR in entered data.");
    }
})
