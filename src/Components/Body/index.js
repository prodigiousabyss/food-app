import { useCallback, useEffect, useState } from "react";
import { RestaurantCard } from "./RestaurantCard";
import { Shimmer } from "./Shimmer";

export const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);

  const fetchData = useCallback(async () => {
    const data = await fetch(
      "https://www.swiggy.com/api/seo/getListing?lat=28.389008871193543&lng=76.98319293301593"
    );
    const json = await data.json();

    setListOfRes(
      json?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (listOfRes.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="flex justify-center w-full py-10">
      <div className="grid grid-cols-5 gap-6">
        {listOfRes.map((res) => (
          <RestaurantCard restaurant={res.info} key={res.info.id} />
        ))}
      </div>
    </div>
  );
};
