import { Route, Routes } from "react-router-dom"
import Timeline from "../components/Timeline"
import { Introduction,Conclusion,References } from "@/pages"


const RoutesIndex = () => {
  return (
    <>
     <Routes>
       <Route path='/' element={<Timeline/>}/>
       <Route path='/Introduction' element={<Introduction/>} />
       <Route path='/Conclusion' element={<Conclusion/>} />
       <Route path='/References' element={<References/>} />

     </Routes>
    
    </>
  )
}

export default  RoutesIndex