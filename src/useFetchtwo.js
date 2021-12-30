import { useState,useEffect } from "react"
import axios from 'axios';






const useFetchtwo = () => {
    const [items, setItems] = useState ([])
    const itemsApi =`/.netlify/functions/getCharacters`; 
   useEffect(() => {
    axios.get(itemsApi).then((response) => {
        setItems(response.data);
      });
},[])  

  return {items}
}

export default useFetchtwo;
