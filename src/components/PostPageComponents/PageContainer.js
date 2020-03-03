import React, {useState, useEffect} from "react";
import PostContainer from "./PostContainer";

import axios from "axios";

function PageContainer (){

    const [nasaData, setNasaData] = useState([])

    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
            .then((response) => {
                // console.log(response)
                setNasaData(response.data)
            })
            .catch((err) => {console.log(err)})
    },[])

    return (
        <div className="pageContainer">
            <PostContainer content={nasaData} />
        </div>
    )
}

export default PageContainer;