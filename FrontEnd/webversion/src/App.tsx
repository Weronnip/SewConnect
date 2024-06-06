// Library
import { Routes, Route } from "react-router-dom"

// Components
import { Layout } from "./components/layout/layout"
import { HomePage } from "./Page/Home"


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
