const axios = require('axios')
// require the dotenv package
require('dotenv').config()


console.log(process.env.BING)
console.log(process.env)

axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.API_KEY}`)
    .then(response => {
        console.log(response.data)
    })
    .catch(console.log)