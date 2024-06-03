import Navbar from "./components/Navbar"
import AirplaneCard from "./components/AirplaneCard/AirplaneCard"
import FilterPanel from "./components/FilterPanel/FilterPanel"
function App() {
  return (
    <div className="bg-[#3B3B3B] h-full">
      <Navbar />
      <div className="grid m-2 gap-x-0">
        <div className="row-start-1 col-start-1">
          <FilterPanel />
        </div>
        <div className="row-start-1 col start-2">
              <AirplaneCard/>
        </div>
         
      </div>
     
    </div>
 
  )
}

export default App
