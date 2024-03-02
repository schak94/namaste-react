export const ResturantCard=(props)=>{
    const {
        name,
        costForTwoString,
        veg,
        avgRating,
        cloudinaryImageId

    } = props.data?.info;
    return(
        <div className="m-2 p-2 w-28 bg-green-100 rounded-sm hover:bg-green-300">
           <img className=" rounded-sm"
           src={'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/'+cloudinaryImageId}
           />
           <p className="truncate text-overflow: ellipsis text-base">{name}</p>
           <p className="text-xs">{costForTwoString}</p>
           <p className="text-xs">{veg?"VEG":"NON-VEG"}</p>
           <p className="text-xs">{avgRating}</p>
        </div>
    )
}



export const ResCardWithPromoted = (ResturantCard) => {
   return (props)=>{
        return(
        <div>
            <label className=" bg-black text-white absolute rounded-md p-1 opacity-90 text-xs">Promoted</label>
            <ResturantCard {...props}/>
        </div>
        )
   }
}
 
