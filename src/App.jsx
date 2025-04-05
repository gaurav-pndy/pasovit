import AppLayout from "./layout/AppLayout";
import About from "./pages/About";
import AppDevelopment from "./pages/AppDevelopment";
import ArtificialIntelligence from "./pages/ArtificialIntelligence";
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
        {
          path: "/artificial-intelligence",
          element: <ArtificialIntelligence />,
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
