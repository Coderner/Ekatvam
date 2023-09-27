import "./App.css";
import Home from "./components/Home";
import Create from "./components/Create"
import Dashboard from "./components/Dashboard";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const appRouter = createBrowserRouter([{
  path:"/",
  element:<Home/>
},
{
  path:"/dashboard",
  element:<Dashboard/>
},
{
  path:"/create",
  element:<Create/>
}])

function App() {

  return (
    <div>
       <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;
