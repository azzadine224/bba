import { useEffect, useState} from "react"
import axios from 'axios';




const useFetch = (name) => {
    const [items, setItems] = useState ([])
    const [quotes, setQuotes] = useState ([])
    const [deaths, setDeaths] = useState ([])
    let itemsApi =`/.netlify/functions/getCharacter?name=${name}`;
    let quotesApi = `/.netlify/functions/getQuots?name=${name}`;
    let deathsApi = '/.netlify/functions/getDeaths'; 
    const getItems = axios.get(itemsApi)
    const getQuotes = axios.get(quotesApi)
    const getDeaths = axios.get(deathsApi)
useEffect (() =>{
  const fetch = () =>{
    axios.all([getItems,getQuotes,getDeaths]).then(
      axios.spread((...allData) =>{
        const allCharacters = allData[0]
        const allQuotes = allData[1]
        const allDeaths = allData[2]

        setItems(allCharacters)
        setQuotes(allQuotes)
        setDeaths(allDeaths)
      })
      )
  }
  fetch()
},[])  
  
  return {items,quotes, deaths}
}

export default useFetch;