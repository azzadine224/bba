const axois = require('axios');

exports.handler = async (event,context ,callback) => {
 const querystring = event.queryStringParameters;
 const name = querystring.name ;
 const url = `https://www.breakingbadapi.com/api/characters?name=${name}` 
      
 const headers = {
   'Access-Control-Allow-Origin': 'https://61cdb0a3e898a100083ecf30--blissful-tereshkova-46d989.netlify.app/,*',
   'Access-Control-Allow-headers': 'origin, X-Requested-With, content-type, accept',
   'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
 };

 try {
    const getcharacter = await axois.get(url)
    const character = getcharacter.data

    return {
       statusCode: 200,
       headers,
       body: JSON.stringify(character),

   };
} catch (err) {
   return {
       statusCode: 402,
       headers,
       body: err.stack,
   };
} 
};
