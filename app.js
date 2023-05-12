const forecast = require('./data1.js/forecast')
const request = require('request')
const geocode = require('./data1.js/geocode')


const country = process.argv[2]
geocode(country, (error, data) => {
  console.log("ERROR", error)
  console.log("DATA", data)
  if (data) {
    forecast(data.latitude, data.longitude, (error, data) => {
      console.log("ERROR : ", error)
      console.log("DATA : ", data)
    })
  } else {
    console.log("Invalid Data for" + country)
  }
})
