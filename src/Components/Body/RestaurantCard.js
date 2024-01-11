export const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="rounded-xl border border-gray-100 flex flex-col justify-between overflow-hidden h-[20rem] w-[15rem] hover:scale-95 transition-all">
      <div
        className="w-full h-[30rem] bg-center bg-cover flex items-end"
        style={{
          "background-image": `url(https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant.cloudinaryImageId})`,
        }}
      >
        <div className="bg-gradient-to-t w-full h-1/3 from-black to-transparent"></div>
      </div>
      <div className="h-[6rem]text-black space-y-2">
        <h1 className="font-bold text-md truncate">{restaurant.name}</h1>
        <h2 className="font-medium text-sm">
          Rating - {restaurant.avgRating}⭐
        </h2>
        <h3 className="font-medium text-sm">{restaurant.costForTwo}</h3>
      </div>
    </div>
  );
};
