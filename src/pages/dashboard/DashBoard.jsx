import NavBar from "../components/NavBar/NavBar";
import './styles/dashboard.css';
import { SearchContext, SearchContextStructure } from './context/SearchContext';
import { useState } from "react";
import Content from "./components/Content";

const DashBoard = () =>{
    
    const [search, setSearch] = useState(SearchContextStructure);
    return(
        <SearchContext.Provider value= {{ search, setSearch }}>
            <div className="dashboard-main">
                <NavBar/>
                <Content/>
            </div>
        </SearchContext.Provider>
    )
}

export default DashBoard;