//geocode

const request = require("request")
const geocode = (address, callback) => {

    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + address + ".json?access_token=pk.eyJ1Ijoic2FyYTF3IiwiYSI6ImNscDhzbTdpdjJqc3Aya281dWNydHFjbHMifQ.v03XEqilUyFQC-2AkBo4xg"
    request({ url, json: true }, (error, response) => {
        if (error) {
            //low level error
            callback("OOPS, unable to connect geocode services.", undefined);
        }
        else if (response.body.message) {
            callback(response.body.message, undefined);
        }
        else if (response.body.features.length == 0) {
            callback("Unable to find Location", undefined);
        }
        else {
            callback(undefined, {
                longtitude: response.body.features[0].center[0],
                latitude: response.body.features[0].center[1]
            }
            )
        }
    })
}

module.exports = geocode