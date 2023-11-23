//forecast

const request = require("request")
const forecast = (longtitude, latitude, callback) => {

    const url = "http://api.weatherapi.com/v1/current.json?key=eec94890f7624c55b97131903232111&q=" + longtitude +","+ latitude
    request({ url, json: true }, (error, response) => {
        if (error) {
            //low level error
            callback("OOPS, An ERROR has occured.", undefined);
        }
        else if (response.body.error) {
            callback(response.body.error.message, undefined);
        }
        else {
            callback(undefined, "Current Location : " + response.body.location.name + " , Current Region : " + response.body.location.region + " , Current Condition : " + response.body.current.condition.text + " , Current Temperature : " + response.body.current.temp_c + " C");
        }
    })

}

module.exports = forecast