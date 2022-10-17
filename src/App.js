import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Orders from './Components/Orders';
import Register from './Components/Register';
import Main from './Layout/Main';
import PrivateRoutes from './Routes/PrivateRoutes';

function App() {
  const route = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <PrivateRoutes><Home></Home></PrivateRoutes>
        },
        {
          path: '/orders',
          element: <PrivateRoutes> <Orders></Orders> </PrivateRoutes>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
