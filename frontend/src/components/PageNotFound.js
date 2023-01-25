import { Link } from "react-router-dom";

const PageNotFound = ()=>{
    return(
        <div>
            <p>Page Not Found</p>
            <Link to="/home">Return</Link>
        </div>
    )
}

export default PageNotFound;