import { ResturantCard } from "./resCard"
import {data} from "../../data" // named export is exported like this.
import { useState } from "react"

 const Body=()=>{
    const [resList, setList] = useState(data);

    function filterTopRated(){
        let res = resList.filter(res=>res.data.avgRating>4);
        console.log(res)
        setList(res)
    }
    return(
        <div className="body">
            <div className="filter-btn">
                <button onClick={()=>{
                    filterTopRated();
                }}>Top Rated</button>
            </div>
            <div className="res-container">
                {
                    resList.map((d)=>{
                        return(
                           
                             <ResturantCard data={d} key={d.data.id}/>
                       
                        )
                    })
                } 
            </div>
        </div>
    )
}

export default Body;