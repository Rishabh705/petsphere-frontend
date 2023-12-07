import Error from "./components/NotFound"
import Home from "./components/Home";
import HomeLayout from './Layouts/HomeLayout'
import PetsLayout from './Layouts/PetsLayout'
import About from "./components/About";
import Contact from "./components/Contact";
import Pet from "./components/Pet";
import Detail from "./components/Detail";
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<HomeLayout />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="pets" element={<PetsLayout />}>
        <Route index element={<Pet />} />                 {/* All pets list*/}
      </Route>
      <Route path='/pets/:id' element={<Detail />} />                 {/* All pets list*/}
      <Route path="*" element={<Error />} />
    </Route>
  )
  )
  return (
    <RouterProvider router={router} />
  )
}
export default App
