import { RestaurantCard } from "./RestaurantCard"

export const Body = () => {
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
