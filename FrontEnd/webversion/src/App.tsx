// Library
import { Routes, Route } from "react-router-dom"

// Components
import { Layout } from "./components/layout/layout"
import { Error } from "./components/Error/error"
import { HomePage } from "./Page/Home"


function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<HomePage/>} />
            <Route path="*" element={<Error/>}/>
          </Route>
        </Routes>
    </>
  )
}

export default App
