import flightLogo from "../assets/svg/flightLogo.svg";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
      <div className="flex flex-row justify-between bg-gray-800 h-[4rem]">
          <div className="flex flex-row items-center ml-4">
              <div className="w-[3.8rem]">
                <img src={flightLogo} alt="" />
              </div>
              <div className="text-white text-3xl font-bold">
                <p>JetSetGo</p>
              </div>
          </div>
          <div className="flex items-center">
              <ul className="
              flex flex-row text-white gap-5 text-1xl
              font-bold mr-3
              ">
                  <Link to="/login">
                      <li className="bg-green-700 rounded-xl pl-4 pr-4 pb-2 pt-1">Login</li>
                  </Link>
                  <Link to="register">
                      <li className="bg-white rounded-xl pl-4 pr-4 pb-2 pt-1 text-black">Register</li>
                  </Link>
                  
              </ul>
          </div>
    </div>
  )
}

export default Navbar
