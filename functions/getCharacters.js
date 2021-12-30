const axois = require('axios');

exports.handler = async (event,context ,callback) => {
  
 const url = "https://www.breakingbadapi.com/api/characters";
 const headers = {
   'Access-Control-Allow-Origin': '*',
   'Access-Control-Allow-headers': 'origin, X-Requested-With, content-type, accept, XMLHttpRequest',
   'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
 };
 try {
     const characters = await axois.get(url)
     const charactersInfo = characters.data 
    
console.log(charactersInfo)
     return {
        headers,
        statusCode: 200,
        body: JSON.stringify(charactersInfo),
        
    };
 } catch (err) {
    console.log(err)
    return {
        headers,
        statusCode: 402,
        body: err.stack,
    };
 }  
};