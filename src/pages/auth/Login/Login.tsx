import passwordHide from "../../../assets/svg/password-hide.svg"
import passwordSee from "../../../assets/svg/password-see.svg"
import loginPageImage from "../../../assets/svg/login-page-image.jpg"
import Logo from "../../../components/Logo.tsx";
import { useState } from "react";
import { useLoginUser } from "./hooks/use-login.ts";

const Login = () => {

  const [isHidden, setHidden] = useState<boolean>(false)
  
  const togglePassword = () => setHidden(!isHidden);
  const { mutate } = useLoginUser();

  const handleLogin = (e: any) => {
    e.preventDefault()
    const payload = {
      email: e.target.email.value,
      password: e.target.password.value
    }
    mutate(payload);
  }

  return (
    <div className="flex flex-row items-center justify-start h-full w-full">
      <div className="flex flex-col justify-center bg-slate-700 h-full w-1/2">
        <Logo/>
        <form onSubmit={(e) => handleLogin(e)} className="flex flex-col items-center p-10">
          <div className="flex flex-col justify-center">

            <input type="text" name = "email" className="text-input focus:bg-gray-100"
              placeholder="E-mail Address" />
          </div>
          <div className="flex flex-row mt-8 relative items-middle">
            <input type={isHidden ? "text" : "password"} name="password" className="text-input focus:bg-gray-100"
              placeholder="Password" typeof="password" />
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
      <div className="flex flex-row place-items-center h-full w-1/2" >
        <img src={loginPageImage} className=""/>
      </div>
    </div>
  )
}

export default Login
