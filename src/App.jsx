import AppLayout from "./layout/AppLayout";
import About from "./pages/About";
import AppDevelopment from "./pages/AppDevelopment";
import ArtificialIntelligence from "./pages/ArtificialIntelligence";
import Contact from "./pages/Contact";
import DigitalMarketing from "./pages/DigitalMarketing";
import Healthcare from "./pages/Healthcare";
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
        {
          path: "/digital-marketing",
          element: <DigitalMarketing />,
        },
        {
          path: "/healthcare-facilitator",
          element: <Healthcare />,
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
