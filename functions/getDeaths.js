const axois = require('axios');

exports.handler = async () => {
  
 const url = "https://www.breakingbadapi.com/api/deaths";
 try {
     const deaths = await axois.get(url)
     const deathsInfo =  deaths.data
     const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-headers': 'origin, X-Requested-With, content-type, accept',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
      };

     return {
        statusCode: 200,
        headers,
        body: JSON.stringify(deathsInfo),
    };
 } catch (err) {
    return {
        statusCode: 402,
        headers,
        body: err.stack,
    };
 }  
}