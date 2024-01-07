import logo from "./../../logo.png";

export const Header = () => {
return (
    <div className="bg-gray-100">
       <div className="flex justify-between px-4">
        <div>
          <img className="w-20" src={logo} alt="logo"/>
        </div>
        <div className="flex">
            <div className="flex space-x-2">
                <button className="">About us</button>
                <button>Contact</button>
            </div>
        </div>
       </div>
    </div>
)
}