import logo from "./../../logo.png";

export const RestaurantCard = ({name}) => {
    return (
        <div className="border-2 border-gray-200 w-40 h-60 flex flex-col justify-around">
            <div>
            <img className="w-20 h-20" src={logo} alt="burger"/>
            </div>
            <div>
            <h1>{name}</h1>
            <h2>4.5 stars</h2>
            <h3>200rs. for two</h3>
            </div>
        </div>
    )
}