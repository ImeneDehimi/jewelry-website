import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Cart from './pages/Cart/Cart.jsx';
import Details from './pages/Details/Details.jsx';
import About from './pages/About/About.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Collection from './pages/Collection/Collection.jsx';
import Signup from './pages/SignUp/Signup.jsx';
import Signin from './pages/SignIn/Signin.jsx';
import { store } from './redux/store.js'
import { Provider } from 'react-redux'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/about",
    element: <About></About>,
  },
  {
    path: "/contact",
    element: <Contact></Contact>,
  },
  {
    path: "/collection",
    element: <Collection></Collection>,
  },
  {
    path: "/cart",
    element: <Cart></Cart>,
  },
  {
    path: "/post/:postId",
    element: <Details></Details>,
  },
  {
    path: "/signup",
    element: <Signup></Signup>,
  },
  {
    path: "/signin",
    element: <Signin></Signin>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Provider store={store}>
      <RouterProvider router={router} />
      </Provider>
  </StrictMode>,
)
