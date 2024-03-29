import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import SignUp from '../components/Cadastro';
import Login from '../components/Login'

 const router = createBrowserRouter([
  {
    path: '/',
    element: <Login  />,
  },
  {
    path: '/SignUp',
    element: <SignUp />,
  },
]);  


const RouterApp: React.FC = () => {
    return <RouterProvider router={router} />
    }
    
    export default RouterApp
