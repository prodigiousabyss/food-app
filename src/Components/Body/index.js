import { useEffect } from "react"
import { RestaurantCard } from "./RestaurantCard"

export const Body = () => {

  useEffect(() => {
    fetchData();
    console.log("useEffect called")
  },[])

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/api/seo/getListing?lat=28.389008871193543&lng=76.98319293301593")
    const json = await data.json();
    console.log(json);
  }

  return (
    <div className="flex">
        <RestaurantCard name="Meghana Foods"/>
        <RestaurantCard name="KFC"/>
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
    </div>
  )
}
