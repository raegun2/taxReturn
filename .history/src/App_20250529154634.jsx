import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import MainPage1 from "./pages/MainPage1";
import NotFound from "./pages/NotFound";
import AccountingAdvisory from "./pages/Accounting&Advisory";
import ContactMe from "./pages/ContactMe";
import TaxReturn2025 from "./pages/TaxReturn2025";
import FeesAndCharges from "./pages/feesAndCharges";
import HelpfulResources from "./pages/helpfulResources";
import Consent from "./pages/Consent";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/Terms&Conditions";
import TaxReturn2023 from "./pages/TaxReturn2023";
import TaxReturn2024 from "./pages/TaxReturn2024";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    errorElement: <NotFound />,
    children: [
      { index: true, element: <MainPage1 />},
      { path: "AccountingAdvisory", element: <AccountingAdvisory /> },
      { path: "ContactMe", element: <ContactMe /> },
      { path: "taxreturn2025", element: <TaxReturn2025/> },
      { path: "taxreturn2023", element: <TaxReturn2023/> },
      { path: "taxreturn2024", element: <TaxReturn2024/> },
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