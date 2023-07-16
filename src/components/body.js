import { ResturantCard } from "./resCard"
import {data} from "../../data" // named export is exported like this.
import { useEffect, useState } from "react"
import ShimmerComp from "./shimmer"
import { Link } from "react-router-dom"
import {RES_CARD} from "../utils/constants"
import useOnlineStatus from "../utils/useOnlineStatus"

 const Body=()=>{
    const [resList, setList] = useState([]);
    const [filterResList, setFilterList] = useState([]);
    const [searchText, setSearchText] = useState("");

    const onLine = useOnlineStatus();

    useEffect(()=>{
        fetchResturantList()
    },[])

   const fetchResturantList = async() =>{
        const resData = await fetch(RES_CARD);
        
        const res = await resData.json();

        setList(res?.data?.cards[2]?.data?.data?.cards); 
        setFilterList(res?.data?.cards[2]?.data?.data?.cards)

   }

    function filterTopRated(){
        let res = resList.filter(res=>res.data.avgRating>4);
        setFilterList(res)
    }

    function searchResturant(value){
        if(value){
        let res = resList.filter(res=>res.data.name.includes(value));
        console.log(res)
        setFilterList(res)
        }
    }

    function search(value){
        if(value){
            setSearchText(value);
        }
        else{
            setSearchText("");
            fetchResturantList();
        }
        
    }

    if(!onLine) return <h1>You are Offline!</h1>

    return(
        <div className="">

           { resList.length===0? <ShimmerComp/>:<><div className="flex justify-between items-center">
                <label className="m-1 p-1" htmlFor="search-res">
                <input className="border-2 border-solid border-green-300 rounded-sm p-1 hover:border-green-400 focus:outline-none focus:border-green-400" name="search-res"type="text" placeholder="Search" value={searchText} onChange={(e)=>{
                  search(e.target.value)
                }}/>
                <button className=" mx-2 p-1 bg-green-300 rounded-sm hover:bg-green-400"onClick={()=>{
                    searchResturant(searchText);
                }}>Search</button>
                </label>
                
                <button className="mx-2 p-1.5 bg-green-300 hover:bg-green-400 rounded-sm" onClick={()=>{
                    filterTopRated();
                }}>Top Rated</button>
            </div>
            <div  className="flex flex-wrap justify-center" >
                {
                    filterResList.map((d)=>{
                        return(
                           
                           <Link key={d.data.id} to={"/resturant/"+d.data.id}><ResturantCard data={d}/></Link>
                       
                        )
                    })
                } 
            </div></>}
        </div>
    )
}

export default Body;