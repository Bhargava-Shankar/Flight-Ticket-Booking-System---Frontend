import flightLogo from "../assets/svg/flightLogo.svg"

const Logo = () => {
  return (
      <div className="flex flex-row justify-center items-center">
        <img src={flightLogo} className="h-[6rem]" />
        <p className="text-[3rem] font-bold text-white">JetSetGo</p>
      </div>
  )
}

export default Logo
