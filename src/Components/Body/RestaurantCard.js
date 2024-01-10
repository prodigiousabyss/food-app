
export const RestaurantCard = ({ restaurant }) => {

    console.log('res', restaurant)
    
    return (
        <div className="border-2 border-gray-200 w-40 h-60 flex flex-col justify-around">
            <div>
            <img className="w-30 h-25" 
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + restaurant.cloudinaryImageId} 
            alt="resImage"/>
            </div>
            <div>
            <h1>{restaurant.name}</h1>
            <h2>{restaurant.avgRating} stars</h2>
            <h3>{restaurant.costForTwo}</h3>
            </div>
        </div>
    )
}