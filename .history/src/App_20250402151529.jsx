import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import MainPage from "./pages/MainPage";
import NotFound from "./pages/NotFound";
import AccountingAdvisory from "./pages/Accounting&Advisory";
import ContactMe from "./pages/ContactMe";
import OnSpotTaxReturn from "./pages/OnSpotTaxReturn";
import FeesAndCharges from "./pages/feesAndCharges";
import HelpfulResources from "./pages/helpfulResources";
import Consent from "./pages/Consent";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/Terms&Conditions";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    errorElement: <NotFound />,
    children: [
      { index: true, element: <MainPage />},
      { path: "AccountingAdvisory", element: <AccountingAdvisory /> },
      { path: "ContactMe", element: <ContactMe /> },
      { path: "OnSpotTaxReturn", element: <OnSpotTaxReturn /> },
      { path: "FeesAndCharges", element: <FeesAndCharges />},
      { path: "HelpfulResources", element: <HelpfulResources />},
      { path: "consent", element: <Consent />},
      { path: "privacypolicy", element: <PrivacyPolicy />},
      { path: "terms&conditions", element: <TermsAndConditions />},
      
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;