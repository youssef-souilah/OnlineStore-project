import './Loading.css';
import load from "../../images/loading-page.gif";

const Loading=()=>{
    return(
        <div className="loading">
            <h1>Loading...</h1>
            <div>
                <img src={load} alt="hala" />
            </div>
        </div>
    )
}
export default Loading;
