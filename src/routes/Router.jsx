import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import DashBoard from "../pages/dashboard/DashBoard";

const IndexApp = () =>{
    return(
        <div style={{height: '100%'}}>
            <Router>
                <Routes>
                    <Route exact path="/" element={<DashBoard/>} />
                </Routes>
            </Router>
        </div>
    )
}

export default IndexApp;