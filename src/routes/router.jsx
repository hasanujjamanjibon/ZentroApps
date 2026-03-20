import { createBrowserRouter } from 'react-router';
import App from '../App';
import Home from '../Page/Home';
import Details from '../Page/Details';
import AllApps from '../Page/AllApps';
import Installation from '../Page/Installation';
import ErrorRoute from '../Page/ErrorRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/details/:id', element: <Details /> },
      { path: '/apps', element: <AllApps /> },
      { path: '/installation', element: <Installation /> },
      {
        path: '*',
        element: <ErrorRoute />,
      },
    ],
  },
]);

export default router;
