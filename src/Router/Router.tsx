import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "../pages/Layout/Layout";
import Error from '../pages/Error/Error'
import Main from '../components/Main/Main'
import Profile from '../components/Profile/Profile'
import Mycart from "../components/Mycart/Mycart";
import Favorite from "../components/Favorite/Favorite";
import Settings from "../components/Settings/Settings";
import AdminPage from '../pages/AdminPage/AdminPage'
import ProductPage from "../pages/ProductPage/ProductPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={"/"} element={<Layout />}>
        <Route index element={<Main />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/mycart' element={<Mycart />} />
        <Route path='/favorite' element={<Favorite />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/product/:id' element={<ProductPage/> } />
      </Route>
      <Route path="/admin/dash" element={<AdminPage />} />
      <Route path={"*"} element={<Error />} />
    </>
  )
);
