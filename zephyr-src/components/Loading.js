import { Wave } from "better-react-spinkit"


function Loading() {

    return (
        <center style ={{ display: "grid", placeItems: "center", height : "100vh" }}>
            <div>
                <img src= "/favicon2.ico"></img>
                <Wave color="#7A63FF" size = {60} />
            </div>
        </center>
    )}

export default Loading;

