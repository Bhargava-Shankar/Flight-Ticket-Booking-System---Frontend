

const Login = () => {
  return (
    <div className="flex items-center justify-start h-full">
      <div className="flex flex-col justify-center h-full sm:w-full md:w-1/3">
        <form action="" className="flex flex-col items-center bg-slate-700  h-[100vh] p-10">
          <div className="flex flex-col">
            <input type="text" className="w-[10rem] sm:w-[27rem] h-[30px] rounded-sm outline-1 outline-blue-300 p-4 pb-5 pt-5
          font-semibold text-[17px]
           focus:outline-none focus:bg-slate-200"
              placeholder="Username or Email" />
          </div>
          <div className="flex flex-col pt-10">
            <input type="text" className="w-[27rem] h-[30px] rounded-sm outline-1outline-blue-300 p-4 pb-5 pt-5 font-semibold text-[17px] focus:outline-none focus:bg-slate-200"
              placeholder="Password" />
          </div>
          <div className="pt-10">
            <button type="submit"
              className="bg-white w-40 p-3 rounded-[50px] font-bold text-xl">LOGIN</button>
          </div>
        </form>
      </div>
     
    </div>
  )
}

export default Login
