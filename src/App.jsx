import AppLayout from "./layout/AppLayout";
import About from "./pages/About";
import MobileDevelopment from "./pages/AppDevelopement/MobileDevelopment";
import WebDevelopment from "./pages/AppDevelopement/WebDevelopment";
import AppDevelopment from "./pages/AppDevelopment";
import ArtificialIntelligence from "./pages/ArtificialIntelligence";
import CRMAutomation from "./pages/ArtificialIntelligence/CRMAutomation";
import CustomerSupportAutomation from "./pages/ArtificialIntelligence/CustomerSupportAutomation";
import EmailAutomation from "./pages/ArtificialIntelligence/EmailAutomation";
import SalesAutomation from "./pages/ArtificialIntelligence/SalesAutomation";
import SocialAutomation from "./pages/ArtificialIntelligence/SocialAutomation";
import Contact from "./pages/Contact";
import DigitalMarketing from "./pages/DigitalMarketing";
import EmailMarketing from "./pages/DigitalMarketing/EmailMarketing";
import FBInstaAds from "./pages/DigitalMarketing/FBInstaAds";
import GoogleAdsense from "./pages/DigitalMarketing/GoogleAdsense";
import LogoDesign from "./pages/DigitalMarketing/LogoDesign";
import TermsOfUse from "./pages/TermsOfUse";
import Privacy from "./pages/Privacy";
import YoutubeAds from "./pages/DigitalMarketing/YoutubeAds";
import Healthcare from "./pages/Healthcare";
import Home from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import SEOService from "./pages/DigitalMarketing/SEOService";
import { useEffect } from "react";
import RefundPolicy from "./pages/RefundPolicy";

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
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
          path: "/application-development/web-development",
          element: <WebDevelopment />,
        },
        {
          path: "/application-development/mobile-app-development",
          element: <MobileDevelopment />,
        },
        {
          path: "/artificial-intelligence",
          element: <ArtificialIntelligence />,
        },
        {
          path: "/artificial-intelligence/email-marketing-automation",
          element: <EmailAutomation />,
        },
        {
          path: "/artificial-intelligence/crm-automation",
          element: <CRMAutomation />,
        },
        {
          path: "/artificial-intelligence/sm-automation",
          element: <SocialAutomation />,
        },
        {
          path: "/artificial-intelligence/sales-ecom-automation",
          element: <SalesAutomation />,
        },
        {
          path: "/artificial-intelligence/customer-support-automation",
          element: <CustomerSupportAutomation />,
        },
        {
          path: "/digital-marketing",
          element: <DigitalMarketing />,
        },
        {
          path: "/digital-marketing/logo-design-service",
          element: <LogoDesign />,
        },
        {
          path: "/digital-marketing/fb-instagram-ads-service/",
          element: <FBInstaAds />,
        },
        {
          path: "/digital-marketing/google-ads-service/",
          element: <GoogleAdsense />,
        },
        {
          path: "/digital-marketing/seo-service/",
          element: <SEOService />,
        },
        {
          path: "/digital-marketing/email-marketing-service/",
          element: <EmailMarketing />,
        },
        {
          path: "/digital-marketing/youtube-ads-service/",
          element: <YoutubeAds />,
        },
        {
          path: "/healthcare-facilitator",
          element: <Healthcare />,
        },
        {
          path: "/terms",
          element: <TermsOfUse />,
        },
        {
          path: "/privacy",
          element: <Privacy />,
        },
        {
          path: "/refund-policy",
          element: <RefundPolicy />,
        },
      ],
    },
  ]);
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}

export default App;
