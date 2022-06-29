import { useData } from "../hooks";
import Title from "./Title";

const Content = () =>{

    const data  = useData();


    return(
        <div className="content-dashboard">
          <Title/>
          
        </div>
    )
}

export default Content;