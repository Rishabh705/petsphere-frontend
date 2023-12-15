import Error from "./components/NotFound"
import Home from "./components/Home";
import HomeLayout from './Layouts/HomeLayout'
import PetsLayout from './Layouts/PetsLayout'
import About from "./components/About";
import Contact from "./components/Contact";
import Pet from "./components/Pet";
import Login from "./components/Login";
import Register from "./components/Register";
import Detail from "./components/Detail";
import AuthRequires from "./components/AuthRequires"
import { useSelector } from 'react-redux'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import Favorites from "./components/Favorites";

function App() {
  const auth = useSelector((state) => {
    return state.auth
  })
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<HomeLayout />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route element={<AuthRequires />}>
        <Route path="pets" element={<PetsLayout />}>
          <Route index element={<Pet />} />                 {/* All pets list*/}
        </Route>
        <Route path="pets/:id" element={<Detail />} />
        <Route path="favorites" element={<Favorites user={auth.user} />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Route>
  )
  )
  return (
    <RouterProvider router={router} />
  )
}
export default App
