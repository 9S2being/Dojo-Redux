import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import { SignUp } from '../components/Cadastro/SignUp';
import { SignIn } from '../components/Login/SignIn';


 const router = createBrowserRouter([
  {
    path: '/',
    element: <SignIn  />,
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
