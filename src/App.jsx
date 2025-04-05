import AppLayout from "./layout/AppLayout";
import About from "./pages/About";
import AppDevelopment from "./pages/AppDevelopment";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/application-development",
          element: <AppDevelopment />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
