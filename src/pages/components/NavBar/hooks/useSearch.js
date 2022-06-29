import { useContext, useRef } from "react";
import { SearchContext } from "../../../dashboard/context/SearchContext";

export const useSearch = () =>{
    
    const { search, setSearch } = useContext(SearchContext);
    const refSearch = useRef();
    const onClick = () =>{

        if(!refSearch.current.value) return;
        
        setSearch({
            searchValue: refSearch.current.value
        })
    }

    return [refSearch, onClick];
}