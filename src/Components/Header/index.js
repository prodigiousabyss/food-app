import logo from "./../../logo.svg";

export const Header = () => {
return (
    <div className="bg-gray-100">
       <div className="flex justify-between px-4">
        <div className="flex items-center font-medium text-xl">
          <img className="w-16" src={logo} alt="logo"/> Swiggy
        </div>
        <div className="flex">
            <div className="flex space-x-2 font-medium text-md">
                <button className="">About us</button>
                <button>Contact</button>
            </div>
        </div>
       </div>
    </div>
)
}