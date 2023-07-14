export const ResturantCard=(props)=>{
    const {
        name,
        costForTwoString,
        veg,
        avgRating,
        cloudinaryImageId

    } = props.data?.data;
    return(
        <div>
           <img className="res-logo" 
           src={'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/'+cloudinaryImageId}
           />
           <h5>{name}</h5>
           <h6>{costForTwoString}</h6>
           <h6>{veg?"VEG":"NON-VEG"}</h6>
           <h6>{avgRating}</h6>
        </div>
    )
}