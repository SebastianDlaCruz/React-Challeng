import {
  createBrowserRouter
} from "react-router-dom";
import Balance from "../pages/Balance/Balance";
import Home from "../pages/Home/Home";
export const router =   createBrowserRouter([
  {
    path:"/",
    element: <Home/>,
    children:[
      {
        path:'tipo_de_cuenta/:idCuenta',
        element: <Balance/>
      }
    ]
  }
])