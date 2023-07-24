import "./index.css";
import Login from "./Screens/Login/Login";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Auth from "./Screens/Layouts/Auth";
import Register from "./Screens/Register/Register";
import Dash from "./Screens/Layouts/Dash";
import Home from "./Screens/home/home";

function App() {
  const route = createBrowserRouter([
    {
      path: '/',
      element: <Auth />,
      children: [
        {
          index: true,
          element: <Login />
        },
        {
          path: 'register',
          element: <Register />
        },
      ]
    },
    {
      path: '/Home',
      element: <Dash />,
      children: [
        {
          index: true,
          element: <Home />
        }
      ]
    },
  ])
  return (
    <RouterProvider router={route} />
  );
}

export default App;
