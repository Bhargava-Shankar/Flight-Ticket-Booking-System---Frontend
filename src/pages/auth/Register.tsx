import passwordHide from "../../assets/svg/password-hide.svg"
import passwordSee from "../../assets/svg/password-see.svg"
import loginPageImage from "../../assets/svg/login-page-image.jpg"
import Logo from "../../components/Logo.tsx";
import { useState } from "react";

const Register = () => {

  const [isHidden, setHidden] = useState<boolean>(false)

  const togglePassword = () => setHidden(!isHidden);

  const handleRegister = (e: any) => {
    e.preventDefault()
    //HANDLE LOGIN LOGIC GOES HERE
  }

  return (
    <div className="flex flex-row items-center justify-start h-full w-full">
      <div className="flex flex-col justify-center bg-slate-700 h-full w-1/2">
        <Logo />
        <form onSubmit={(e) => handleRegister(e)} className="flex flex-col items-center p-8">
          <div className="flex flex-col">
            <input type="text" placeholder="First Name" className="text-input mb-5 "/>
            <input type="text" placeholder="Last Name" className="text-input "/>
          </div>

          <div className="flex flex-col justify-center mt-5">
            <input type="text" className="text-input focus:bg-gray-100"
              placeholder="E-mail Address" />
          </div>
          <div className="flex flex-row mt-5 relative items-middle">
            <input type={isHidden ? "text" : "password"} className="text-input focus:bg-gray-100"
              placeholder="Password" typeof="password" />
          </div>
          <div className="flex flex-row mt-5 relative items-middle">
            <input type={isHidden ? "text" : "password"} className="text-input focus:bg-gray-100"
              placeholder="Confirm Password" typeof="password" />
            <div className="flex flex-row items-center" onClick={() => togglePassword()}>
              {
                isHidden ? <img src={passwordHide}
                  className="h-7 absolute right-2  " /> : <img src={passwordSee} className="h-7 absolute right-2 " />
              }
            </div>
          </div>
          <div className="pt-10">
            <button type="submit"
              className="bg-white w-40 p-3 rounded-[50px] font-bold text-xl 
               active:bg-gray-100 ">LOGIN</button>
          </div>
        </form>
      </div>
      <div className="flex flex-row justify-center h-full w-1/2" >
        <img src={loginPageImage} className="h-" />
      </div>
    </div>
  )
}

export default Register
