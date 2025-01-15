import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//This was earlier needed when I was having a seperate App.js file which created confusion
//import App from './App';
import Header from "./components/Header"//you can also put extension .js (Header.js) it is one and the same
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestauranMenu from './components/RestauranMenu';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const App = () => {
  return (
    <div className='App'>
      <Header />
      {/** Header to be intact but the other pages should be below the header */}
      <Outlet /> {/** This is inside the App component and when the createBrowserRouter will be in App this outlet will be updating to the respective children of the element app based on the path */}
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        //Works only if the resId is in API and it does not work for random things
        path: '/restaurants/:resId', //the path after : is dynamic and resId will be taken dynamically based on the user input
        element: <RestauranMenu />, //This resId can be accessed by useParams hook in the RestauranMenu components
      },
    ],
    errorElement: <Error />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router = { appRouter } />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
