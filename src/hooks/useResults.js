import {useEffect, useState} from "react";
import yelp from "../api/yelp";


export default ()=>{
    const [errorMessage, setErrorMessage] = useState("");
    const [results, setResults] = useState([]);

const searchApi = async (searchTearm)=>{
    try{
        const response = await yelp.get('/search', {
            params:{
              limit: 50  ,
              term: searchTearm,
              location: 'san jose'
            }
           });
           setResults(response.data.businesses)
           setErrorMessage('')
    } catch(err) {
         setErrorMessage('Something went wrong')
    }

}

useEffect(()=>{searchApi('pasta')},[])

return [searchApi, results, errorMessage]
}