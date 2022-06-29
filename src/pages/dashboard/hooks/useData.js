import { useState, useContext, useEffect } from "react"
import { SearchContext } from "../context/SearchContext";
import { nasaAdapter } from "../adapters";

export const useData = () =>{

    const { search } = useContext(SearchContext);
    const [data, setData] = useState(false);
    
    const { searchValue} = search;
    
    if(!searchValue) return;
    console.log('Search value from hook ', searchValue)

    nasaAdapter(searchValue).then(response=>{
        console.log('From hook ',response);
    }).catch(e=>console.log('Error from hook ', e));

    return data
}