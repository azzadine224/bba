const axois = require('axios');

exports.handler = async event => {
 const querystring = event.queryStringParameters;
 const name = querystring.name ;
 const url = `https://www.breakingbadapi.com/api/quote?author=${name}`

 try {
    const quotes = await axois.get(url)
    const qoutesInfo = quotes.data
    const headers = {
      'Access-Control-Allow-Origin': 'https://61cdb0a3e898a100083ecf30--blissful-tereshkova-46d989.netlify.app/,*',
      'Access-Control-Allow-headers': 'origin, X-Requested-With, content-type, accept',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
    };

    return {
       statusCode: 200,
       headers,
       body: JSON.stringify(qoutesInfo),
   };
} catch (err) {
   return {
       statusCode: 402,
       headers,
       body: err.stack,
   };
} 
    

};
